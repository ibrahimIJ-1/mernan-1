import React, { useContext } from "react";

import "./ServicesOffered.scss";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

import Card from "./Card/Card";

//**import images */
import image1 from "../../assets/images/digital-marketing.png";
import image2 from '../../assets/images/development.png';
import image3 from '../../assets/images/branding.png';
import image4 from '../../assets/images/design.png';
import image5 from '../../assets/images/social_media_marketing.png';

const ServicesOffered = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  return (
    <div
      className="services_offered"
      dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}
    >
      <h2>{t("services_offered")}</h2>
      <div className="row cards">
        <Card
          image={image1}
          color1={"#FFF2D8"}
          color2={"#FFD261"}
          color3={"#FFCA3D"}
          title={"digital_marketing_"}
          text={"a_way_to_promote"}
        />
        <Card
          image={image2}
          color1={"#FBD8EB"}
          color2={"#FFB6DD"}
          color3={"#E7A5C8"}
          title={"development"}
          text={"from_programming"}
        />
        <Card
          image={image3}
          color1={"#BCDFDE"}
          color2={"#3FB1AE"}
          color3={"#2FA4A1"}
          title={"branding"}
          text={"mernan_business"}
        />
        <Card
          image={image4}
          color1={"#BDB9D9"}
          color2={"#7669C8"}
          color3={"#6B5CC9"}
          title={"design"}
          text={"from_website"}
        />
         <Card
          image={image5}
          color1={"#FFDEB0"}
          color2={"#EB9B2D"}
          color3={"#F68F01"}
          title={"social_media_markteing"}
          text={"in_mernan"}
        />
      </div>
    </div>
  );
};

export default ServicesOffered;
