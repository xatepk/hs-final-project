import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchApartmentsByCity } from "../store/actions/apartmentsActions";
import ApartmentsComponent from "../components/ApartmentsComponent";
import { useParams } from "react-router-dom";

function ApartmentsPageByCity() {
  const dispatch = useAppDispatch();
  const params = useParams<'city'>();
  const { loading, error, apartments } = useAppSelector(state => state.apartments);


  useEffect(() => {
    dispatch(fetchApartmentsByCity(params.city || ''));
  }, [dispatch, params.city]);

  return (
    <ApartmentsComponent apartments={apartments} error={error} loading={loading} />
  );
}

export default ApartmentsPageByCity;
