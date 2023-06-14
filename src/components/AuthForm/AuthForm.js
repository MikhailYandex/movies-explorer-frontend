import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./AuthForm.css";
import useFormWithValidation from "../../utils/hooks/useFormWithValidation";

const AuthForm = ({ title, buttonText, quiestion, toLink, link, registr }) => {
  const { pathname } = useLocation();

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  return (
    <section className="auth">
      <Logo />
      <h2 className="auth__title">{title}</h2>
      <form className="auth__form">
        {pathname === "/signup" && (
          <>
            <label className="auth__label">Имя</label>
            <input
              className="auth__input auth__input_name"
              type="text"
              name="name"
							placeholder="Имя"
              required
            />
          </>
        )}
        <label className="auth__label">E-mail</label>
        <input
          className="auth__input"
          type="email"
          name="email"
          value={values.email || ""}
					onChange={handleChange}
					placeholder="Email"
          required
        />
        <span
          className={`auth__input-error ${
            errors.email && "auth__input-error_active"
          }`}
        >
          {errors.email || ""}
        </span>
        <label className="auth__label">Пароль</label>
        <input
          className="auth__input"
          type="password"
          name="password"
					minLength="6"
          value={values.password || ""}
					onChange={handleChange}
					placeholder="Пароль"
          required
        />
        <span
          className={`auth__input-error ${
            errors.password && "auth__input-error_active"
          }`}
        >
          {errors.password || ""}
        </span>
        <button
          className={`auth__submit-button links ${!isValid && "auth__submit-button_disabled"} 
					${registr ? "" : "auth__submit-button_margin"}`}
          type="submit"
					disabled={!isValid}
        >
          {buttonText}
        </button>
        <p className="auth__question">
          {quiestion}
          <Link className="auth__link links" to={toLink}>
            {link}
          </Link>
        </p>
      </form>
    </section>
  );
};

export default AuthForm;
