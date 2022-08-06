import React, { useState } from "react";
// Style
import style from "./Header.module.scss";
// Images
import logo from "../../Images/Global/Logo.svg";
// Router
import { Link } from "react-router-dom";
import Burgermenu from "../burgetMenu/Burgermenu";

const Header = () => {
  return (
    <div>
      <div className={style.container}>
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
      </div>

      <Burgermenu />
    </div>
  );
};

export default Header;
