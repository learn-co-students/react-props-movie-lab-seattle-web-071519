import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js';
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
      return(movieData.map((movie, index) => 
      <MovieCard title = {index} {...movie}>
        {/* very shaky on this method^ */}
       </MovieCard>
      ))
  }
    

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
