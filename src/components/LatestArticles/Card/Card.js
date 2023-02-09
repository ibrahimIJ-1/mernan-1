import React from 'react'

import './Card.scss';

import { useTranslation } from "react-i18next";

const Card = ({image , name , text , color}) => {

  const { t } = useTranslation();

  const styles = {
    background:`${color}`
  }

  return (
    <div className="card_article mx-3">
        <div className="image">
            <img src={image} alt=""/>
        </div>
        <div className="title">
            <span style={styles}>{t(`${name}`)}</span>
        </div>
        <div className="text">
            <p>{t(`${text}`)}</p>
        </div>
        <div className="card_footer">
          <span>{t("name")}</span>
          <span>22/11/2022</span>
        </div>
    </div>
  )
}

export default Card