import React from 'react'

import './Card.scss';

import { useTranslation } from "react-i18next";

const Card = ({image1 , image2, title , text}) => {

  const { t } = useTranslation();

  return (
    <div className="card_ col">
        <img className="image1" src={image1} alt=""/>
        <div className="part2">
          <h3>{t(`${title}`)}</h3>
          <img src={image2} alt=""/>
        </div>
        <div>
          <p>{t(`${text}`)}</p>
        </div>
    </div>
  )
}

export default Card;