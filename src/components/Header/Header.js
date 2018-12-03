import React, {Component} from 'react';
import './header.css'

export default class Header extends Component{
    state = {
        term: "",
        movies: []
    };

searchFilm = (e) =>{
    const term = e.target.value;
    this.setState({term});
}

    render(){
        return(
            <div className='header d-flex'>
            <h3>MovieSearcher</h3>
            <input className="form-control search-input" 
            onChange={this.searchFilm}
            placeholder="Search..."
            value={this.state.tem}/>
            </div>
        )
    }
}