import { ChangeEvent, useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IApartments, ICities, IFilter, IRooms } from "../models/models";
import { filterSlice } from "../store/slices/filterSlice";
import { apartmentsSlice } from '../store/slices/apartmentsSlice';

interface CitiesProps {
  cities: ICities[];
  mainpage?: boolean;
  rooms: IRooms[]
}

function ApartmentsFilter({ cities, mainpage, rooms }: CitiesProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { city, rooms:bedrooms } = useAppSelector(state => state.filter);
  const { apartmentsContainer } = useAppSelector(state => state.apartments);

  const [filter, setFilter] = useState<IFilter>({
    city: city || '',
    rooms: bedrooms || '',
    priceMin: 0,
    priceMax: 0,
    area: ''
  })

  const changeHandler = (event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    setFilter(prev => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const clearHandler = () => {
    setFilter({
      city: '',
      rooms: '',
      priceMin: 0,
      priceMax: 0,
      area: ''
    })
  }

  const filterApartments = ():IApartments[] => {
    let data = apartmentsContainer;
    if (filter.city) {
      data = data.filter(i => i.city.includes(filter.city))
    };
    if (filter.rooms) {
      data = data.filter(i => i.rooms === Number(filter.rooms.slice(0, 1)));
    };
    if (filter.priceMin > 0) {
      data = data.filter(i => i.price >= Number(filter.priceMin));
    }
    if (filter.priceMax > 0) {
      data = data.filter(i => i.price <= Number(filter.priceMax));
    }
    return data;
  }

  const buttonHandler = () => {
    dispatch(filterSlice.actions.filterSaving(filter));

    const newApartments = filterApartments();
    dispatch(apartmentsSlice.actions.apartmentsFilter(newApartments));
    if (mainpage) navigate(`/apartments${filter.city ? `/${filter.city}` : ''}`);
  }

  return (
    <div className={`mainpage__filter ${!mainpage && "mainpage__filter_width"}`}>
      <div className={`mainpage__filter-shadow ${!mainpage && "mainpage__filter-shadow_width"}`}>
        <ul className={`mainpage__filter-list ${!mainpage && "mainpage__filter-list_width"}`}>
          {mainpage &&
            <>
              <li className="mainpage__filter-item">
                <h3 className="mainpage__filter-item-title">Город</h3>
                <select name="city" className="mainpage__filter-select"
                  value={filter.city}
                  onChange={changeHandler} >
                  <option disabled value='' className="mainpage__main-option">Выберите</option>
                  {cities.map((city) => <option key={city._id}>{city.city}</option>)}
                </select>
              </li>
            </>}
          <li className={`mainpage__filter-item ${!mainpage && "mainpage__filter-item_flex"}`}>
            <h3 className={`mainpage__filter-item-title
            ${!mainpage && "mainpage__filter-item-title_purple"}`}>
              Комнаты</h3>
            <select name="rooms" className="mainpage__filter-select"
              value={filter.rooms}
              onChange={changeHandler} >
              <option disabled value=''>Выберите</option>
              {rooms.map((room) => <option key={room._id}>{room.rooms} комн.</option>)}
            </select>
          </li>
          <li className={`mainpage__filter-item ${!mainpage && "mainpage__filter-item_flex"}`}>
            <h3 className={`mainpage__filter-item-title
            ${!mainpage && "mainpage__filter-item-title_purple"}`}>
              Цена за сутки (BYN)</h3>
            <label className="mainpage__filter-label">
              <input className="mainpage__filter-input mainpage__filter-input_mr"
                value={filter.priceMin}
                name="priceMin"
                placeholder="От"
                onChange={changeHandler} />
              -</label>
            <label>
              <input className="mainpage__filter-input mainpage__filter-input_ml"
                value={filter.priceMax}
                name="priceMax"
                placeholder="До"
                onChange={changeHandler} />
            </label>
          </li>
          <li className="mainpage__filter-item mainpage__filter-item_option">Больше опций</li>
          {mainpage && <li className="mainpage__filter-item mainpage__filter-item_map">На карте</li>}
        </ul>
        {!mainpage && <button className="mainpage__clear-button" onClick={clearHandler}>Очистить</button>}
        <button className={`mainpage__filter-button
            ${!mainpage && "mainpage__filter-button_purple"}`}
          onClick={buttonHandler}>
          {mainpage ? 'Показать' : 'Показать объекты'}</button>
      </div>
    </div>
  );
}

export default ApartmentsFilter;
