import { NavLink } from "react-router-dom";
import logo from '../img/logo.svg';

interface ISubHeaderProps {
  city?: string
}

function SubHeader({ city }: ISubHeaderProps) {
  return (
    <ul className="header__list subheader subheader__list">
      <li className="header__item subheader__item">
        <NavLink
          className="header__item-link subheader__item-link subheader__item-link_pt"
          to='/'>
          <img src={logo} alt="логотип" className="subheader__logo logo" />
        </NavLink>
      </li>
      <li className="header__item subheader__item">
        <NavLink
          className={({ isActive }) => (isActive ? "header__item-link subheader__item-link header__item-link_active header__item-link_apa" : "header__item-link subheader__item-link header__item-link_apa")}
          to='/apartments'>
          {city ? `Квартиры в ${(city)}` : 'Квартиры на сутки'}
        </NavLink>
      </li>
      <li className="header__item subheader__item">
        <NavLink
          className={({ isActive }) => (isActive ? "header__item-link subheader__item-link header__item-link_active" : "header__item-link subheader__item-link")}
          to='/cottege'>
          Коттеджи и усадьбы
        </NavLink>
      </li>
      <li className="header__item subheader__item">
        <NavLink
          className={({ isActive }) => (isActive ? "header__item-link subheader__item-link header__item-link_active" : "header__item-link subheader__item-link")}
          to='/sauna'>
          Бани и Сауны
        </NavLink>
      </li>
      <li className="header__item subheader__item">
        <NavLink
          className={({ isActive }) => (isActive ? "header__item-link subheader__item-link header__item-link_active" : "header__item-link subheader__item-link")}
          to='/auto'>
          Авто напрокат
        </NavLink>
      </li>
      <li className="header__item subheader__item">
        <NavLink
          className={({ isActive }) => (isActive ? "header__item-link subheader__item-link header__item-link_active subheader__item-link_pt" : "header__item-link subheader__item-link subheader__item-link_pt")}
          to='/add'>
          <button className="subheader__button">+ Разместить объявление</button>
        </NavLink>
      </li>
    </ul>
  );
}

export default SubHeader;
