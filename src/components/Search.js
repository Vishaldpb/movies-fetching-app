import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import {secret} from '../secret'
import {movies} from '../actions/index'
import {connect} from 'react-redux'

class Search extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         query :''
      }

      this.handleClick = this.handleClick.bind(this)
      this.handleChange = this.handleChange.bind(this)

    }

    handleClick(e){
        e.preventDefault()
        
        var url =`
        https://api.themoviedb.org/3/search/movie?api_key=${secret}&language=en-US&page=1&include_adult=false&query=${this.state.query}`

        fetch(url,{method : 'GET'})
        .then(response => response.json())
        .then(result  => console.log(this.props.movies(result.results))
        );


    }

    handleChange(e){
        this.setState({
            query : e.target.value
        })
    }
    

  render() {
    return (
      <div className="row">

        <div className="text-center">
        <input className="text-center" type="text" onChange={this.handleChange} placeholder="Search Movie Name"/>
        <Button bsStyle="primary" onClick={this.handleClick} >Search</Button>
        </div>
        
      </div>
    )
  }
}



export default connect(null,{movies})(Search)