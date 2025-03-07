// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
import './components/netflix.css';
//Dynamic Values in JSX:
// import  NetflixSeries  from "../src/components/NetflixSeries";//default import
import NetflixSeries from "../src/components/NetflixSeries";//named import
export const App = () => {
  return (
    <>
    <section className='container'>
    <NetflixSeries />
    </section>
    </>
  );
       
    
 
};


