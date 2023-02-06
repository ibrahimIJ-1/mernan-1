import React from 'react'

//** import components */
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Welcome from '../../components/Welcome/Welcome';
import WhatServices from '../../components/WhatServices/WhatServices';
import WhatMakesMernan from '../../components/WhatMakesMernan/WhatMakesMernan';
import JoinUs from '../../components/JoinUs/JoinUs';
import AboutMernan from '../../components/AboutMernan/AboutMernan';
import OurValues from '../../components/OurValues/OurValues';
import OurPartners from '../../components/OurPartners/OurPartners';
import PreviousClients from '../../components/PreviousClients/PreviousClients';
import OurLocations from '../../components/OurLocations/OurLocations';
import RequestFreeConsulting from '../../components/RequestFreeConsulting/RequestFreeConsulting';

const WhoMernan = () => {

  return (
    <div> 
        {/* Header */}
        <Header/>

        {/* Welcome */}
        <Welcome/>

        {/* What Services */}
        <WhatServices/>

        {/* What make mernan */}
        <WhatMakesMernan/>

        {/* Join Us */}
        <JoinUs/>

        {/* About mernan */}
        <AboutMernan/>

        {/* Our Values */}
        <OurValues/>

        {/* Our Partners */}
        <OurPartners/>

        {/*Previous Clients*/}
        <PreviousClients/>

        {/*Our Locations*/}
        <OurLocations/>

        <RequestFreeConsulting/>
        
        {/* Footer */}
        <Footer/>
    </div>

  )
}

export default WhoMernan