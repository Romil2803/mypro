//  const NetflixSeries = () => {
//     // const name = "Lucifer"; //with val
//     // const rating = "8.0";
//     // const summary = "Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels";
//     // const returnGenre =()=>{ //with fun
//     //   const genre = "Fantasy television";
//     //   return genre;
//     // }
//     // const age = "19";
//     // // let canWatch = "Not available";
//     // // if(age > 18)canWatch="Watch Now";

//     // const canWatch = ()=>{
//     //   if(age >= 18)return"Watch Now";
//     //   return"Not Available";
//     // }

//     // if(age <18){
//     //   return (
//     //     <>
//     //       <div>
//     //         <img src="Lucifer.jpeg" alt="" width="40%" height="40%" />
//     //       </div>
//     //       <h1>Name: {name}</h1>
//     //       <h3>Rating: {5 + 3}</h3>  {/* with ope */}
//     //       <p>summary: {summary}</p>
//     //       <p>gener: {returnGenre()}</p>
//     //       <button>Not available</button>
//     //     </>
//     //   );
//     // };
//     return (
//       <>
//         <div>
//           <img src="Lucifer.jpeg" alt="" width="40%" height="40%" />
//         </div>
//         <h1>Name: {name}</h1>
//         <h3>Rating: {5 + 3}</h3>  {/* with ope */}
//         <p>summary: {summary}</p>
//         <p>gener: {returnGenre()}</p>
//         {/* <button>{age > 18 ?"Watch Now":"Not available"}</button> */}
//         {/* <button>{canWatch}</button> */}
//         <button>{canWatch()}</button>
//       </>
//     );
//   };

//    export default NetflixSeries; //default export

// export const Fotter = () => {
//     return <p>copyright@Romil</p>;
// };

// export const Header = () => {
//     return (
//         <>
//         <p>Home</p>
//         <p>About Us</p>
//         </>
//     );
// };
import seriesData from "../api/seriesData.json";
import {SeriesCard} from "../components/seriseCard";
// import "../components/netflix.module.css"
const NetflixSeries = () => {
  return (
    <>
      <ul className="flex">
        {seriesData.map((curEle) => (
            <SeriesCard key={curEle.id} data={curEle} />
        ))}
      </ul>
    </>
  );
};
export default NetflixSeries;
