import React, { useContext } from "react";

import "./OurPartners.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

//** import images */
import image1 from '../../assets/images/partner1.png';
import image2 from '../../assets/images/partner2.png';
import image3 from '../../assets/images/partner3.png';
import image4 from '../../assets/images/partner4.png'
import image5 from '../../assets/images/partner5.png';
import image6 from '../../assets/images/partner6.png';
import image7 from '../../assets/images/partner7.png';
import image8 from '../../assets/images/partner8.png';
import image9 from '../../assets/images/partner9.png';

const OurPartners = ({color1 , color2}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const style = {
    style1:{
      background:`${color1}`
    },
    style2:{
      color:`${color2}`
    }
  }

  return (
    <div style={style.style1} className="our_partners" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <h2 style={style.style2}>{t("our_partners")}</h2>
      <div className="container_">
        <div className="row  row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
        <img className="col" src={image1} alt=""  height="54px"/>
        <img className="col" src={image2} alt=""  height="71px"/>
        <img className="col" src={image3} alt=""  height="44px"/>
        <img className="col" src={image4} alt=""  height="79px"/>
        <img className="col" src={image5} alt=""  height="94px"/>
        <img className="col" src={image6} alt=""  height="54px"/>
        <img className="col" src={image7} alt=""  height="100px"/>
        <img className="col" src={image8} alt=""  height="34px"/>
        <img className="col" src={image9} alt=""  height="71px"/>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
