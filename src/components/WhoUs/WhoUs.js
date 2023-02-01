import React , {useContext} from 'react'

import './WhoUs.scss';

//** state management */
import {StateContext} from '../StateProvider';


import { useTranslation } from 'react-i18next';

const WhoUs = () => {

    //** this is state to change side rtl and ltr */
  const { changeSide } = useContext(StateContext)

    const { t } = useTranslation();

  return (
    <div className="who_us" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
        <div className="text">
            <h2 className={`${changeSide === "ar" && "active"}`}>
                {t("we_transfer_your_work")}
                {" "}
                <span>{t("world_full")}</span>
            </h2>
            <p className="mernan">{t("mernan_is_a_world")}</p>
            <div className={`${changeSide === "ar" ? "active_ar" :"active_en"} statistics`}>
                <div>
                    <h3>11</h3>
                    <p>{t("customers_no")}</p>
                </div>
                <div>
                    <h3>10</h3>
                    <p>{t("members_no")}</p>
                </div>
                <div>
                    <h3>500</h3>
                    <p>{t("designs_no")}</p>
                </div>
                <div>
                    <h3>200+</h3>
                    <p>{t("number_of_funded_campaigns")}</p>
                </div>
            </div>
            <div>
                <button></button>
                <button></button>
            </div>
        </div>
        <div className="">
        </div>
    </div>
  )
}

export default WhoUs