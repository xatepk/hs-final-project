import { IApartments } from "../models/models";
import Carousel from 'react-bootstrap/Carousel';

import geo from '../img/icons/apartments/geo.svg';
import underground from '../img/icons/apartments/underground.svg';
import area from '../img/icons/apartments/area.svg';
import cellphone from '../img/icons/apartments/cellphone.svg';


interface ApartmentProps {
  apartment: IApartments;
}

function Apartment({ apartment }: ApartmentProps) {
  return (
    <li className="apartments__item">
      <Carousel interval={null} fade>
        {apartment.imageUrls.length > 0 &&
          apartment.imageUrls.map((imageUrl) =>
            <Carousel.Item>
              <img className="apartments__item-image" src={imageUrl} alt="фото квартиры"/>
            </Carousel.Item>)}
      </Carousel>
      <div className="apartments__address">
        <img src={geo} alt="логотип геопозиции" />
        <span className="apartments__address-location">{apartment.location}</span>
      </div>
      <div className="apartments__area">
        <img src={underground} alt="логотип метро" />
        <span className="apartments__address-location apartments__area-location">{apartment.underground}</span>
        <img src={area} alt="логотип района" />
        <span className="apartments__address-location apartments__area-location">{apartment.area}</span>
      </div>
      <p className="apartments__item-desc">{apartment.description}</p>
      <div className="apartments__buttons">
        <button className="apartments__like"></button>
        <button className="apartments__contacts">
          <img src={cellphone} alt="иконка телефона" />
          <span className="apartments__contacts-desc">Контакты</span>
        </button>
        <button className="apartments__more">Подробнее</button>
      </div>
    </li>);
}

export default Apartment;
