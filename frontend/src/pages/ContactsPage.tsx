function ContactsPage() {
  return (
    <section className="contacts">
      <div className="contacts__row">
        <div className="contacts__desc">
          <h1 className="contacts__title">Контакты</h1>
          <p className="contacts__feedback">
            Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.
          </p>
          <span className="contacts__geo">220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</span>
          <div className="contacts__connect">
            <span className="contacts__phone">+375 29 621-48-33</span>
            <ul className="contacts__conn-list">
              <li className="contacts__conn-item">
                <img src="" alt="иконка" className="contacts__conn-icon" />
              </li>
              <li className="contacts__conn-item">
                <img src="" alt="иконка" className="contacts__conn-icon" />
              </li>
              <li className="contacts__conn-item">
                <img src="" alt="иконка" className="contacts__conn-icon" />
              </li>
            </ul>
          </div>
          <span className="contacts__mail">sdaem@sdaem.by</span>
          <span className="contacts__shedule"> Режим работы: 08:00-22:00</span>
          <p className="contacts__address">ИП Шушкевич Андрей Викторович УНП 192602485 Минским горисполкомом 10.02.2016
          </p>
          <p className="contacts__info">Администрация сайта не владеет информацией
            о наличии свободных квартир</p>
        </div>
        <div className="contacts__form">
          <form id="feedback-form" method="POST" action="#" name="feedback-form" noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="control-label">Ваше имя</label>
                <input id="name" type="text" name="name" className="form-control" value="" placeholder="Имя" minLength={2}
                  maxLength={30} required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="control-label">Ваша электронная почта</label>
                <input id="email" type="email" name="email" required className="form-control" value=""
                  placeholder="Введите" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="control-label">Ваше сообщение</label>
              <textarea id="message" name="message" className="form-control" rows={10}
                placeholder="Сообщение" minLength={20} maxLength={500}
                required></textarea>
              <div className="invalid-feedback"></div>
            </div>
            <div className="form-submit">
              <button type="submit">Отправить</button>
            </div>
          </form>
        </div>
        <div className="contacts__network">
          <ul className="contacts__network-list">
            <li className="contacts__network-item">
              <img src="" alt="иконка" className="contacts__network-icon" />
            </li>
            <li className="contacts__network-item">
              <img src="" alt="иконка" className="contacts__network-icon" />
            </li>
            <li className="contacts__network-item">
              <img src="" alt="иконка" className="contacts__network-icon" />
            </li>
          </ul>
        </div>
      </div>
    </section>);
}

export default ContactsPage;
