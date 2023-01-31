import { useEffect, useState } from "react";
import plural from 'plural-ru';
import Apartment from "../components/Apartment";
import Pagination from "../components/Pagination";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import usePagination from "../hooks/usePagination";
import { fetchApartments } from "../store/actions/apartmentsActions";
import { Link } from "react-router-dom";
import ApartmentsLocation from "../components/ApartmentsLocation";

function ApartmentsPage() {
  const dispatch = useAppDispatch();
  const { loading, error, apartments } = useAppSelector(state => state.apartments);
  const [sortList, setSortList] = useState<boolean>(true);

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
    dispatch(fetchApartments());
  }, [dispatch]);

  return (<>
    {error && <p>{error}</p>}
    {loading && <p>Loading...</p>}
    {apartments.length > 0 &&
    <section className="apartments">
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

        {apartments
          .slice(firstContentIndex, lastContentIndex)
          .map((apartment) => <Apartment key={apartment._id + 1} apartment={apartment} sortList={sortList} mainpage={false} />)
        }

      </ul>
    </section>}
    {apartments.length > 0 && <Pagination page={page} gaps={gaps} setPage={setPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} visibility={false} />}
    <ApartmentsLocation />
  </>);
}

export default ApartmentsPage;
