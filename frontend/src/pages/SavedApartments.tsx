import { useEffect } from "react";
import Apartment from "../components/Apartment";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import usePagination from "../hooks/usePagination";
import { fetchSavedApartments } from "../store/actions/apartmentsActions";

function SavedApartments() {

  const dispatch = useAppDispatch();
  const { access } = useAppSelector(state => state.auth);
  const { loading, error, savedApartments } = useAppSelector(state => state.apartments);

  const {
    firstContentIndex,
    lastContentIndex,
    page,
    gaps,
    nextPage,
    prevPage,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 9,
    count: savedApartments.length,
  });

  useEffect(() => {
    dispatch(fetchSavedApartments(access));
  }, [dispatch, access]);

  return (
    <section className="saved">
      <Header />
      {error && <p>Сохраненные апартаменты не найдены...</p>}
      {loading && <p>Loading...</p>}
      {savedApartments.length > 0 &&
        <>
          <ul className='apartments__list'>

            {savedApartments
              .slice(firstContentIndex, lastContentIndex)
              .map((apartment) => <Apartment key={apartment._id + '2'} apartment={apartment} sortList={false} mainpage={false} />)
            }

          </ul>
          <Pagination page={page} gaps={gaps} setPage={setPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} visibility={false} />
        </>
      }
      <Footer />
    </section>
  );
}

export default SavedApartments;
