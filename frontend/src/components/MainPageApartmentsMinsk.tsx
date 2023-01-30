import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import usePagination from "../hooks/usePagination";
import { fetchApartmentsByCity } from "../store/actions/apartmentsActions";
import Apartment from "./Apartment";
import Pagination from "./Pagination";

function MainPageApartmentsMinsk() {

  const dispatch = useAppDispatch();
  const { error, loading, apartments } = useAppSelector(state => state.apartments);

  const {
    firstContentIndex,
    lastContentIndex,
    page,
    gaps,
    setPage,
    totalPages,
    nextPage,
    prevPage,
  } = usePagination({
    contentPerPage: 3,
    count: apartments.length,
  });

  useEffect(() => {
    dispatch(fetchApartmentsByCity('Минск'));

  }, [dispatch]);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      <div className="mainpage__rent-minsk">
        <div className="mainpage__minsk-bg"></div>
        <p className="mainpage__minsk-desc">КВАРТИРЫ НА СУТКИ</p>
        <div className="mainpage__minsk-filter">
          <h2 className="mainpage__minsk-title">Аренда квартир в Минске</h2>
          <select name="underground" className="mainpage__minsk-select mainpage__minsk-select_ml">
            <option disabled selected value="" className="mainpage__minsk-option">Метро</option>
          </select>
          <select name="area" className="mainpage__minsk-select">
            <option disabled selected value="" className="mainpage__minsk-option">Район</option>
          </select>
        </div>

        <ul className="apartments__list">
          {apartments
            .slice(firstContentIndex, lastContentIndex)
            .map((apartment) => <Apartment key={apartment._id} apartment={apartment} sortList={false} mainpage={true} />)
          }
        </ul>
        {apartments.length && <Pagination page={page} gaps={gaps} setPage={setPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} visibility={true} />}

        <div className="mainpage__minsk-results">
          <div className="mainpage__results-count">
            <p className="mainpage__minsk-results-count">{apartments.length} <span className="mainpage__minsk-results-count_col">+</span></p>
            <p className="mainpage__minsk-results-desc">Предложений по Минску</p>
          </div>
          <Link to='/' className="mainpage__minsk-results-button">Посмотреть все</Link>
        </div>

      </div>
    </>
  );
}

export default MainPageApartmentsMinsk;
