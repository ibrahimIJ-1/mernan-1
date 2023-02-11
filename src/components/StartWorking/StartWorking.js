import React, { useContext } from "react";

import "./StartWorking.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

import image from '../../assets/images/start-work.png';

const StartWorking = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();
  return (
    <div
      className="start_working"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("how_to_start")}</h2>
      <div className="part2">
        <div className="image">
            <img src={image} alt=""/>
        </div>
        <div className="list">
            <div className="text_">
                <span className="number">1</span>
                <span className="text">{t("choose_the_package")}</span>
            </div>
            <div>
                <span className="number">2</span>
                <span className="text">{t("fill_out2")}</span>
            </div>
            <div>
                <span className="number">3</span>
                <span className="text">{t("you_will_be_contacted")}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StartWorking;
