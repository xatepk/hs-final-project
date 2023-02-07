import { Link } from "react-router-dom";
import { ICities } from "../models/models";
import ApartmentsFilter from "./ApartmentsFilter";

interface CitiesProps {
  cities: ICities[];
}


function MainPageNavigation({cities}: CitiesProps) {
  return (
    <div className="mainpage__tabs-container">
      <div className="mainpage__block-tabs">
        <button className="mainpage__tabs mainpage__tabs_active">Квартиры на сутки</button>
        <button className="mainpage__tabs">
          <Link to='/' className="mainpage__tabs-link">Коттежи и усадьбы</Link>
        </button>
        <button className="mainpage__tabs">
          <Link to='/' className="mainpage__tabs-link">Бани и сауны</Link>
        </button>
        <button className="mainpage__tabs">
          <Link to='/' className="mainpage__tabs-link">Авто напрокат</Link>
        </button>
      </div>

      <div className="mainpage__tabs-content">
        <ApartmentsFilter cities={cities} mainpage={true} />
      </div>
    </div>
  );
}

export default MainPageNavigation;
