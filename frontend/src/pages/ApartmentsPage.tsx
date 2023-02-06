import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchApartments } from "../store/actions/apartmentsActions";
import ApartmentsComponent from "../components/ApartmentsComponent";

function ApartmentsPage() {
  const dispatch = useAppDispatch();
  const { loading, error, apartments } = useAppSelector(state => state.apartments);


  useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);

  return (
    <ApartmentsComponent apartments={apartments} error={error} loading={loading} />
  );
}

export default ApartmentsPage;
