import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IApartments } from "../models/models";
import { apartmentsSlice } from '../store/slices/apartmentsSlice';


function ApartmentsSort() {
  const dispatch = useAppDispatch();
  const [sort, setSort] = useState('');
  const { apartments } = useAppSelector(state => state.apartments);

  const sortApartments = (value: string): IApartments[] => {
    let data = [...apartments];

    if (value === 'По возрастанию цены') {
      data.sort((a, b) => a.price - b.price);
    } else if (value === 'По убыванию цены') {
      data.sort((a, b) => +b.price - +a.price);
    }
    return data;

  }

  const changeHandler = async (event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    await setSort(event.target.value);

    const newApartments = sortApartments(event.target.value);
    dispatch(apartmentsSlice.actions.apartmentsFilter(newApartments));

  }

  return (
    <select name="sort" className="mainpage__filter-select mainpage__filter-select_bg"
      value={sort}
      onChange={changeHandler}
    >
      <option value='' className="mainpage__main-option">По умолчанию</option>
      <option>По возрастанию цены</option>
      <option>По убыванию цены</option>
    </select>
  );
}

export default ApartmentsSort;
