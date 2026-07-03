import './Main.css';
import React from 'react';
import MovieList from '../components/MovieList.js';
import Preloader from '../components/Preloader.js';
import Search from '../components/Search';

class Main extends React.Component 
{
    state = {
        movies: []
    };
    componentDidMount() {
        fetch('https://www.omdbapi.com/?apikey=2b2aca6b&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}));
    }   
searchMovie = (str) =>
{
    fetch(`https://www.omdbapi.com/?apikey=2b2aca6b&s=${str}`)
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search}))

}
  render() {
    const { movies } = this.state;
    return (
      <div className="main">
        <Search searchMovie={this.searchMovie}/>
        {movies == null ? "Error" : movies.length ? <MovieList movies={movies} /> : <Preloader />}
      </div>
    );
  }
}

export default Main;
