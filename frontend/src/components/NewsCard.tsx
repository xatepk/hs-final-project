import { INews } from "../models/models";

interface NewsCardProps {
  newsCard: INews,
}

function NewsCard({ newsCard }: NewsCardProps) {

  return (
    <li className="news__card">
      <img src={newsCard.image} alt="фото новости" className="news__image" />
      <h2 className="news__title">{newsCard.title}</h2>
      <p className="news__subtitle">{newsCard.subtitle}</p>
      {/* <p className="news__description">{newsCard.description}</p> */}
      <div className="news__bottom">
        <span className="news__date">{newsCard.date}</span>
        <button className="news__button">Читать</button>
      </div>
    </li>
  );
}

export default NewsCard;
