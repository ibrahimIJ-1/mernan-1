import React, { useContext } from "react";

import "./OurLocations.scss";

import image from "../../assets/images/location.png";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

const OurLocations = () => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const list = [
    
    {
        headquarters_place: "jeddah_ksa",
        telephone: "0128123455",
        building_number: "1234"
    },
    {
      headquarters_place: "dubai_uae",
      telephone: "0128123455",
      building_number: "1234"
  },
    {
      headquarters_place: "cairo_egypt",
      telephone: "0128123455",
      building_number: "1234"
    },
    
  ]

  return (
    <div className="our_locations" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
      <h2>{t("our_location")}</h2>
      <div className="">
      <div className="locations row text-center">
        {
            list && list.map((item)=>(
                <div kay={item} className="location my-2 col-lg-4">
                    <img src={image} alt=""/>
                    <div className={`${changeSide === "ar" ? "text_ar" : "text_en"} text`}>
                      <p>{t("headquarters_place")}{": "}<span>{t(item.headquarters_place)}</span></p>
                      <p>{t("telephone")}{": "}<span>{t(item.telephone)}</span></p>
                      <p>{t("building_number")}{": "}<span>{t(item.building_number)}</span></p>
                    </div>
                </div>
            ))
        }
      </div>
      </div>
    </div>
  );
};

export default OurLocations;
