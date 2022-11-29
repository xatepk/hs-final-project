import { Link } from "react-router-dom";
import ApartmentsList from "./ApartmentsList";
import Information from "./Information";

function AdsList() {
  return (
    <div className="footer__ads">
      <ul className="footer__ads-list">
        <li className="footer__ads-item">
          <Link to='/' className="footer__ads-link footer__ads-link_bold">Коттеджи и усадьбы</Link>
        </li>
        <li className="footer__ads-item">
          <Link to='/' className="footer__ads-link footer__ads-link_bold">Бани и сауны</Link>
        </li>
        <li className="footer__ads-item">
          <Link to='/' className="footer__ads-link footer__ads-link_bold">Авто на прокат</Link>
        </li>
        <li className="footer__ads-item">
          <Link to='/' className="footer__ads-link footer__ads-link_bold">Квартиры</Link>
          <ApartmentsList />
        </li>
        <li className="footer__ads-item">
          <Link to='/' className="footer__ads-link">Новости</Link>
        </li>
        <li className="footer__ads-item">
          <Link to='/' className="footer__ads-link">Размещение и тарифы</Link>
        </li>
        <li className="footer__ads-item">
          <Link to='/' className="footer__ads-link">Объявления на карте</Link>
        </li>
        <li className="footer__ads-item">
          <Link to='/' className="footer__ads-link">Контакты</Link>
        </li>
      </ul>
      <Information />
    </div>

  );
}

export default AdsList;
