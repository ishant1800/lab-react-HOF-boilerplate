// src/components/HigherOrderComponent.jsx

import React, { Component } from 'react';

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 },
      ],
    };
  }

  // Progression 2: List all items
  
  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  // Progression 3: List all data based on UserType
  renderDataByUserType = (userType) => {
    const filteredData = this.state.userData.filter((item) => item.user_type === userType);
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  // Progression 4: Filter all data starting with the letter 'J'
  renderDataStartingWithJ = () => {
    const filteredData = this.state.userData.filter((item) => item.name.startsWith('J'));
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  // Progression 5: Filter data based on age
  renderDataByAge = (minAge, maxAge) => {
    const filteredData = this.state.userData.filter((item) => item.age > minAge && item.age <= maxAge);
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  // Progression 6: Find the total experience of the designers
  calculateTotalExperience = (userType) => {
    const filteredData = this.state.userData.filter((item) => item.user_type === userType);
    const totalExperience = filteredData.reduce((acc, item) => acc + item.years, 0);
    return totalExperience;
  };


  render() {

    return (
      <div>
        <h2>PROGRESSION 1 | DEFINE THE STATE</h2>
        <p>Your task in this iteration is just to create an array of objects inside the state.</p>

        <h2>PROGRESSION 2 | LIST ALL ITEMS</h2>
        <ul>{this.renderItems()}</ul>

        <h2>PROGRESSION 3 | LIST ALL DATA BASED ON USERTYPE</h2>
        <ul>{this.renderDataByUserType('Designer')}</ul>

        <h2>PROGRESSION 4 | FILTER ALL DATA STARTING WITH THE LETTER J</h2>
        <ul>{this.renderDataStartingWithJ()}</ul>

        <h2>PROGRESSION 5 | FILTER DATA BASED ON AGE</h2>
        <ul>{this.renderDataByAge(28, 50)}</ul>

        <h2>PROGRESSION 6 | FIND THE TOTAL EXPERIENCE OF THE DESIGNERS</h2>
        <p>Total experience of designers: {this.calculateTotalExperience('Designer')} years</p>
      </div>
    );
  }
}

export default HigherOrderComponent;
