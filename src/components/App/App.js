import React, { Component } from "react";
import Header from "../Header";
import RandomFilm from "../RandomFilm";
import TopRated from '../TopRated'

export default class App extends Component {
  render() {
    return (
   <div>
       <Header/>
       <RandomFilm/>
       <TopRated/>
       </div>
    );
  }
}