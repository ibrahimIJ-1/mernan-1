import React , {useContext} from 'react'

import './WhatServices.scss'

//** import images */
import image1 from '../../assets/images/services.png';
import image2 from '../../assets/images/Highlight_06.png';
import image3 from '../../assets/images/services_ar.png';
import image4 from '../../assets/images/Highlight_07.png';

//**import icons from react-icons */
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";


const WhatServices = () => {

    //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div className={`${changeSide === "ar" && "what_services_ar"} what_services`} dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
        <div className="image">
            {changeSide === "ar" ? <img src={image3} alt=""/> : <img className="services_en" src={image1} alt=""/>}
        </div>
        <div className="explaining">
            <h2>{
            t("what_services")}
            {" "}
            <span>{t("do_we_provide?")}</span>
            {changeSide === "ar" ? <img className="services_ar" src={image4} alt=""/> : <img className="services_en" src={image2} alt=""/>}
            </h2>
            <p>{t("our_services_in_mernan")}</p>
        <div className="browse_services">
        <button>
            <span>{t("browse_services")}</span>
            <span>
              {changeSide === "ar" ? (
                <BsArrowLeft className="arrow" />
              ) : (
                <BsArrowRight className="arrow" />
              )}
            </span>
        </button>
        </div>
        </div>
    </div>
  )
}

export default WhatServices