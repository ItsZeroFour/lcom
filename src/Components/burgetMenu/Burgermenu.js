import React, { useState } from "react";
// Styles
import style from "./burgermenu.module.scss";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faServer,
  faUserGroup,
  faBarcode,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
// Router
import { Link } from "react-router-dom";

const Burgermenu = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className={style.burger__container}>
        <div className={style.burger__menu}>
          <FontAwesomeIcon
            className={style.burger__icon}
            icon={active === true ? faXmark : faBars}
            onClick={() => setActive((prevState) => !prevState)}
          />
        </div>
      </div>

      {active === true ? (
        <div className={style.modile__block}>
          <ul className={style.nav__mobile}>
            <li className={style.nav__mobile_list}>
              <FontAwesomeIcon
                className={style.nav__mobile_icon}
                icon={faHouse}
              />
              <Link to="/">Home</Link>
            </li>

            <li className={style.nav__mobile_list}>
              <FontAwesomeIcon
                className={style.nav__mobile_icon}
                icon={faBarcode}
              />
              <Link to="/main">Main</Link>
            </li>

            <li className={style.nav__mobile_list}>
              <FontAwesomeIcon
                className={style.nav__mobile_icon}
                icon={faServer}
              />
              <Link to="/server">Server</Link>
            </li>

            <li className={style.nav__mobile_list}>
              <FontAwesomeIcon
                className={style.nav__mobile_icon}
                icon={faUserGroup}
              />
              <Link to="/members">Members</Link>
            </li>
          </ul>

          <div className={style.nav__footer}>
            <p>detdom.corporation</p>
            <h6>
              Created by <a href="https://vk.com/nullbebra">ItsZeroFour</a>{" "}
            </h6>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Burgermenu;
