function MainPageFilter() {
  return (
    <div className="mainpage__filter">
      <ul className="mainpage__filter-list">
        <li className="mainpage__filter-item">
          <h3 className="mainpage__filter-item-title">Город</h3>
          <select name="city" className="mainpage__filter-select">
            <option disabled selected value="">Выберите</option>
            <option>Минск</option>
          </select>
        </li>
        <li className="mainpage__filter-item">
          <h3 className="mainpage__filter-item-title">Комнаты</h3>
          <select name="bedroom" className="mainpage__filter-select">
            <option disabled selected value="">Выберите</option>
          </select>
        </li>
        <li className="mainpage__filter-item">
          <h3 className="mainpage__filter-item-title">Цена за сутки (BYN)</h3>
          <label className="mainpage__filter-label">
            <input className="mainpage__filter-input mainpage__filter-input_mr" placeholder="От"></input>
          -</label>
          <label>
            <input className="mainpage__filter-input mainpage__filter-input_ml"placeholder="До"></input>
          </label>
        </li>
        <li className="mainpage__filter-item mainpage__filter-item_option">Больше опций</li>
        <li className="mainpage__filter-item mainpage__filter-item_map">На карте</li>
      </ul>
      <button className="mainpage__filter-button">Показать</button>
    </div>
  );
}

export default MainPageFilter;
