import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchApartments } from "../store/actions/apartmentsActions";
import ApartmentsComponent from "../components/ApartmentsComponent";
import { apartmentsSlice } from '../store/slices/apartmentsSlice';

function ApartmentsPage() {
  const dispatch = useAppDispatch();
  const { loading, error, apartments } = useAppSelector(state => state.apartments);
  const filter = useAppSelector(state => state.filter);


  useEffect(() => {
    if (filter.rooms || filter.priceMax || filter.priceMin) {
      dispatch(apartmentsSlice.actions.apartmentsFilter(filter));
    } else {
      dispatch(fetchApartments());
    }
  }, [dispatch, filter]);

  return (
    <ApartmentsComponent apartments={apartments} error={error} loading={loading} />
  );
}

export default ApartmentsPage;
