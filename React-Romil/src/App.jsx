// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
//react Fragment remove exra node
// import React, { Fragment } from "react";
// export const App = ()=>{
//   // return([<NetflixSeries key="1" />,<NetflixSeries key="1" />]);//with arry and key
// //   return (
// //     <React.Fragment>
// //     <div>
// // <div>
// //   <img src="Lucifer.jpeg" alt="" width="40%" height="40%" />
// // </div>
// // <h1>Lucifer</h1>
// // <h3>Rating: 8.0</h3>
// // <p>Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.</p>
// // </div>
// // <NetflixSeries />
// // <NetflixSeries />
// // <NetflixSeries />
// // </React.Fragment>
// //   );
// };

//with out react

// import { Fragment } from "react";
// export const App = ()=>{
//   return(
//     <Fragment>
//     <div>
// <div>
//   <img src="Lucifer.jpeg" alt="" width="40%" height="40%" />
// </div>
// <h1>Lucifer</h1>
// <h3>Rating: 8.0</h3>
// <p>Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.</p>
// </div>
// <NetflixSeries />
// <NetflixSeries />
// <NetflixSeries />
// <NetflixSeries />
// </Fragment>
//   );
// };

//with out react and Fragment

// export const App = () => {
//   return (
//     <>
//       <div>
//         <div>
//           <img src="Lucifer.jpeg" alt="" width="40%" height="40%" />
//         </div>
//         <h1>Lucifer</h1>
//         <h3>Rating: 8.0</h3>
//         <p>
//           Lucifer Morningstar has decided he's had enough of being the dutiful
//           servant in Hell and decides to spend some time on Earth to better
//           understand humanity. He settles in Los Angeles - the City of Angels.
//         </p>
//       </div>
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//     </>
//   );
// };

//Dynamic Values in JSX:
// import  NetflixSeries  from "../src/components/NetflixSeries";//default import
import NetflixSeries from "../src/components/NetflixSeries";//named import
export const App = () => {
  return <NetflixSeries />;
       
    
 
};


