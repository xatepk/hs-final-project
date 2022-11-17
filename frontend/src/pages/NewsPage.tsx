import { useEffect } from "react";
import NewsCard from "../components/NewsCard";
import { useAppDispatch, useAppSelector } from "../hook/redux";
import { fetchNews } from "../store/actions/newsActions";

function NewsPage() {
  const dispatch = useAppDispatch();
  const {error, loading, news} = useAppSelector(state => state.news);

  useEffect(() => {
    dispatch(fetchNews());
}, [dispatch]);


  return (
    <ul className="news">

      {
        news.map((newsCard) => <NewsCard key={newsCard._id} newsCard = {newsCard} />)
      }

    </ul>
   );
}

export default NewsPage;
