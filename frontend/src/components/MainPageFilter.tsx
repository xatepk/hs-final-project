function MainPageFilter() {
  return (
    <>
      <ul className="mainpage__filter">
        <li className="mainpage__filter-item">
          <select name="city">
            <option disabled selected value="">Выберите</option>
            <option>Минск</option>
          </select>
        </li>
        <li className="mainpage__filter-item">
          <select name="bedroom">
            <option disabled selected value="">Выберите</option>
          </select>
        </li>
        <li className="mainpage__filter-item">
          <label><input placeholder="от"></input></label>
          <label><input placeholder="до"></input></label>
        </li>
        <li className="mainpage__filter-item">Больше опций</li>
        <li className="mainpage__filter-item">На карте</li>
      </ul>
      <button>Показать</button>
    </>
  );
}

export default MainPageFilter;
