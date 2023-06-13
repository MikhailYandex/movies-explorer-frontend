import "./Header.css";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

const Header = () => {
  const { pathname } = useLocation();

  const HeaderPath = () => (
    <header
      className={`header header_theme_${
        pathname === "/" ? "blue" : "grey"
      }`}
    >
      <Logo />
      {pathname === "/" ? (
        <div>
          <Link to="/signup" className="header__signup links">
            Регистрация
          </Link>
          <Link to="/signin" className="header__signin links">
            Войти
          </Link>
        </div>
      ) : (
        <Navigation />
      )}
    </header>
  );

  return (
    <Routes>
      <Route path="/" element={<HeaderPath />} />
      <Route path="/movies" element={<HeaderPath />} />
      <Route path="/saved-movies" element={<HeaderPath />} />
      <Route path="/profile" element={<HeaderPath />} />
    </Routes>
  );
};

export default Header;
