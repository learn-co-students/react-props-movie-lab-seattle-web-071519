import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    let movieArray = []
    for(let i = 0; i < movieData.length; i++){
        let movie = movieData[i]
        let title = movie.title
        let IMDBRating = movie.IMDBRating;
        let genres = movie.genres;
        let poster = movie.poster;
        movieArray.push(<MovieCard key={i} title={title} IMDBRating={IMDBRating} genres={genres} poster={poster}/>);
    }
    return movieArray;
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
