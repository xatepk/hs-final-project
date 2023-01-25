import { Link } from "react-router-dom";
import MainPageFilter from "./MainPageFilter";

function MainPageNavigation() {
  return (
    <>
      <ul className="mainpage__nav">
        <li className="mainpage__nav-item">
          <Link to='/' className="mainpage__nav-link">Квартиры на сутки</Link>
          <MainPageFilter />
        </li>
        <li className="mainpage__nav-item">
          <Link to='/' className="mainpage__nav-link">Коттежи и усадьбы</Link>
        </li>
        <li className="mainpage__nav-item">
          <Link to='/' className="mainpage__nav-link">Бани и сауны</Link>
        </li>
        <li className="mainpage__nav-item">
          <Link to='/' className="mainpage__nav-link">Авто напрокат</Link>
        </li>
      </ul>
    </>);
}

export default MainPageNavigation;
