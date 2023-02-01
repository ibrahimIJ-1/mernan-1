import React , {useState} from 'react'

/* import translation */
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

/* import file scss */
import './Header.scss'

/* import logo */
import logo from '../../assets/images/mernan.png';

import { MdTranslate } from "react-icons/md";


const Header = () => {

  const { t } = useTranslation();

  return (
    <div className="header">
        <div className="navbar">
          <div className="logo">
              <img src={logo} alt=""/>
          </div>
          <div className="nav">
            <ul>
              <li>{t("services")}</li>
              <li>{t("what_makes_difference")}</li>
              <li>{t("request_free_consulting")}</li>
              <li>{t("pricing")}</li>
              <li>{t("blog")}</li>
              <li><SwitchLanguage/></li>
              <li>
                <button>{t("work_with_us")}</button>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Header;



//** this is function for translation */
const SwitchLanguage = ()=>{

  //**this is state to show translation */
  const [showTranslate , setShowTranslate] = useState(false);

  //** function toggle to show list of translation */
  const ShowTranslation = ()=>{
    setShowTranslate(!showTranslate )
  }

  return(
    <div>
        <div onClick={ShowTranslation}>
          <MdTranslate/>
        </div>
        {
          showTranslate &&
          <div className="">
            <button onClick={()=> i18next.changeLanguage('en')}>English</button>
            <button onClick={()=> i18next.changeLanguage('ar')}>Arabic</button>
          </div>
        }
    </div>
  )
}
