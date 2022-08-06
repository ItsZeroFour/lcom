import React from "react";
// Styles
import style from "./Server.module.scss";
// Components
import Header from "../../Components/Header/Header";

const Server = () => {
  return (
    <div>
      <Header />
      <div className={style.block}>
        <div className={style.text}>
          <h1 className={style.title}>Join our Server</h1>
        </div>
        <div className={style.block__link}>
          <a href="https://discord.gg/8hRyjNs" target="_blank">
            ПРИСОЕДЕНИТЬСЯ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Server;
