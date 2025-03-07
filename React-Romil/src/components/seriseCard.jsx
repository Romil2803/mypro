//normal css
import styled from "styled-components";
export const SeriesCard =(props)=>{
  const{id, img_url, name, rating, description, cast, genre, watch_url}=props.data;
  // const margin = {marginBottom:"10px"};
  const Mybutton = styled.button({
    marginBottom:"10px",
  })
  const ratingClass = rating >= 8.5?"super_hit":"average";
  const bold = {fontWeight:"bold", color:"red",fontSize:"18px"};
    return (
        <li className="card">
          <div>
            <img src={img_url} alt="" className="img"/>
          </div>
          <div className="card-content">
          <h1 className="card-heading ">Name: {name}</h1>
          <h3> <span style={bold}> Rating: </span> <span className={`rating ${ratingClass}`}> {rating}</span></h3>
          <p> <span style={bold}> Summary:</span> {description}</p>
          <p> <span style={bold}> Gener:</span> {genre}</p>
          <p> <span style={bold}> Cast:</span> {cast}</p>
          <a href={watch_url} target="_blank">
            {/* <button className={`btn ${ratingClass}`} style={margin}>Watch Now</button> */}
            <Mybutton className={`btn ${ratingClass}`}>Watch Now</Mybutton>
          </a>
          </div>
        </li>
      );
};

//module css
// import style from "./netflix.module.css";
// export const SeriesCard =(props)=>{
//   const{ img_url, name, rating, description, cast, genre, watch_url}=props.data;
//   const margin = {marginBottom:"10px"};
//   const ratingClass = rating >= 8.5?style.super_hit:style.average;
//   const bold = {fontWeight:"bold", color:"red",fontSize:"18px"};
//     return (
//         <li className={style.card}>
//           <div>
//             <img src={img_url} alt="" className={style.img}/>
//           </div>
//           <div className={style["card-content"]}>
//           <h1 className={style["card-heading"]}>Name: {name}</h1>
//           <h3> <span style={bold}> Rating: </span> <span className={`${style.rating} ${ratingClass}`}> {rating}</span></h3>
//           <p> <span style={bold}> Summary:</span> {description}</p>
//           <p> <span style={bold}> Gener:</span> {genre}</p>
//           <p> <span style={bold}> Cast:</span> {cast}</p>
//           <a href={watch_url} target="_blank">
//             <button className={`${style.btn} ${ratingClass}`} style={margin}>Watch Now</button>
//           </a>
//           </div>
//         </li>
//       );
// };