import { useEffect } from "react";
import NewsCard from "../components/NewsCard";
import Pagination from "../components/Pagination";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import usePagination from "../hooks/usePagination";
import { fetchNews } from "../store/actions/newsActions";

function NewsPage() {
  const dispatch = useAppDispatch();
  const { //error,
    //loading,
    news } = useAppSelector(state => state.news);

  const {
    firstContentIndex,
    lastContentIndex,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 9,
    count: news.length,
  });

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);


  return (
    <>
      {news.length > 0 && <ul className="news">

        {news
          .slice(firstContentIndex, lastContentIndex)
          .map((newsCard) => <NewsCard key={newsCard._id} newsCard={newsCard} />)
        }

      </ul>}
      {news.length > 0 && <Pagination page={page} gaps={gaps} setPage={setPage} totalPages={totalPages} />}
    </>

  );
}

export default NewsPage;
