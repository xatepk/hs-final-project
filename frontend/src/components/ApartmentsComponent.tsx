import { useState } from "react";
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

interface IApartmentsProps {
  apartments: IApartments[],
  loading: boolean,
  error: string,
}

function ApartmentsComponent({ apartments, loading, error }: IApartmentsProps) {

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

  return (
    <>
      <Header />
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      <ApartmentsFilter cities={[]} rooms={[]} />
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
              .map((apartment) => <Apartment key={apartment._id + '1'} apartment={apartment} sortList={sortList} mainpage={false} />)
            }

          </ul>
        </section>}
      {apartments.length > 0 && <Pagination page={page} gaps={gaps} setPage={setPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} visibility={false} />}
      <ApartmentsLocation />
      <Footer />
    </>
  );
}

export default ApartmentsComponent;
