import React , {useState , useContext} from 'react';

//** state management */
import {StateContext} from '../StateProvider';

//** import file scss*/
import './Footer.scss';

//** import logo */
import logo from '../../assets/images/mernan.png';

//** translation  */
import { useTranslation } from 'react-i18next';
// import i18next from 'i18next';

//**import icons from react-icons */
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

// import { Link } from "react-router-dom";


const Footer = () => {

    //** this is state to change side rtl and ltr */
  const { changeSide  } = useContext(StateContext)

    const { t } = useTranslation();

    return (
    <div className="footer" dir={`${changeSide === "ar" ? "rtl" : "ltr"}`}>
        <div className="head">
            <div className="image">
                <img src={logo} alt=""/>
            </div>
            <div>
            <button className="work_with">
                <span>{t("work_with_us")}</span>
                <span>
                    {
                        changeSide === "en" ? <BsArrowRight className="arrow"/> : <BsArrowLeft className="arrow"/>
                    }
                </span>
                </button>
            </div>
        </div>
        <div className="body">
            <div>
                <h3>About Mernan</h3>
                <ul>
                    <li>
                        <a href="@">Our Services</a>
                    </li>
                    <li>
                        <a href="@">What Makes Difference</a>
                    </li>
                    <li>
                        <a href="@">Pricing</a>
                    </li>
                    <li>
                        <a href="@">Blog</a>
                    </li>
                    <li>
                        <a href="@">Frequently Asked Questions</a>
                    </li>
                    <li>
                        <a href="@">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Join Us</h3>
                <ul>
                    <li>
                        <a href="#">Join Our Team</a>
                    </li>
                    <li>
                        <a href="#">Our Partners</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>More</h3>
                <ul>
                    <li>
                        <a href="#">Terms and Conditions</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Arabic Language</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="social">
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Footer