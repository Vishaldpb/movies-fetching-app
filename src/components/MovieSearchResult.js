import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addToFavorite,removeFromFavorite} from '../actions/index'


const url ="https://image.tmdb.org/t/p/w600_and_h900_bestv2"
const movieUrl ="https://www.themoviedb.org/movie/"

class MovieSearchResult extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       favourited : false
    }
  }

  addToFavorite(){
    this.setState({favourited: !this.state.favourited});
    this.props.addToFavorite(this.props.movie)
  }

  removeFromFavorite(){
    this.setState({favourited: !this.state.favourited});
    this.props.removeFromFavorite(this.props.movie)

  }

  displayHeart(){
    if(!this.state.favourited){
      return   <p><span className="glyphicon glyphicon-heart-empty" onClick={()=> this.addToFavorite()} aria-hidden="true"></span></p>
     
    }else{
      return <p><span className="glyphicon glyphicon-heart" onClick={()=> this.removeFromFavorite()} aria-hidden="true"></span></p>
    }
  }
  
  render() {
    return (
      <div>

          
            <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
           <a href={movieUrl+this.props.movie.id} target="_blank"> <img src={url+this.props.movie.poster_path} alt={this.props.movie.title}/></a>
            <div className="caption">
                <h3>{this.props.movie.title}</h3>
                <p>{this.props.movie.overview}</p>
                <p>Ratings - <span className="badge badge-default">  <span className="glyphicon glyphicon-star" aria-hidden="true"></span> {this.props.movie.vote_average}</span></p>
                <p>Release Date - {this.props.movie.release_date}</p>

                {this.props.showButton ? this.displayHeart() : null}

                
            </div>
            </div>
        </div>
          
        
      </div>
    )
  }
}


export default connect(null,{addToFavorite,removeFromFavorite})(MovieSearchResult)