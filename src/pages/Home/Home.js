import React from 'react';

/* import components */
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WhoUs from '../../components/WhoUs/WhoUs';


const Home = () => {
  return (
    <div>
        {/* Header */}
        <Header/>

        {/* Who us */}
        <WhoUs/>

        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Home