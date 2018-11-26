import React, { Component } from "react";
import Header from "../Header";
import RandomFilm from "../RandomFilm";

export default class App extends Component {
  render() {
    return (
   <div>
       <Header/>
       <RandomFilm/>
       </div>
    );
  }
}