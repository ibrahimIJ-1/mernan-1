import React , {useContext} from 'react'

import './Welcome.scss';

//** import images */
import image1 from '../../assets/images/heading1.png';
import image2 from '../../assets/images/Highlight_05.png';

//**import icons from react-icons */
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";


const Welcome = () => {

    //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div className="welcome" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
        <div className="explain">
        <h2 className={`${changeSide === "ar" && "active"}`}>
          {t("who_is_mernan,")} <span>{t("welcome")}</span>
          {changeSide === "en" && (
            <div>
                <img src={image2} alt=""/>
            </div>
          )}
        </h2>
        <p>{t("your_access")}</p>
        <div className="know_more">
        <button className={`${changeSide === "ar" && "know_ar"}`}>
            <span>{t("know_more")}</span>
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
        <div className="image">
          <img src={image1} alt=""/>
        </div>
    </div>
  )
}

export default Welcome