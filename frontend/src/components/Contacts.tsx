import avatar from '../img/icons/apartOwn/image.svg';
import phone from '../img/icons/apartOwn/phone.svg';
import wa from '../img/icons/apartOwn/wa.svg';
import mail from '../img/icons/apartOwn/mail.svg';

function Contacts() {
  return (
    <div className="apartOwn">
      <img src={avatar} alt="фото контакта" className="apartOwn__image" />
      <p className="apartOwn__own">Владелец</p>
      <p className="apartOwn__contacts apartOwn__contacts_mt">Владимир</p>
      <p className="apartOwn__contacts apartOwn__contacts_mb"> +375 (29) 291-14-44</p>
      <p className="apartOwn__mail">vladimir6234@tut.by</p>
      <ul className="apartOwn__networks">
        <li className="apartOwn__item">
          <img src={phone} alt="иконка соцсети" className="apartOwn__networks-img" />
        </li>
        <li className="apartOwn__item">
          <img src={wa} alt="иконка соцсети" className="apartOwn__networks-img" />
        </li>
        <li className="apartOwn__item">
          <img src={mail} alt="иконка соцсети" className="apartOwn__networks-img" />
        </li>
      </ul>

    </div>
  );
}

export default Contacts;
