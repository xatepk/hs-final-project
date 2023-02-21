import { Link } from "react-router-dom";
import wa from '../img/icons/contacts/wa.svg';
import tg from '../img/icons/contacts/tg.svg';
import mobile from '../img/icons/contacts/mobile.svg';
import ig from '../img/icons/contacts/ig.svg';
import vk from '../img/icons/contacts/vk.svg';
import fb from '../img/icons/contacts/fb.svg';
import PopupContactsSend from "../components/PopupContactsSend";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function ContactsPage() {

  const [active, setActive] = useState<boolean>(false);

  function handleClickPopup(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setActive(true);
  }

  return (
    <>
      <Header />
      <section className="contacts">
        <div className="contacts__row">
          <div className="contacts__desc">
            <h1 className="contacts__title">Контакты</h1>
            <p className="contacts__feedback">
              Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.
            </p>
            <span className="contacts__geo">220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</span>
            <div className="contacts__connect">
              <Link to="tel:+375296214833" className="contacts__phone">+375 29 621-48-33</Link>
              <ul className="contacts__conn-list">
                <li className="contacts__conn-item">
                  <img src={wa} alt="иконка" className="contacts__conn-icon" />
                </li>
                <li className="contacts__conn-item">
                  <img src={tg} alt="иконка" className="contacts__conn-icon" />
                </li>
                <li className="contacts__conn-item">
                  <img src={mobile} alt="иконка" className="contacts__conn-icon" />
                </li>
              </ul>
            </div>
            <p className="contacts__mail">sdaem@sdaem.by</p>
            <p className="contacts__shedule"> Режим работы: 08:00-22:00</p>
            <p className="contacts__address">ИП Шушкевич Андрей Викторович</p>
            <p className="contacts__address">УНП 192602485 Минским горисполкомом 10.02.2016</p>
            <p className="contacts__info">Администрация сайта не владеет информацией
              о наличии свободных квартир</p>
          </div>
          <div className="contacts__form">
            <form id="feedback-form" method="POST" action="#" name="feedback-form" noValidate>
              <div className="contacts__form-row">
                <div className="contacts__form-group">
                  <label htmlFor="name" className="contacts__control-label">Ваше имя</label>
                  <input id="name" type="text" name="name" className="contacts__form-control" value="" placeholder="Алексей" minLength={2}
                    maxLength={30} required />
                </div>
                <div className="contacts__form-group">
                  <label htmlFor="email" className="contacts__control-label">Ваша электронная почта</label>
                  <input id="email" type="email" name="email" required className="contacts__form-control" value=""
                    placeholder="Введите" />
                </div>
              </div>
              <div className="contacts__form-group">
                <label htmlFor="message" className="contacts__control-label">Ваше сообщение</label>
                <textarea id="message" name="message" className="contacts__form-control" rows={10}
                  placeholder="Сообщение" minLength={20} maxLength={500}
                  required></textarea>
                <div className="invalid-feedback"></div>
              </div>
              <div className="contacts__form-submit">
                <button type="submit" className="contacts__form-button" onClick={handleClickPopup}>Отправить</button>
              </div>
            </form>
          </div>
          <div className="contacts__network">
            <ul className="contacts__network-list">
              <li className="contacts__network-item">
                <img src={ig} alt="иконка" className="contacts__network-icon" />
              </li>
              <li className="contacts__network-item">
                <img src={vk} alt="иконка" className="contacts__network-icon" />
              </li>
              <li className="contacts__network-item">
                <img src={fb} alt="иконка" className="contacts__network-icon" />
              </li>
            </ul>
          </div>
        </div>
        <PopupContactsSend active={active} setActive={setActive} />
      </section>
      <Footer />
    </>
  );
}

export default ContactsPage;
