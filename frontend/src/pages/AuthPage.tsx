import { Link } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import login from '../img/icons/auth/login.svg';
import password from '../img/icons/auth/password.svg';

function AuthPage() {
  return (
    <section className="auth">
      <div className="auth__content">
        <h2 className="auth__title">Авторизация</h2>
        <p className="auth__desc">Авторизируйтесь, чтобы начать публиковать свои объявления</p>
        <form method="POST" action="#" className="auth__form">
          <InputComponent name="username" type="text" placeholder="Логин" img={login} />
          <InputComponent name="password" type="password" placeholder="Пароль" img={password} />
          <div className="auth__form-que">
            <div className="auth__form-remember">
              <input type="checkbox"
                className="auth__remember-radio" name="rememberMe" id="rememberMe" />
              <label htmlFor="rememberMe" className="auth__remember-label">Запомнить меня</label>
            </div>
            <Link to='/' className="auth__form-link">Забыли пароль?</Link>
          </div>
          <input className="auth__button-container" type="submit" value="Войти" />
        </form>
        <p className="auth__register">Еще нет аккаунта?
        <Link to='/register' className="auth__register-link"> Создайте аккаунт</Link>
        </p>
      </div>

    </section>
  );
}

export default AuthPage;
