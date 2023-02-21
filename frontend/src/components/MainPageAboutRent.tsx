import { Link } from "react-router-dom";
import flat from '../img/icons/mainpage/flatMinsk.svg';

function MainPageAboutRent() {
  return (
    <div className="mainpage__about">
      <div className="mainpage__about-rent">
        <h2 className="mainpage__about-rent-title">ЧТО ТАКОЕ SDAEM.BY</h2>
        <h3 className="mainpage__about-rent-subtitle">Квартира на сутки в Минске</h3>
        <div className="mainpage__about-flat">
          <img src={flat} alt="фото квартиры" className="mainpage__about-flat-image" />
          <div className="mainpage__about-flat-desc">
            <h3 className="mainpage__about-flat-title">Нужна квартира на сутки в Минске?</h3>
            <p className="mainpage__about-flat-par mainpage__about-flat-par_mb">На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает <span className="mainpage__about-flat-par_fw">более 500 квартир.</span> Благодаря удобной навигации вы быстро найдете подходящий вариант.</p>
            <p className="mainpage__about-flat-par">В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры с большим количеством комнат в разных районах города, с различной степенью удобства от дешевых до VIP
              с джакузи.</p>
          </div>
        </div>
        <p className="mainpage__about-flat-par">Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и связаться с владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте представлены исключительно квартиры на сутки без посредников, что избавляет посетителей от необходимости взаимодействовать с агентствами, тратя свое время и деньги. Также пользователи сайта могут совершенно бесплатно размещать объявления о готовности сдать квартиру на сутки.   </p>
      </div>
      <div className="mainpage__news">
        <ul className="mainpage__news-list">
          <li className="mainpage__news-item">
            <h3 className="mainpage__news-list-caption">Новости</h3>
          </li>
          <li className="mainpage__news-item">
            <Link to='/' className="mainpage__news-link">Линия Сталина: суровый отдых в усадьбах  на сутки</Link>
            <p className="mainpage__news-date">14 Январь</p>
          </li>
          <li className="mainpage__news-item">
            <Link to='/' className="mainpage__news-link">Аренда квартиры посуточно</Link>
            <p className="mainpage__news-date">14 Январь</p>
          </li>
          <li className="mainpage__news-item">
            <Link to='/' className="mainpage__news-link">Дворцово-парковый комплекс Чапских</Link>
            <p className="mainpage__news-date">14 Январь</p>
          </li>
          <li className="mainpage__news-item">
            <Link to='/' className="mainpage__news-link">Дворцово-парковый комплекс Чапских</Link>
            <p className="mainpage__news-date">14 Январь</p>
          </li>
          <li className="mainpage__news-item">
            <Link to='/' className="mainpage__news-link">Дворцово-парковый комплекс Чапских</Link>
            <p className="mainpage__news-date">14 Январь</p>
          </li>
        </ul>
        <button className="mainpage__news-button">Посмотреть все</button>
      </div>
    </div>
  );
}

export default MainPageAboutRent;
