import React, { useContext } from "react";

import "./WhoUs.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//**import icons from react-icons */
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

//** import images */
import Hero from "../../assets/images/hero.svg";
import Hero_ar from "../../assets/images/hero_ar.svg";

//**import useNavigate from react-router-don */
import { useNavigate } from 'react-router-dom';

const WhoUs = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const ChangeRoute = ()=> {
    navigate("/mernan")
  }

  return (
    <div className="who_us" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <div className="text">
        <h2 className={`${changeSide === "ar" && "active"}`}>
          {t("we_transfer_your_work")} <span>{t("world_full")}</span>
          {changeSide === "ar" && (
            <div>
              <div className="line4"></div>
              <div className="line5"></div>
              <div className="line6"></div>
            </div>
          )}
          {changeSide === "en" && (
            <div>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          )}
        </h2>
        <p className="mernan">{t("mernan_is_a_world")}</p>
        <div
          className={`${
            changeSide === "ar" ? "active_ar" : "active_en"
          } statistics`}
        >
          <div>
            <h3>11</h3>
            <p>{t("customers_no")}</p>
          </div>
          <div>
            <h3>10</h3>
            <p>{t("members_no")}</p>
          </div>
          <div>
            <h3>500</h3>
            <p>{t("designs_no")}</p>
          </div>
          <div>
            <h3>200+</h3>
            <p>{t("number_of_funded_campaigns")}</p>
          </div>
        </div>
        <div className="buttons">
          <button onClick={ChangeRoute} className={`${changeSide === "ar" && "who_ar"} who_mernan`}>
            <span>{t("who_is_mernan")}</span>
            <span>
              {changeSide === "en" ? (
                <BsArrowRight className="arrow" />
              ) : (
                <BsArrowLeft className="arrow" />
              )}
            </span>
          </button>
          <button
            className={`${changeSide === "ar" && "portfolio_ar"} portfolio`}
          >
            {t("portfolio")}
          </button>
        </div>
      </div>
      <div
        className={`${changeSide === "ar" ? "image_ar" : "image_en"} image_`}
      >
        {changeSide === "ar" ? (
          <img src={Hero_ar} alt="" />
        ) : (
          <img src={Hero} alt="" />
        )}
      </div>
    </div>
  );
};

export default WhoUs;
