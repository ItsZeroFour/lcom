import React from "react";
// Style
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={style.container}>
      <footer className={style.footer__copyright}>
        <h4>detdom.corporation</h4>
      </footer>
    </div>
  );
};

export default Footer;
