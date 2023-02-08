import { Link } from "react-router-dom";

interface IBreadcrumbProps {
  title: string;
  link: string
  item?: string;
}

function Breadcrumb({ title, link, item }: IBreadcrumbProps) {
 
  return (
    <nav>
      <ul className="breadcrumb">
        <li className="breadcrumb__item">
          <Link to='/' className="breadcrumb__item-link breadcrumb__item-link_icon" />
        </li>
        <li className="breadcrumb__item">
          <Link to={link} className={`breadcrumb__item-link ${!item && "breadcrumb__item-link_active"}`}>{title}</Link>
        </li>
        {item &&
          <li className="breadcrumb__item">
            <Link to='/' className="breadcrumb__item-link breadcrumb__item-link_active">{item}</Link>
          </li>}
      </ul>
    </nav>);
}

export default Breadcrumb;
