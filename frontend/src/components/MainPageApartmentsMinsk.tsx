import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchApartmentsByCity } from "../store/actions/apartmentsActions";
import Apartment from "./Apartment";

function MainPageApartmentsMinsk() {

  const dispatch = useAppDispatch();
  const { error, loading, apartments } = useAppSelector(state => state.apartments);

  useEffect(() => {
    dispatch(fetchApartmentsByCity('Минск'));

  }, [dispatch]);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      <div className="mainpage__rent-minsk">
        <p className="mainpage__minsk-desc">КВАРТИРЫ НА СУТКИ</p>
        <div className="mainpage__minsk-filter">
          <h2 className="mainpage__minsk-title">Аренда квартир в Минске</h2>
          <select name="underground" className="mainpage__minsk-select">
            <option disabled selected value="">Метро</option>
          </select>
          <select name="area" className="mainpage__minsk-select">
            <option disabled selected value="">Район</option>
          </select>
        </div>

        <ul className="apartments__list">
          {apartments
            // .slice(firstContentIndex, lastContentIndex)
            .map((apartment) => <Apartment key={apartment._id} apartment={apartment} sortList={false} />)
          }
        </ul>

        <div className="mainpage__minsk-results">
          <div className="mainpage__results-count">
            <p className="mainpage__minsk-results-count">{apartments.length} +</p>
            <p className="mainpage__minsk-results-desc">Предложений по Минску</p>
          </div>
          <Link to='/'>Посмотреть все</Link>
        </div>

      </div>
    </>
  );
}

export default MainPageApartmentsMinsk;
