import React, {Component} from 'react';
import './header.css'

export default class Header extends Component{
    render(){
        return(
            <div className='header d-flex'>
            <h3>MovieSearcher</h3>
            <input className="form-control search-input" placeholder="Search..."/>
            </div>
        )
    }
}