import React, { Component } from "react";
import Search from "./Search";
import { connect } from "react-redux";
import MovieSearchResult from './MovieSearchResult'
import {Link} from 'react-router-dom'


class MovieResults extends Component {
  render() {
    return (
      
      <div>
        <Link to='/fav'><h4>Favorites</h4></Link>
        
        <hr/>
        <Search />



        {this.props.movies.map(item => {
          return <MovieSearchResult movie={item} key={item.id} showButton={true} /> 
        })}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies : state.movies,
  }
}
export default connect(
  mapStateToProps,
  null
)(MovieResults);
