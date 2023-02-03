import React, { FC,Suspense } from 'react';

import {BrowserRouter , Route} from 'react-router-dom';

import './App.scss';

//** import components  */
import Home from './pages/Home/Home';
import WhoMernan from './pages/WhoMernan/WhoMernan';


const App: FC = ()=> {
  return (
    <div className="app">
        <Suspense fallback={null}>
            {/* <Home/> */}
            <WhoMernan/>
        </Suspense>
    </div>
  );
}

export default App;
