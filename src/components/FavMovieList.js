import React, { Component } from 'react'
import {connect} from 'react-redux'
import MovieSearchResult from './MovieSearchResult'
import {Link} from 'react-router-dom'

class FavMovieList extends Component {
  render() {
    return ( 
      <div>
       <Link to='/'><h4>Back to Home</h4></Link>
        {this.props.favorites.map(movie =>{
          return <MovieSearchResult movie={movie} key={movie.id}  showButton={false} />
        })}

      </div>
    )
  }
}


function mapStateToProps(state){
    return {
        favorites : state.addToFavorite
    }
}
export default connect(mapStateToProps,null)(FavMovieList)

