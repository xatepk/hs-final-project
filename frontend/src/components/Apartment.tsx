import { IApartments } from "../models/models";
import Carousel from 'react-bootstrap/Carousel';
import Contacts from "./Contacts";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchSaveApartment, fetchSavedApartments } from "../store/actions/apartmentsActions";

interface ApartmentProps {
  apartment: IApartments;
  sortList: boolean;
  mainpage: boolean;
}

function Apartment({ apartment, sortList, mainpage }: ApartmentProps) {

  const dispatch = useAppDispatch();
  const { access, id } = useAppSelector(state => state.auth);

  const [active, setActive] = useState(false);

  const isSaved = apartment.likes.some(i => i === id);

  const likeHandler = async () => {
    if (access) {
      await dispatch(fetchSaveApartment(apartment._id, access));
      dispatch(fetchSavedApartments(access));
    }
  }


  return (
    <li className={`apartments__item ${sortList ? 'apartments__item_row' : ''}`} >
      <Carousel interval={null} fade>
        {apartment.imageUrls.length > 0 &&
          apartment.imageUrls.map((imageUrl) =>
            <Carousel.Item key={imageUrl}>
              <img className={`apartments__item-image ${sortList ? 'apartments__item-image_list' : ''}`} src={imageUrl} alt="фото квартиры" />
              <p className="apartments__gold">Gold</p>
            </Carousel.Item>)}
      </Carousel>
      <div className="apartments__description">
        {!sortList && <>
          <div className="apartments__info">
            <p className="apartments__info-price">{apartment.price}.00 BYN <span className="apartments__info-price_grey">за сутки</span></p>
            <p className="apartments__info-count">4 (2+2)</p>
            <p className={`apartments__info-bedrooms ${mainpage && "apartments__info-bedrooms_ml"}`}>{apartment.rooms} комн.</p>
            {mainpage && <p className={`apartments__info-bedrooms ${mainpage && "apartments__info-bedrooms_ml"}`}>179 м<sup>2</sup></p>}
          </div>
          <div className="apartments__address">
            <span className="apartments__address-location">{apartment.location}</span>
          </div>
          <div className="apartments__area">
            <span className="apartments__address-location apartments__area-location">{apartment.underground}</span>
            <span className="apartments__address-location apartments__area-location">{apartment.area}</span>
          </div>
        </>}
        {sortList &&
          <>
            <div className="apartments__address-list">
              <p className="apartments__desc">4-комн. апартаменты на Грушевке<br></br><span className="apartments__address-location apartments__address-location_list">{apartment.location}</span></p>

              <p className="apartments__info-price apartments__info-price_list">{apartment.price}.00 BYN <span className="apartments__info-price_grey">за сутки</span></p>
            </div>
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
        <div className={`apartments__buttons ${sortList ? 'apartments__buttons_list' : ''}`} >
          {!sortList && !mainpage &&
            <button onClick={likeHandler}
              className={`apartments__like ${isSaved && " apartments__like_active"}`} />}

          <button className="apartments__contacts" onClick={() => setActive(!active)} >
            <span className="apartments__contacts-desc">Контакты</span>
            <Contacts active={active} />
          </button>


          {sortList &&
            <button onClick={likeHandler}
              className={`apartments__like apartments__like_list ${isSaved && " apartments__like_active"}`} >
              <span className="apartments__like_red">В закладки</span>
            </button>}
          <button className="apartments__more">Подробнее</button>
        </div>
      </div>
    </li>);
}

export default Apartment;
