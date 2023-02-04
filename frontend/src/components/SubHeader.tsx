import { Link } from "react-router-dom";
import logo from '../img/logo.svg';

function SubHeader() {
  return (
    <ul className="header__list subheader subheader__list">
      <li className="header__item subheader__item">
        <Link className="header__item-link subheader__item-link" to='/'>
          <img src={logo} alt="логотип" className="subheader__logo logo" />
        </Link>
      </li>
      <li className="header__item subheader__item">
        <Link className="header__item-link subheader__item-link" to='/apartments'>
          Квартиры на сутки
        </Link>
      </li>
      <li className="header__item subheader__item">
        <Link className="header__item-link subheader__item-link" to='/'>
          Коттеджи и усадьбы
        </Link>
      </li>
      <li className="header__item subheader__item">
        <Link className="header__item-link subheader__item-link" to='/'>
          Бани и Сауны
        </Link>
      </li>
      <li className="header__item subheader__item">
        <Link className="header__item-link subheader__item-link" to='/'>
          Авто напрокат
        </Link>
      </li>
      <li className="header__item subheader__item">
        <Link className="header__item-link subheader__item-link" to='/'>
          <button className="subheader__button">+ Разместить объявление</button>
        </Link>
      </li>
    </ul>
  );
}

export default SubHeader;
