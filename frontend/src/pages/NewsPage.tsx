import { ChangeEvent, useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsCard from "../components/NewsCard";
import Pagination from "../components/Pagination";
import { useDebounce } from "../hooks/debounce";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import usePagination from "../hooks/usePagination";
import { fetchNews } from "../store/actions/newsActions";
import { newsSlice } from "../store/slices/newsSlice";

function NewsPage() {
  const dispatch = useAppDispatch();
  const { filteredNews } = useAppSelector(state => state.news);
  const [value, setValue] = useState('');
  const debounced = useDebounce<string>(value, 500)

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
    count: filteredNews.length,
  });

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  useEffect(() => {
    dispatch(newsSlice.actions.searchNews(debounced));
  }, [debounced, dispatch])

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }


  return (
    <>
      <Header />
      <div className="news">
        <Breadcrumb title="Новости" link="/news" />
        <div className="news__header">
          <p className="news__header-title">Новости</p>
          <div className="news__search">
            <input
              className="news__search-input"
              type="text"
              onChange={changeHandler}
              value={value}
              placeholder="Поиск по статьям"
            />
            <button className="news__search-button" onClick={() => setValue(value)}></button>
            <div className="news__search_bg"></div>
          </div>
        </div>

        {filteredNews.length > 0 &&

          <>
            <ul className="news__list">

              {filteredNews
                .slice(firstContentIndex, lastContentIndex)
                .map((newsCard) => <NewsCard key={newsCard._id} newsCard={newsCard} />)
              }

            </ul>
            {filteredNews.length > 0 && <Pagination page={page} gaps={gaps} setPage={setPage} totalPages={totalPages} nextPage={nextPage} prevPage={prevPage} visibility={false} />}
          </>

        }
      </div>
      <Footer />
    </>

  );
}

export default NewsPage;
