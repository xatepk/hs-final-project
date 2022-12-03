import { useEffect } from "react";
import Apartment from "../components/Apartment";
import Pagination from "../components/Pagination";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import usePagination from "../hooks/usePagination";
import { fetchApartments } from "../store/actions/apartmentsActions";

function ApartmentsPage() {
  const dispatch = useAppDispatch();
  const { loading, error, apartments } = useAppSelector(state => state.apartments);

  const {
    firstContentIndex,
    lastContentIndex,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 6,
    count: apartments.length,
  });

  useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);

  return (<>
    {error && <p>{error}</p>}
    {loading && <p>Loading...</p>}
    {apartments.length > 0 &&
    <section className="apartments">
      <ul className="apartments__list">

        {apartments
          .slice(firstContentIndex, lastContentIndex)
          .map((apartment) => <Apartment key={apartment._id} apartment={apartment} />)
        }

      </ul>
    </section>}
    {apartments.length > 0 && <Pagination page={page} gaps={gaps} setPage={setPage} totalPages={totalPages} />}
  </>);
}

export default ApartmentsPage;
