import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import UserProfile from './UsersProfile';

function MainHeader() {

  const { isAuthenticated, username } = useAppSelector(state => state.auth);

  return (
    <nav className='header__nav'>
      <ul className='header__list'>
        <li className="header__menu">
          <ul className="header__items">
            <li className='header__item'>
              <NavLink to="/"
                className={({ isActive }) => (isActive ? "header__item-link header__item-link_active" : "header__item-link")}>
                Главная</NavLink>
            </li>
            <li className='header__item'>
              <NavLink to="/news"
                className={({ isActive }) => (isActive ? "header__item-link header__item-link_active" : "header__item-link")}>
                Новости</NavLink>
            </li>
            <li className='header__item'>
              <NavLink to="/results"
                className={({ isActive }) => (isActive ? "header__item-link header__item-link_active" : "header__item-link")}>
                Размещение и тарифы</NavLink>
            </li>
            <li className='header__item'>
              <NavLink to="/map"
                className={({ isActive }) => (isActive ? "header__item-link header__item-link_active header__item-link_before" : "header__item-link header__item-link_before")}>
                Объявления на карте</NavLink>
            </li>
            <li className='header__item'>
              <NavLink to="/contacts"
                className={({ isActive }) => (isActive ? "header__item-link header__item-link_active" : "header__item-link")}>
                Контакты</NavLink>
            </li>
            <li className='header__item'>
              <NavLink to="/saved"
                className={({ isActive }) => (isActive ? "header__item-link header__item-link_active header__item-link_after" : "header__item-link header__item-link_after")}>
                Закладки</NavLink>
            </li>
          </ul>
        </li>
        {!isAuthenticated && <li className="header__item">
          <NavLink to="/auth" className='header__item-link header__item-link_purple'>Вход и регистрация</NavLink>
        </li>}
        {isAuthenticated && <UserProfile username={username} />}
      </ul>
    </nav>

  );
}

export default MainHeader;
