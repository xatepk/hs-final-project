import { Link } from "react-router-dom";

function MainPageRentList() {
  return (
    <div className="mainpage__rent-text">
      <ul className="mainpage__text-list">
        <li className="mainpage__text-item">
          Квартиры
          <ul className="mainpage__category-list">
            <li className="mainpage__list-item">
              <Link to='/' className="mainpage__list-block">
                <p className="mainpage__list-block-geo">Квартиры в Минске</p>
                <span className="mainpage__list-block-count">3567</span>
              </Link>
            </li>
            <li className="mainpage__list-item">
              <Link to='/' className="mainpage__list-block">
                <p className="mainpage__list-block-geo">Квартиры в Гомеле</p>
                <span className="mainpage__list-block-count">2032</span>
              </Link>
            </li>
            <li className="mainpage__list-item">
              <Link to='/' className="mainpage__list-block">
                <p className="mainpage__list-block-geo">Квартиры в Гродно</p>
                <span className="mainpage__list-block-count">2032</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="mainpage__text-item">
          Коттеджи и усадьбы
          <ul className="mainpage__category-list">
            <li className="mainpage__list-item">
              <Link to='/' className="mainpage__list-block">
                <p className="mainpage__list-block-geo">Аггроусадьбы</p>
                <span className="mainpage__list-block-count">110</span>
              </Link>
            </li>
            <li className="mainpage__list-item">
              <Link to='/' className="mainpage__list-block">
                <p className="mainpage__list-block-geo">Коттеджи</p>
                <span className="mainpage__list-block-count">110</span>
              </Link>
            </li>
            <li className="mainpage__list-item">
              <Link to='/' className="mainpage__list-block">
                <p className="mainpage__list-block-geo">Загородный комплекс</p>
                <span className="mainpage__list-block-count">100</span>
              </Link>
            </li>
            <li className="mainpage__list-item">
              <Link to='/' className="mainpage__list-block">
                <p className="mainpage__list-block-geo">Базы отдыха</p>
                <span className="mainpage__list-block-count">100</span>
              </Link>
            </li>
            <li className="mainpage__list-item">
              <button className="mainpage__list-button">Еще</button>
            </li>
          </ul>
        </li>
        <li className="mainpage__text-item">
          Популярные направления
          <ul className="mainpage__category-list">
            <li className="mainpage__list-item">
              <Link to='/' className="mainpage__list-block">
                <p className="mainpage__list-block-geo">Коттеджи и усадьбы на о. Брасласких </p>
              </Link>
            </li>
            <li className="mainpage__list-item">
              <Link to='/' className="mainpage__list-block">
                <p className="mainpage__list-block-geo">Коттеджи и усадьбы (жилье) на Нарочи</p>
              </Link>
            </li>
            <li className="mainpage__list-item">
              <Link to='/' className="mainpage__list-block">
                <p className="mainpage__list-block-geo">Коттеджи и усадьбы (жилье) у воды,
                  на берегу, на озере</p>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default MainPageRentList;
