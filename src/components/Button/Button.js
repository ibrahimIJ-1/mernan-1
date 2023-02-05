import React, { useContext } from "react";

import './Button.scss';

//**import icons from react-icons */
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";

const Button = ({width , name}) => {
  //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext);

  const { t } = useTranslation();

  const styles ={
    width:`${width}px`
  }

  return (
    <div className="button_component">
      <button style={styles}>
        <span>{t(`${name}`)}</span>
        <span>
          {changeSide === "ar" ? (
            <BsArrowLeft className="arrow" />
          ) : (
            <BsArrowRight className="arrow" />
          )}
        </span>
      </button>
    </div>
  );
};

export default Button;
