import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { ICities, IFilter } from "../models/models";
import { apartmentsSlice } from '../store/slices/apartmentsSlice';

interface CitiesProps {
  cities: ICities[];
}

function MainPageFilter({ cities }: CitiesProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [filter, setFilter] = useState<IFilter>({
    city: '',
    bedroom: 0,
    priceMin: 0,
    priceMax: 0
  })

  const changeHandler = (event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement> ) => {
    setFilter(prev => ({...prev, [event.target.name]: event.target.value}));
  }

  const buttonHandler = () => {
    // debugger;
    dispatch(apartmentsSlice.actions.apartmentsFilter(filter));
    if(!filter.city) {
      navigate('/apartments');
    } else {
      navigate('/apartments/' + filter.city);
    }
  }

  return (
    <div className="mainpage__filter">
      <ul className="mainpage__filter-list">
        <li className="mainpage__filter-item">
          <h3 className="mainpage__filter-item-title">Город</h3>
          <select name="city" className="mainpage__filter-select"
          value={filter.city}
          onChange={changeHandler} >
            <option disabled value='' className="mainpage__main-option">Выберите</option>
            {cities.map((city) => <option key={city._id}>{city.city}</option>)}
          </select>
        </li>
        <li className="mainpage__filter-item">
          <h3 className="mainpage__filter-item-title">Комнаты</h3>
          <select name="bedroom" className="mainpage__filter-select"
          defaultValue=""
          onChange={changeHandler} >
            <option disabled value="0">Выберите</option>
          </select>
        </li>
        <li className="mainpage__filter-item">
          <h3 className="mainpage__filter-item-title">Цена за сутки (BYN)</h3>
          <label className="mainpage__filter-label">
            <input className="mainpage__filter-input mainpage__filter-input_mr"
            name="priceMin"
            placeholder="От"
            onChange={changeHandler} />
            -</label>
          <label>
            <input className="mainpage__filter-input mainpage__filter-input_ml"
            name="priceMax"
            placeholder="До"
            onChange={changeHandler} />
          </label>
        </li>
        <li className="mainpage__filter-item mainpage__filter-item_option">Больше опций</li>
        <li className="mainpage__filter-item mainpage__filter-item_map">На карте</li>
      </ul>
      <button className="mainpage__filter-button" onClick={buttonHandler}>Показать</button>
    </div>
  );
}

export default MainPageFilter;
