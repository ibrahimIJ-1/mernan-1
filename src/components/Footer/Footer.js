import React , {useState , useContext , useRef} from 'react';

//** state management */
import {StateContext} from '../StateProvider';

//** import file scss*/
import './Footer.scss';

//** import logo */
import logo from '../../assets/images/mernan.png';

//** translation  */
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

//**import icons from react-icons */
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {

    //** this is state to change side rtl and ltr */
    const { changeSide  , setChangeSide } = useContext(StateContext)

    const { t } = useTranslation();

    const ref = useRef();

     //** function to change language from english to arabic or from arabic to english */
    const ChangeLanguage = ()=>{
    if(ref.current.innerText === "اللغة الإنجليزية"){
        i18next.changeLanguage('en')
        setChangeSide("en");
    }else{
        i18next.changeLanguage('ar')
        setChangeSide("ar");
    }
}

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
                <h3>{t("about_mernan")}</h3>
                <ul>
                    <li>
                        <a href="@">{t("our_services")}</a>
                    </li>
                    <li>
                        <a href="@">{t("what_makes_difference")}</a>
                    </li>
                    <li>
                        <a href="@">{t("pricing")}</a>
                    </li>
                    <li>
                        <a href="@">{t("blog")}</a>
                    </li>
                    <li>
                        <a href="@">{t("frequently_asked_questions")}</a>
                    </li>
                    <li>
                        <a href="@">{t("contact_us")}</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>{t("join_us")}</h3>
                <ul>
                    <li>
                        <a href="#">{t("join_our_team")}</a>
                    </li>
                    <li>
                        <a href="#">{t("our_partners")}</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>{t("more")}</h3>
                <ul>
                    <li>
                        <a href="#">{t("terms_and_Conditions")}</a>
                    </li>
                    <li>
                        <a href="#">{t("privacy_policy")}</a>
                    </li>
                    <li onClick={ChangeLanguage}>
                        <a href="#" ref={ref}>{t("arabic_language")}</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="social">

            <div className="media">
                <a href="https://linkedin.com"><FaLinkedin/></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF/></a>
                <a href="https://snapchat.com"><FaSnapchatGhost/></a>
                <a href="https://tiktok.com"><FaTiktok/></a>
                <a href="https://youtube.com"><FaYoutube/></a>
                <a href="https://twitter.com"><FaTwitter/></a>
                <a href="https://instegram.com"><AiFillInstagram/></a>
                <a href="https://behance.com"><FaBehance/></a>
            </div>

            <div className="copy_right">
                <span>{t("copy_right")}</span>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Footer