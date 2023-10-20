import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'//impt


export class News extends Component {
 static defaultProps = {
   country:'in',
   pagesize:8,
   category:'general'
 }
 static propTypes={
  country:PropTypes.string,//pts
  pagesize:PropTypes.number,
  category:PropTypes.string
   
}

capitlizeText =(string)=> 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props) {
    super(props);
    console.log("i nmm news ");
    this.state = {
      articles: [],
      loading: false,
      page: 1
     

    }
    document.title=`${this.capitlizeText(this.props.category)} - News daily`;
  }

  async componentDidMount() {

    //console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8cbf14aeec574316b8454a92c182b10f&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    this.setState({ loading: true });
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })

  }

  handlePreviousClick = async () => {

    console.log("pre");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8cbf14aeec574316b8454a92c182b10f&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    // this.setState({articles: parsedData.articles})
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })

  }

  handleNextClick = async () => {

    console.log("next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
      //total num of page


      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8cbf14aeec574316b8454a92c182b10f&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      //console.log(parsedData);
      // this.setState({articles: parsedData.articles})
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }


  render() {
    //console.log("render")
    return (
      <div className='container my-2'>
        <h1 className='text-center' style={{margin:'40px 0px' ,border:'2px solid black', marginTop:'15%'}}>NEWS daily-Top {this.capitlizeText(this.props.category)} Headlines</h1>
       {this.state.loading && <Spinner />}


        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className='col-md-4' key={element.url}>
                <Newsitem title={element.title} discription={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
            )
          })}


        </div>
        <div className='container d-flex justify-content-between' >
          <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePreviousClick}>	&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>




      </div>
    )
  }
}

export default News




