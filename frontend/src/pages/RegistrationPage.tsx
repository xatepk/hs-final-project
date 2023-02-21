import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../components/InputComponent";
import login from '../img/icons/auth/login.svg';
import password from '../img/icons/auth/password.svg';
import mail from '../img/icons/auth/mail.svg';
import { useFormWithValidation } from "../components/FormValidation";
import React, { FormEvent } from "react";
import { useAppDispatch } from "../hooks/redux";
import { register } from "../store/actions/authActions";

function RegistrationPage() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    values,
    errors,
    isValid,
    handleChange
  } = useFormWithValidation({});

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dispatch(register(values));
    navigate('/');
  }


  return (
    <section className="register auth">
      <div className="register__content">
        <div className="auth__content register__con">
          <h2 className="auth__title auth__title_mb">Регистрация</h2>
          <form method="POST" action="#" className="auth__form" onSubmit={submitHandler} >
            <InputComponent
              value={values.username}
              onChange={handleChange}
              minLength={2}
              pattern="^[а-яА-ЯёЁa-zA-Z -]+$"
              name="username" type="text"
              placeholder="Логин"
              img={login}
              error={errors.username} />
            <InputComponent
              value={values.email}
              onChange={handleChange}
              name="email" type="email"
              placeholder="Электронная почта"
              img={mail}
              error={errors.email} />
            <InputComponent
              value={values.password}
              onChange={handleChange}
              minLength={6}
              pattern="^[а-яА-ЯёЁa-zA-Z -._%+-@]+$"
              name="password"
              type="password"
              placeholder="Пароль"
              img={password}
              error={errors.password} />
            <InputComponent
              value={values.repeatpassword}
              onChange={handleChange}
              minLength={6}
              pattern="^[а-яА-ЯёЁa-zA-Z -._%+-@]+$"
              name="repeatpassword"
              type="password"
              placeholder="Повторите пароль"
              img={password}
              error={errors.repeatpassword} />

            <ReCAPTCHA
              sitekey={`${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`}
            />

            {!isValid && <button className="auth__form-error">Ошибка ввода</button>}
            <input className="auth__button-container auth__button-container_mt" type="submit" value="Зарегистрироваться" disabled={!isValid} />
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
