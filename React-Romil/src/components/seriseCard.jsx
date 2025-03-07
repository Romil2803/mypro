export const SeriesCard =(props)=>{
    return (
        <li>
          <div>
            <img src={props.curEle.img_url} alt="" width="40%" height="40%" />
          </div>
          <h1>Name: {props.curEle.name}</h1>
          <h3>Rating: {props.curEle.rating}</h3>
          <p>summary: {props.curEle.description}</p>
          <p>gener: {props.curEle.genre}</p>
          <p>Cast: {props.curEle.cast}</p>
          <a href={props.curEle.watch_url} target="_blank">
            <button>Watch Now</button>
          </a>
        </li>
      );
};