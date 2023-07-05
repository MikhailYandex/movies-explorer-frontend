import "./Header.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

const Header = ({ loggedIn }) => {
  const { pathname } = useLocation();

  const HeaderPath = () => (
    <header
      className={`header header_theme_${pathname === "/" ? "blue" : "grey"}`}
    >
      <Logo />
      <Navigation loggedIn={loggedIn} />
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
