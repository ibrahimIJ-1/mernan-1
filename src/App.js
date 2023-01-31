import React, { FC,Suspense } from 'react';

import './App.scss';

/* import components  */
import Home from './pages/Home/Home';


const App: FC = ()=> {
  return (
    <div className="app">
        <Suspense fallback={null}>
            <Home/>
        </Suspense>
    </div>
  );
}

export default App;
