import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';

function Address() {
  return (
    <div className="footer__body-address">
      <Link to='/' className="footer__logo-link">
        <img src={logo} alt="логотип" className="footer__logo logo" />
        <span className="footer__logo-text">СДАЁМ БАЙ</span>
      </Link>
      <address className="footer__address">
        <p className="footer__address-desc">ИП Шушкевич Андрей Викторович</p>
        <p className="footer__address-desc">УНП 192602485 Минским горисполкомом 10.02.2016</p>
        <span className="footer__address-desc">220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</span>
        <p className="footer__address-desc">
          <Link to="tel:+375296214833" className="footer__address-desc-link">+375 29 621 48 33</Link>
          , sdaem@sdaem.by
        </p>
        <span className="footer__address-desc">Режим работы: 08:00-22:00</span>
      </address>
    </div>
  );
}

export default Address;
