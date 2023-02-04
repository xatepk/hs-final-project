import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import UserProfile from './UsersProfile';

function MainHeader() {

  const {isAuthenticated, username} = useAppSelector(state => state.auth);

  return (
    <nav className='header__nav'>
      <ul className='header__list'>
        <li className="header__menu">
          <ul className="header__items">
            <li className='header__item'>
              <Link to="/" className='header__item-link'>Главная</Link>
            </li>
            <li className='header__item'>
              <Link to="/news" className='header__item-link'>Новости</Link>
            </li>
            <li className='header__item'>
              <Link to="/apartments" className='header__item-link'>Размещение и тарифы</Link>
            </li>
            <li className='header__item'>
              <Link to="/apartments" className='header__item-link'>Объявления на карте</Link>
            </li>
            <li className='header__item'>
              <Link to="/contacts" className='header__item-link'>Контакты</Link>
            </li>
            <li className='header__item'>
              <Link to="/saved" className='header__item-link header__item-link_after'>Закладки</Link>
            </li>
          </ul>
        </li>
        {!isAuthenticated && <li className="header__item">
          <Link to="/auth" className='header__item-link header__item-link_purple'>Вход и регистрация</Link>
        </li>}
        {isAuthenticated && <UserProfile username={username} />}
      </ul>
    </nav>

  );
}

export default MainHeader;
