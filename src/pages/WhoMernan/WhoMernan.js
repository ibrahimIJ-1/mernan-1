import React from 'react'

//** import components */
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Welcome from '../../components/Welcome/Welcome';

const WhoMernan = () => {

  return (
    <div> 
        {/* Header */}
        <Header/>

        {/* Welcome */}
        <Welcome/>

        {/* Footer */}
        <Footer/>
    </div>

  )
}

export default WhoMernan