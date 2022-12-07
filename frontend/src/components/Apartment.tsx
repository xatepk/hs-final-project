import { IApartments } from "../models/models";
import Carousel from 'react-bootstrap/Carousel';

import geo from '../img/icons/apartments/geo.svg';
import cellphone from '../img/icons/apartments/cellphone.svg';


interface ApartmentProps {
  apartment: IApartments;
  sortList: boolean
}

function Apartment({ apartment, sortList }: ApartmentProps) {
  return (
    <li className={`apartments__item ${sortList ? 'apartments__item_row' : ''}`}>
      <Carousel interval={null} fade>
        {apartment.imageUrls.length > 0 &&
          apartment.imageUrls.map((imageUrl) =>
            <Carousel.Item>
              <img className={`apartments__item-image ${sortList ? 'apartments__item-image' : ''}`} src={imageUrl} alt="фото квартиры" />
            </Carousel.Item>)}
      </Carousel>
      <div className="apartments__description">
        {!sortList && <>
          <div className="apartments__info">
            <p className="apartments__info-price">{apartment.price}.00 BYN <span className="apartments__info-price_grey">в сутки</span></p>
            <p className="apartments__info-count">4 (2+2)</p>
            <p className="apartments__info-bedrooms">{apartment.rooms} комн.</p>
          </div>
          <div className="apartments__address">
            <img src={geo} alt="логотип геопозиции" />
            <span className="apartments__address-location">{apartment.location}</span>
          </div>
          <div className="apartments__area">
            <span className="apartments__address-location apartments__area-location">{apartment.underground}</span>
            <span className="apartments__address-location apartments__area-location">{apartment.area}</span>
          </div>
        </>}
        {sortList &&
          <>
            <div className="apartments__info-list">
              <p className="apartments__info-count apartments__info-count_list">4 (2+2)</p>
              <p className="apartments__info-bedrooms apartments__info-bedrooms_list">{apartment.rooms} комн.</p>
              <div className="apartments__area apartments__area_list">
                <p className="apartments__address-location apartments__area-location apartments__area-location_list">{apartment.underground}</p>
                <p className="apartments__address-location apartments__area-location_list">
                  <span className="apartments__area-location_purple">район:</span> {apartment.area}</p>
              </div>
            </div>
          </>}

        <p className="apartments__item-desc">{apartment.description}</p>
        <div className={`apartments__buttons ${sortList ? 'apartments__buttons_list' : ''}`}>
          {!sortList && <button className="apartments__like"></button>}
          <button className="apartments__contacts">
            <img src={cellphone} alt="иконка телефона" />
            <span className="apartments__contacts-desc">Контакты</span>
          </button>
          {sortList && <button className="apartments__like apartments__like_list"><span className="apartments__like_red">В закладки</span></button>}
          <button className="apartments__more">Подробнее</button>
        </div>
      </div>
    </li>);
}

export default Apartment;
