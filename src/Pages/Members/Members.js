import React from "react";
// Style
import style from "./Members.module.scss";
// Components
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
// Memebers
import { membersList } from "../../Utils/Members/members";
import { Link } from "react-router-dom";

const Members = () => {
  const getMembers = membersList.map(({ img, name, id }) => {
    return { img, name, id };
  });

  return (
    <div>
      <Header />
      <div className={style.block}>
        {getMembers.map(({ img, name, id }) => (
          <div key={id}>
            <Link to="/personpage">
              <div className={style.card}>
                <div className={style.card__img}>
                  <img className={style.image} src={img} alt="avatar" />
                </div>

                <h3 className={style.name}>{name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Members;
