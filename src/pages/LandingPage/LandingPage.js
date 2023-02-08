import React from 'react'

//**import components*/
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WhoUs from '../../components/WhoUs/WhoUs';
import Portfolio from '../../components/Portfolio/Portfolio';
import OurServices from '../../components/OurServices/OurServices';
import WhatMakesDifference from '../../components/WhatMakesDifference/WhatMakesDifference';
import PreviousClients from '../../components/PreviousClients/PreviousClients';
import OurWayOfWork from '../../components/OurWayOfWork/OurWayOfWork';
import RequestFreeConsulting from '../../components/RequestFreeConsulting/RequestFreeConsulting';
import FrequentlyAskedQuestions from '../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions'

//** import images */
import logo from '../../assets/images/mernan.png';

const LandingPage = () => {
  return (
    <div>
        {/* Header */}
        <Header/>

        {/* Who us */}
        <WhoUs/>

        {/* Portfolio */}
        <Portfolio/>

        {/* Our Services */}
        <OurServices/>
        
        {/* What makes difference */}
        <WhatMakesDifference/>

        {/* Previous Clients */}
        <PreviousClients/>

        {/* our we of work */}
        <OurWayOfWork/>

        {/*Request free consulting*/}
        <RequestFreeConsulting/>

        {/* frequently asked questions */}
        <FrequentlyAskedQuestions/>
        
        {/* Footer */}
        <Footer image={logo} color1={"#EDE4E0"} color2={"#312E3A"}/>
    </div>
)
}

export default LandingPage