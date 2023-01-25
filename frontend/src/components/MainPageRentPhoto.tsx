function MainPageRentPhoto() {
  return (
    <ul className="mainpage__rent-photo">
      <li className="mainpage__rent-photo-item">
        <h2 className="mainpage__photo-title">снять квартиру</h2>
        <p className="mainpage__photo-desc">Квартиры на сутки</p>
      </li>
      <li className="mainpage__rent-photo-item">
        <h2 className="mainpage__photo-title">снять коттедж на праздник</h2>
        <p className="mainpage__photo-desc">Коттеджи и усадьбы</p>
        <button className="mainpage__photo-button"></button>
      </li>
      <li className="mainpage__rent-photo-item">
        <h2 className="mainpage__photo-title">попариться в бане с друзьями</h2>
        <p className="mainpage__photo-desc">Бани и сауны</p>
        <button className="mainpage__photo-button"></button>
      </li>
      <li className="mainpage__rent-photo-item">
        <h2 className="mainpage__photo-title">если срочно нужна машина</h2>
        <p className="mainpage__photo-desc">Авто на прокат</p>
        <button className="mainpage__photo-button"></button>
      </li>
    </ul>);
}

export default MainPageRentPhoto;
