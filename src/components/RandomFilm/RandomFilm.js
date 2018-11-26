import React, { Component } from "react";
import Service from "../../service/service";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";
import "./randomFilm.css";

export default class RandomFilm extends Component {
  service = new Service();

  state = {
    film: {},
    loading: true,
    error: false
  };

  constructor() {
    super();
    this.updateFilm();
  }

  onFilmLoaded = film => {
    this.setState({
      film,
      loading: false
    });
  };

  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updateFilm() {
    const id = Math.floor(Math.random() * 800) + 1;
    this.service
      .getPopularMovie(id)
      .then(this.onFilmLoaded)
      .catch(this.onError);
  }

  render() {
    const { film, loading, error } = this.state;

    const hasData =!(loading || error);
    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <FilmView film={film} /> : null;

    return (
      <div className="random-film jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}
const FilmView = ({ film }) => {
  const { id, image, title, popularity, runtime, overview } = film;

  return (
    <React.Fragment>
      <div>
        <img
          className="film-image"
          src={`https://image.tmdb.org/t/p/w500/${image}`}
        />
      </div>
      <div className='container-fluid'>
        <h4 className="h4">{title}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Popularity:</span>
            <span>{popularity}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Run Time:</span>
            <span>{runtime}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Overview:</span>
            <span>{overview}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
