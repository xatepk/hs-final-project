// import MainPageNavigation from "../components/MainPageNavigation";
import MainPageAboutRent from "../components/MainPageAboutRent";
import MainPageRentGeo from "../components/MainPageRentGeo";
import MainPageRentPhoto from "../components/MainPageRentPhoto";
import MainPageRentList from "./MainPageRentList";

function MainPage() {
  return (
    <section className="mainpage">
      {/* <h1 className="mainpage__title">Sdaem.by - у нас живут <span className="mainpage__title_yellow">ваши объявления</span></h1> */}
      {/* <MainPageNavigation /> */}
      <div className="mainpage__rent">
        <MainPageRentPhoto />
        <MainPageRentList />
      </div>
        <MainPageRentGeo />
        <MainPageAboutRent />
    </section>
  );
}

export default MainPage;
