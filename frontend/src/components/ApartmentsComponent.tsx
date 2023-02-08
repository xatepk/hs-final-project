import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import usePagination from "../hooks/usePagination";
import { IApartments } from "../models/models";
import Apartment from "./Apartment";
import ApartmentsLocation from "./ApartmentsLocation";
import Footer from "./Footer";
import Header from "./Header";
import Pagination from "./Pagination";
import plural from 'plural-ru';
import ApartmentsFilter from "./ApartmentsFilter";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchHandbooks } from "../store/actions/apartmentsActions";
import Breadcrumb from "./Breadcrumb";
import RecommendedFilters from "./RecommendedFilters";
import ShareNetworks from "./ShareNetworks";

interface IApartmentsProps {
  apartments: IApartments[],
  loading: boolean,
  error: string,
  city?: string
}

function ApartmentsComponent({ apartments, loading, error, city }: IApartmentsProps) {

  const dispatch = useAppDispatch();
  const [sortList, setSortList] = useState<boolean>(true);
  const { rooms } = useAppSelector(state => state.handbook);

  const {
    firstContentIndex,
    lastContentIndex,
    page,
    gaps,
    nextPage,
    prevPage,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: sortList ? 3 : 6,
    count: apartments.length,
  });

  useEffect(() => {
    dispatch(fetchHandbooks());
  }, [dispatch])

  return (
    <>
      <Header city={city} />
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}


      <section className="apartments">
        <div className="apartments__header">
          <Breadcrumb
            title={city ? `Квартиры в ${city}` : 'Квартиры на сутки'}
            link={city ? `/apartments/${city}` : `/apartments`}
          />
          <p className="apartments__title">{`Аренда квартир на сутки${city ? ` в ${city}` : ''}`}</p>
          <RecommendedFilters />
        </div>
        <ApartmentsFilter cities={[]} rooms={rooms} />
        <div className="apartments__content">
          <div className="apartments__sort">
            <p>ПО УМОЛЧАНИЮ</p>
            <button
              className={`apartments__sort-list ${sortList ? 'apartments__sort-list_is-active' : ''}`}
              onClick={(() => setSortList(true))}>Список</button>
            <button
              className={`apartments__sort-tile ${!sortList ? 'apartments__sort-tile_is-active' : ''}`}
              onClick={(() => setSortList(false))}>Плитка</button>
            <Link to="/" className="apartments__sort-map">Показать на карте</Link>
          </div>
          <p className="apartments__result">Найдено  {plural(apartments.length, '%d результат', '%d результата', '%d результатов')} </p>
          <ul className={`apartments__list ${sortList ? 'apartments__list_list' : ''}`}>

            {apartments.length && apartments
              .slice(firstContentIndex, lastContentIndex)
              .map((apartment) => <Apartment key={apartment._id + '1'} apartment={apartment} sortList={sortList} mainpage={false} />)
            }
          </ul>
        </div>
      </section>
      <div className="apartments__footer">
        {apartments.length > 0 &&
        <Pagination page={page} gaps={gaps} setPage={setPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} visibility={false} />}
        <ShareNetworks />
      </div>

      <ApartmentsLocation />
      <Footer />
    </>
  );
}

export default ApartmentsComponent;
