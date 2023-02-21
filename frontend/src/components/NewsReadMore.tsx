import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchNews } from "../store/actions/newsActions";
import NewsCard from "./NewsCard";

function NewsReadMore() {
  const dispatch = useAppDispatch();

  const { error, loading, news } = useAppSelector(state => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <section className="read">
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      <p className="read__title">Читайте также</p>

      {news.length > 0 &&
        <ul className="news__list news__list_mtb">
          {news
            .slice(0, 3)
            .map((newsCard) => <NewsCard key={newsCard._id} newsCard={newsCard} />)
          }
        </ul>
      }

    </section>
  );
}

export default NewsReadMore;
