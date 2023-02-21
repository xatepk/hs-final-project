import { Link } from "react-router-dom";

function ApartmentsList() {
  return (
    <ul className="footer__apartments-list">
      <li className="footer__apartments-item">
        <Link to='/' className="footer__apartments-link">Квартиры в Минске</Link>
      </li>
      <li className="footer__apartments-item">
        <Link to='/' className="footer__apartments-link">Квартиры в Гомеле</Link>
      </li>
      <li className="footer__apartments-item">
        <Link to='/' className="footer__apartments-link">Квартиры в Бресте</Link>
      </li>
      <li className="footer__apartments-item">
        <Link to='/' className="footer__apartments-link">Квартиры в Витебске</Link>
      </li>
      <li className="footer__apartments-item">
        <Link to='/' className="footer__apartments-link">Квартиры в Гродно</Link>
      </li>
      <li className="footer__apartments-item">
        <Link to='/' className="footer__apartments-link">Квартиры в Могилеве</Link>
      </li>
    </ul>
  );
}

export default ApartmentsList;
