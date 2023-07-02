import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurretnUserContext";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { useContext, useEffect } from "react";

const Profile = ({ signOut, handleUserUpdate }) => {
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserUpdate(values);
    resetForm(currentUser);
  };

  useEffect(() => {
    if (currentUser) {
      resetForm();
    }
  }, [currentUser, resetForm]);

  return (
    <section className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <div className="profile__block">
          <p className="profile__label">Имя</p>
          <input
            className="profile__input"
            type="text"
            name="name"
            value={values.name || currentUser.name || ""}
            onChange={handleChange}
            placeholder="Имя"
            required
            minLength="2"
            maxLength="30"
            pattern="^[a-zA-Zа-яёА-ЯЁ -]+$"
          />
        </div>
        <span
          className={`auth__input-error ${
            errors.name && "auth__input-error_active"
          }`}
        >
          {errors.name || ""}
        </span>
        <div className="profile__line"></div>
        <div className="profile__block">
          <p className="profile__label">E-mail</p>
          <input
            className="profile__input"
            type="email"
            name="email"
            value={values.email || currentUser.email || ""}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <span
          className={`auth__input-error ${
            errors.email && "auth__input-error_active"
          }`}
        >
          {errors.email || ""}
        </span>
        <>
          <button
            type="submit"
            disabled={!isValid}
            className={`profile__button profile__button_edit links ${
              !isValid ? "profile__button_disabled" : ""
            }`}
          >
            Редактировать
          </button>
          <button
            type="submit"
            onClick={signOut}
            className="profile__button profile__button_signout links"
          >
            Выйти из аккаунта
          </button>
        </>
      </form>
    </section>
  );
};

export default Profile;
