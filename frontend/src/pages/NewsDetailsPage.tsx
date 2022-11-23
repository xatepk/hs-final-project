import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { INews } from "../models/models";

function NewsDetailPage() {
  const [newsDetails, setNewsDetails] = useState<INews | null>(null);
  const params = useParams<'id'>();
  const { //error,
    loading,
    news } = useAppSelector(state => state.news);

  useEffect(() => {
    const newsfilter = news.filter(el => el._id === params.id);
    setNewsDetails(newsfilter[0]);

    }, [news, params.id])

  if (loading) return <p>Loading...</p>

  return (
    <>
    <h2 className="news-card__title">{newsDetails?.title}</h2>
    <span className="news-card__date">{newsDetails?.date}</span>
    <img src={newsDetails?.image}
        alt="фото новости" className="news-card__image" />
    <p className="news-card__description">{newsDetails?.description}</p>
    </>
   );
}

export default NewsDetailPage;
