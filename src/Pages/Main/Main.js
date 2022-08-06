import React from "react";
// Style
import style from "./Main.module.scss";
// Components
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
// img
import people1 from "../../Images/Main/people-1.svg";
import people2 from "../../Images/Main/people-2.svg";
import people3 from "../../Images/Main/people-3.svg";

const Main = () => {
  return (
    <div>
      <Header />
      <div className={style.blocks}>
        <div className={style.block} style={{ marginTop: "150px" }}>
          <div className={style.text}>
            <div className={style.text__bg_1}>
              <h1>Кто мы?</h1>
              <p className={style.block__text_main}>
                Lcom - Наше сообществу существует на протяжении нескольких лет.
                Мы постоянно устраиваем небольшие миниигры, сидим в дискорде и
                общаемся.
              </p>
            </div>
          </div>
          <img src={people1} alt="people" />
        </div>

        <div className={style.block}>
          <div className={style.text}>
            <img src={people2} alt="people" />
            <div className={style.text__bg_2}>
              <h1 className={style.block__text_title}>Чем мы занимаемся?</h1>
              <p className={style.block__text}>
                Ежедневные посиделки, косплей персонажей из Genshin Impact,
                совместный просмотр и обсуждение аниме. Все это есть на нашем
                сервере!
              </p>
            </div>
          </div>
        </div>

        <div className={style.block}>
          <div className={style.text}>
            <div className={style.text__bg_3}>
              <h1>Присоединяйся!</h1>
              <p className={style.block__text_main}>
                <a href="https://discord.gg/8hRyjNs" target="_blank">
                  Присоеденяйся
                </a>{" "}
                к нашему серверу и начинай кидать фембоев в чат прямо сейчас!
              </p>
            </div>
          </div>
          <img src={people3} alt="people" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
