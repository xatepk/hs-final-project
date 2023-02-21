import Footer from "../components/Footer";
import Header from "../components/Header";

function PageNotFound() {
  return (
    <>
      <Header />
      <section className="notfound">
        <h1 className="notfound__title">Ошибка 404</h1>
        <p className="notfound__desc">Возможно, у вас опечатка в адресе страницы, или её просто не существует</p>
        <button className="notfound__back">Вернуться на главную</button>
      </section>
      <Footer />
    </>
  );
}

export default PageNotFound;
