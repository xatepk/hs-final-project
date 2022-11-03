import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <ul className='header__list'>
          <li className='header__item'>
            <Link to="/" className='header__item-link'>Главная</Link>
          </li>
          <li className='header__item'>
            <Link to="news" className='header__item-link'>Новости</Link>
          </li>
          <li className='header__item'>
            <Link to="/" className='header__item-link'>Размещение и тарифы</Link>
          </li>
          <li className='header__item'>
            <Link to="/" className='header__item-link'>Объявления на карте</Link>
          </li>
          <li className='header__item'>
            <Link to="/" className='header__item-link'>Контакты</Link>
          </li>
          <li className='header__item'>
            <Link to="/" className='header__item-link'>Закладки</Link>
          </li>
          <li className='header__item'>
            <Link to="/auth" className='header__item-link'>Вход и регистрация</Link>
          </li>
        </ul>
      </nav>
    </header>
   );
}

export default Header;
