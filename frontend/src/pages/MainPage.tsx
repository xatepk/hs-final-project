import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchApartments, fetchHandbooks } from "../store/actions/apartmentsActions";
import MainPageNavigation from "../components/MainPageNavigation";
import MainPageAboutRent from "../components/MainPageAboutRent";
import MainPageRentGeo from "../components/MainPageRentGeo";
import MainPageRentPhoto from "../components/MainPageRentPhoto";
import MainPageRentList from "../components/MainPageRentList";
import MainPageApartmentsMinsk from "../components/MainPageApartmentsMinsk";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainPage() {

  const dispatch = useAppDispatch();
  const { loading, error, cities, rooms } = useAppSelector(state => state.handbook);

  useEffect(() => {
    dispatch(fetchApartments());
    dispatch(fetchHandbooks());
  }, [dispatch]);

  return (
    <>
      <Header />
      <section className="mainpage">
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        <div className="mainpage__filter-block">
          <h1 className="mainpage__title">Sdaem.by - у нас живут <span className="mainpage__title_yellow">ваши объявления</span></h1>
          <MainPageNavigation cities={cities} rooms={rooms} />
        </div>

        <div className="mainpage__rent">
          <MainPageRentPhoto cities={cities} />
          <MainPageRentList />
        </div>

        <MainPageApartmentsMinsk />
        <MainPageRentGeo />
        <MainPageAboutRent />
      </section>
      <Footer />
    </>

  );
}

export default MainPage;
