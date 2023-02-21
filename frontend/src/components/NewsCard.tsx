import { useNavigate } from "react-router-dom";
import { INews } from "../models/models";

interface NewsCardProps {
  newsCard: INews,
}

function NewsCard({ newsCard }: NewsCardProps) {
  const navigate = useNavigate();

  const openNews = () => {
    navigate('/news/' + newsCard._id)
  }

  return (
    <li className="news__card">
      <img src={newsCard.image}
        onClick={openNews}
        alt="фото новости" className="news__image" />
      <h2 className="news__title">{newsCard.title}</h2>
      <p className="news__subtitle">{newsCard.subtitle}</p>
      <div className="news__bottom">
        <span className="news__date">{newsCard.date}</span>
        <button className="news__button"
        onClick={openNews}>Читать</button>
      </div>
    </li>
  );
}

export default NewsCard;
