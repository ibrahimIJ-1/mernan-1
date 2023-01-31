import React from 'react'

/* import translation */
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

/* import file scss */
import './Header.scss'


const Header = () => {

  const { t } = useTranslation();
  return (
    <div className="header">
        <p>{ t('top_bar_title') }</p>
        <SwitchLanguage/>
    </div>
  )
}

export default Header;


const SwitchLanguage = ()=>{
  return(
    <div>
      <button onClick = {()=> i18next.changeLanguage('en')}>English</button>
      <button onClick = {()=> i18next.changeLanguage('ar')}>Arabic</button>
    </div>
  )
}