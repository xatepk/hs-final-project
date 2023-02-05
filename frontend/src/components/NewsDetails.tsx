import { INews } from "../models/models";
import Breadcrumb from "./Breadcrumb";

interface NewsCardDetailsProps {
  news: INews | null,
}


function NewsDetails({ news }: NewsCardDetailsProps) {
  return (
    <div className="news-details">
      <div className="news-details_bg-title"></div>
      <div className="news-details_bg"></div>
      <div className="news-details__item">
        <Breadcrumb title="Новости" item={news?.title} link="/news" />
        <h2 className="news-details__title">{news?.title}</h2>
        <span className="news-details__date">{news?.date}</span>
        <img src={news?.image}
          alt="фото новости" className="news-details__image" />
        <p className="news-details__description">{news?.description}</p>
      </div>
    </div>
  );
}

export default NewsDetails;
