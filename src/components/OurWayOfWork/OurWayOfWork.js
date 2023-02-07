import React, { useContext } from "react";

import "./OurWayOfWork.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

const OurWayOfWork = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div className="way_of_work">
      <h2>{t("our_way_of_work")}</h2>
    </div>
  );
};

export default OurWayOfWork;


const Card = ()=>{
    return(
        <div></div>
    )
}
