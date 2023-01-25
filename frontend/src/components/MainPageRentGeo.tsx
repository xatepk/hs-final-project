import clients from '../img/icons/mainpage/clients.svg';
import promotion from '../img/icons/mainpage/promotion.svg';

function MainPageRentGeo() {
  return (
    <div className="apartments__geo apartments__geo_bg apartments__geo_mb">
      <p className="apartments__geo-desc">Поиск квартир на карте</p>
      <p className="apartments__geo-desc apartments__geo-desc_size">Ищите квартиры на сутки в центре города, возле парка или в живописном районе</p>
      <button className="apartments__geo-button apartments__geo-button_mb">Открыть карту</button>
      <div className="apartments__geo-advice">
        <div className="apartments__advices-list">
          <div className="apartments__advice">
            <img src={clients} alt="иконка совета" className="apartments__advice-image apartments__advice-image_mr" />
            <h2 className="apartments__advice-title">Начните привлекать
              клиентов бесплатно!</h2>
          </div>
          <p className="apartments__advice-desc">Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно <span className="apartments__advice-desc_weight-600">бесплатно создавать и публиковать</span>  объявления на сайте. </p>
          <button className="apartments__advice-button">+  Разместить объявление</button>
        </div>
        <div className="apartments__advices-list">
          <div className="apartments__advice apartments__advice_mb">
            <img src={promotion} alt="иконка совета" className="apartments__advice-image apartments__advice-image_rm" />
            <h2 className="apartments__advice-title">Поднимайте
              объявления</h2>
          </div>
          <p className="apartments__advice-desc">Вы в любое время можете <span className="apartments__advice-desc_weight-600">поднимать</span> объявления <span className="apartments__advice-desc_weight-600">вверх первой страницы</span> каталога,
            они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру.</p>
          <button className="apartments__advice-button apartments__advice-button_after">Узнать стоимость услуги</button>
        </div>
        <div className="apartments__advices-list apartments__advices-list_bg">
          <h2 className="apartments__advice-title apartments__advice-title_bl">Приоритет Gold </h2>
          <p className="apartments__advice-desc apartments__advice-desc_fs">Приоритетное размещение <span className="apartments__advice-desc_weight-700">Gold</span> позволяет <span className="apartments__advice-desc_weight-700">закрепить ваше объявление</span> в верхней части каталога!</p>
          <p className="apartments__advice-desc">Gold объявления <span className="apartments__advice-desc_weight-700">перемещаются
            каждые 5 мин</span> на 1 позицию, что делает размещение одинаковым для всех.</p>
          <button className="apartments__advice-button apartments__advice-button_color">Еще о тарифе Gold</button>
        </div>
      </div>
    </div>
  );
}

export default MainPageRentGeo;
