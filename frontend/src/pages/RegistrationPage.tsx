import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import login from '../img/icons/auth/login.svg';
import password from '../img/icons/auth/password.svg';
import mail from '../img/icons/auth/mail.svg';

function RegistrationPage() {
  return (
    <section className="register auth">
      <div className="register__content">
        <div className="auth__content register__con">
          <h2 className="auth__title auth__title_mb">Регистрация</h2>
          <form method="POST" action="#" className="auth__form">
            <InputComponent name="username" type="text" placeholder="Логин" img={login} />
            <InputComponent name="email" type="email" placeholder="Электронная почта" img={mail} />
            <InputComponent name="password" type="password" placeholder="Пароль" img={password} />
            <InputComponent name="repeatpassword" type="password" placeholder="Повторите пароль" img={password} />

            <ReCAPTCHA
              sitekey={`${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`}
            />
            <input className="auth__button-container auth__button-container_mt" type="submit" value="Зарегистрироваться" />
          </form>
        </div>
        <div className="register__desc register__con">
          <h2 className="register__desc-title">Пользователь обязуется:</h2>
          <p className="register__desc-item">	&bull; предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;</p>
          <p className="register__desc-item">	&bull; добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.</p>
          <p className="auth__register auth__register_mt">Уже есть аккаунт?
            <Link to='/auth' className="auth__register-link"> Войдите</Link>
          </p>
        </div>
      </div>

    </section>
  );
}

export default RegistrationPage;
