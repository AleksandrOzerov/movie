import React, { Component } from "react";
import Service from "../../service/service";
import "./topRated.css";

export default class TopRated extends Component {
  service = new Service();
  state = {
    films: []
  };
  constructor() {
    super();
    this.updateFilms();
  }

  onFilmsLoaded = films => {
    this.setState({
      films
    });
  };
  updateFilms() {
    this.service.getTopRated().then(this.onFilmsLoaded);
  }
  render() {
    const { films } = this.state;
    const arr = films.map(movie => {
      return (
        <div className="flex-container">
          <div key={movie.id} className="container">
            <div className="card">
              <img
                className="card-img-top"
                src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
              />
              <div class="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Popularity: {movie.popularity}
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    });

    return <div>{arr}</div>;
  }
}
