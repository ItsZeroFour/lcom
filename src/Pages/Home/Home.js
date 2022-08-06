import React from "react";
// Styles
import style from "./Home.module.scss";
// Images
import logo from "../../Images/Global/Logo.svg";
import Branch from "../../Images/Home/Branch.png";
import dots from "../../Images/Home/dots.svg";
// Router
import { Link } from "react-router-dom";
import Burgermenu from "../../Components/burgetMenu/Burgermenu";

const Home = () => {
  return (
    <div className={style.container}>
      <Burgermenu />
      <nav className={style.nav}>
        <div className={style.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={style.nav__list}>
          <ul>
            <li className={style.nav__list__item}>
              <Link to="/main">Main</Link>
            </li>

            <li className={style.nav__list__item}>
              <Link to="/server">Server</Link>
            </li>

            <li className={style.nav__list__item}>
              <Link to="/members">Members</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className={style.main}>
        <div className={style.title}>
          <h1>Lcom</h1>
        </div>

        <div className={style.images__container}>
          <div className={style.images}>
            <img src={Branch} alt="butterfly" />
          </div>
        </div>
      </main>

      <footer>
        <img src={dots} alt="dots" />
      </footer>
    </div>
  );
};

export default Home;
