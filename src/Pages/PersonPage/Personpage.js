import React from "react";
// Styles
import style from "./PersonPage.module.scss";
// Components
import Header from "../../Components/Header/Header";
// image
import image from "../../Images/PersonPage/1.jpg";

const Personpage = () => {
  return (
    <div className={style.personpage}>
      <Header />
      <img className={style.img} src={image} alt="work" />
      <h1 className={style.text}>Простите, но мне нечего про вас написать</h1>
    </div>
  );
};

export default Personpage;
