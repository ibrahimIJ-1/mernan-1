import React , {useContext} from 'react';

//** import file css */
import './OurValues.scss';


//** import components  */
import Card from '../../components/Card/Card';

//** import images */
import image1 from '../../assets/images/flexibilty.png';
import image2 from '../../assets/images/giving.png';
import image3 from '../../assets/images/Uniqueness.png';
import image4 from '../../assets/images/Credibility.png';

import image5 from '../../assets/images/spiral1.png';
import image6 from '../../assets/images/spiral2.png';
import image7 from '../../assets/images/spiral3.png';
import image8 from '../../assets/images/spiral4.png';

//** state management */
import { StateContext } from "../StateProvider";

import { useTranslation } from "react-i18next";


const OurValues = () => {

    //** this is state to change side rtl and ltr */
    const { changeSide } = useContext(StateContext);

    const { t } = useTranslation();

    
  return (
    <div className="our_value container text-center" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
        <h2 className={changeSide === "ar" ? "head_ar" :"head_en"}>{t("our_values")}</h2>
        <div className="cards row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            <Card image1={image1} image2={image5} title={"flexibility"} text={"we_are_able"}/>
            <Card image1={image2} image2={image6} title={"giving"} text={"we_do_everything"}/>
            <Card image1={image3} image2={image7} title={"uniqueness_and_distinction"} text={"we_create"}/>
            <Card image1={image4} image2={image8} title={"credibility_and_transparency"} text={"communicate"}/>
        </div>
    </div>
  )
}

export default OurValues