import React, { Component } from "react";
import MovieResults from "./MovieResults";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FavMovieList from './FavMovieList'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1 className="text-center">Movies App </h1>
            <p className="text-center">
              A place where you find you passion for movies !!
            </p>
          </div>
        </div>

        <div className="row">
        <Router>
          <Switch>
            <Route exact path='/' component={MovieResults} />
            <Route path='/fav' component ={FavMovieList}/>
            </Switch>
        </Router>
        </div>

      
      </div>
    );
  }
}

export default App;
