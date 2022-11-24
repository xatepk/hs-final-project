import { INews } from "../models/models";

interface NewsCardDetailsProps {
  news: INews | null,
}


function NewsDetails({ news }: NewsCardDetailsProps ) {
  return (
    <div className="news-details">
      <h2 className="news-details__title">{news?.title}</h2>
      <span className="news-details__date">{news?.date}</span>
      <img src={news?.image}
        alt="фото новости" className="news-details__image" />
      <p className="news-details__description">{news?.description}</p>
    </div>
  );
}

export default NewsDetails;
