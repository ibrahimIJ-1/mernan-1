import React, { useContext } from "react";

import "./AboutMernan.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

import image1 from '../../assets/images/video.png';

const AboutMernan = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div className="about_mernan" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <div className="explaining">
        <h2>{t("know_more_about_mernan")}</h2>
        <p>{t("lorem")}</p>
      </div>
      <div className="image">
        <img src={image1} alt=""/>
      </div>
    </div>
  );
};

export default AboutMernan;
