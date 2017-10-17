import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';
import logoImage from '../assets/logo.svg';



export default class Index extends Component {

  constructor(){
      super();
      this.state = { message: "" }
  }

  handleClick(e) {
    e.preventDefault();
    fetch("https://frontend-challenge-190ff.firebaseio.com/activities/coding-activity.json")
    .then(response => response.json())
    .then (response => {
      this.setState({ message: response });
      console.log(this.state.message);
    });
  }

  render() {
    return (
      <div>
        <img id="logo" src={ logoImage} alt="logo" />
        <div className="title">
          <h1>Indoorcycling</h1>
        </div>
        <p className="header">
          Spinning oder auch Indoor Cycling ist das perfekte Training für alle, die sich gern bei lauter Musik auspowern wollen. Das perfekte Konditionstraining wird in der Gruppe im Takt der Musik durchgeführt. So kann man sich durch verschiedene Songs motivieren und mitreissen lassen, um schneller an die gewünschten Trainingsziele zu gelangen. Zahlreiche myClubs Partner bieten Cycling Kurse für jedes Trainingslevel an.
        </p>
        <div className="areabutton">
          <a href="#" onClick={this.handleClick.bind(this)} className="button">Book Training</a> 
        </div>
      </div>
    );
  }
}

render(<Index />, document.getElementById('app'));
