import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchApartmentsByCity } from "../store/actions/apartmentsActions";
import ApartmentsComponent from "../components/ApartmentsComponent";
import { useParams } from "react-router-dom";
import { apartmentsSlice } from '../store/slices/apartmentsSlice';

function ApartmentsPageByCity() {
  const dispatch = useAppDispatch();
  const params = useParams<'city'>();
  const { loading, error, apartments } = useAppSelector(state => state.apartments);
  const filter = useAppSelector(state => state.filter);


  useEffect(() => {
    debugger;
    if (filter.city) {
      dispatch(apartmentsSlice.actions.apartmentsFilter(filter));
    } else {
      dispatch(fetchApartmentsByCity(params.city || ''));
    }

  }, [dispatch, filter, params.city]);

  return (
    <ApartmentsComponent apartments={apartments} error={error} loading={loading} city={params.city} />
  );
}

export default ApartmentsPageByCity;
