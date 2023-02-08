import React, { useContext } from "react";

import './Subscribe.scss';

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

const Subscribe = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div className="subscribe" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
        <div className="part1">
            <p>
                {t("subscribe")}{" "}
            <span>{t("world_of_marketing")}</span>
            </p>
        </div>
        <div></div>
    </div>
  );
};

export default Subscribe;
