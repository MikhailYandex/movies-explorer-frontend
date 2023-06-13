import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  window.onresize = () => {
    setIsBurgerActive(false);
  };

  return (
    <>
      <nav
        className={`navigation ${isBurgerActive ? "navigation_active" : ""}`}
      >
        <div
          className={`navigation__container ${
            isBurgerActive ? "navigation__container_active" : ""
          }`}
        >
          <NavLink to="/" className="navigation__main links">
            Главная
          </NavLink>
          <NavLink to="/movies" className="navigation__movies links">
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className="navigation__saved-movies links"
          >
            Сохранённые фильмы
          </NavLink>
          <NavLink to="/profile" className="navigation__account links">
            Аккаунт
          </NavLink>
        </div>
      </nav>
      <button
        className="burger"
        type="button"
        onClick={() => setIsBurgerActive(!isBurgerActive)}
      >
        <span
          className={`burger__line ${
            isBurgerActive ? "burger__line_active" : ""
          }`}
        />
      </button>
    </>
  );
};

export default Navigation;
