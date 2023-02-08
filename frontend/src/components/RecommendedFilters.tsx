import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { filterArray } from "../utils";
import { apartmentsSlice } from '../store/slices/apartmentsSlice';
import { useState, useCallback, MouseEvent, useEffect } from "react";
import { IApartments } from "../models/models";

function RecommendedFilters() {
  const dispatch = useAppDispatch();
  const { apartmentsContainer } = useAppSelector(state => state.apartments);
  const [quickFilter, setQuickFilter] = useState<null | string>(null);

  const filteredData = (item: string): IApartments[] => {
    let data = apartmentsContainer;
    let itemFilter = filterArray.find(i => i.name === item)?.filter;

    if (itemFilter === 'rooms') {
      data = data.filter(i => i.rooms === Number(item.slice(0, 1)));
    };
    if (itemFilter === 'area') {
      data = data.filter(i => i.area === item);
    };
    if (itemFilter === 'priceMax') {
      data = data.filter(i => i.price <= Number(50));
    };
    return data;
  }


  const buttonHandler = (name: string) => {
    const recommendedApartments = filteredData(name);
    setQuickFilter(name);
    dispatch(apartmentsSlice.actions.apartmentsFilter(recommendedApartments));
  };

  const resetQuickFilterHandler = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setQuickFilter(null);
    dispatch(apartmentsSlice.actions.apartmentsFilter(apartmentsContainer));
  }

  return (
    <div className="recommended">
      <p className="recommended__title">Рекомендуем посмотреть</p>
      <ul className="recommended__list">
        {filterArray.filter((item) => {
          if (quickFilter) {
            return item.name === quickFilter;
          }
          return true;
        }).map((item) => <li key={item.name} className="recommended__item">
          <button className="recommended__button" onClick={() => buttonHandler(item.name)}>
            {item.name}
            {quickFilter && <i className="recommended__button-reset"
            onClick={resetQuickFilterHandler}>&times;</i>}
          </button>
        </li>
        )}
      </ul>
    </div>
  );
}

export default RecommendedFilters;
