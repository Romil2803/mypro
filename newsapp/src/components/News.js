import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        // category: PropTypes.string,
      }
      cpetilaizeFirstLetter = (string) => {
         return string.charAt(0).toUpperCase() + string.slice(1);
      }
    constructor(props){
        super(props);
        console.log("Hello I am a constructor from News Component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title =`Velocity News | ${this.cpetilaizeFirstLetter(this.props.category)}`;
    }
    async updateNews(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${(this.props.category)}&apikey=5c65c30f07874e74849e4342e91c9b83&page=${this.state.page}&page&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data= await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults, loading: false})
    };
    async componentDidMount(){
      this.updateNews();
    }

    handelPrevious= async ()=>{
      console.log("Previous");
      this.setState({page:this.state.page-1})
      this.updateNews();
    }
     handelNext= async ()=>{
      console.log("Next");
      this.setState({page:this.state.page+1})
      this.updateNews();
    }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:"30px 0px"}}>Velocity News Top {this.cpetilaizeFirstLetter(this.props.category)}  Headlines</h1>
        {/* {this.state.loading && <Spinner />} */}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            
            return <div className="col-md-4" key={element.url} >
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
        })} 
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelPrevious}> &larr; Previous</button>
        <button disabled={(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handelNext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
