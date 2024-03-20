import React, { Component } from "react";

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
      ]
    };
  }

  renderItems() {
    return this.state.userData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
  }

  renderBasedOnUserType() {
    return this.state.userData
      .filter((item) => item.user_type === "Designer")
      .map((item) => (
        <React.Fragment key={item.id}>
          <li className="list-elements">
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
          </li>
        </React.Fragment>
      ));
  }

  renderBasedOnLetterJ() {
    return this.state.userData
      .filter((item) => item.name[0] === "J")
      .map((item) => (
        <React.Fragment key={item.id}>
          <li className="list-elements">
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
          </li>
        </React.Fragment>
      ));
  }

  renderBasedOnAge() {
    return this.state.userData
      .filter((item) => item.age <= 50 && item.age > 28)
      .map((item) => (
        <React.Fragment key={item.id}>
          <li className="list-elements">
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
          </li>
        </React.Fragment>
      ));
  }

  renderTotalAgeOfDesigners() {
    const totalYears = this.state.userData.reduce((accumulator, currentValue) => {
      if (currentValue.user_type === "Designer") {
        accumulator += currentValue.years;
      }
      return accumulator;
    }, 0);

    return <span>Total years of designers: {totalYears}</span>;
  }

  render() {
    return (
      <>
        <React.Fragment>
          <h1>Display all items</h1>
          <div className="display-box">
            <ul>{this.renderItems()} </ul>
          </div>
        </React.Fragment>

        <React.Fragment>
          <h1>Display based on user type</h1>
          <div className="display-box">
            <ul>{this.renderBasedOnUserType()} </ul>
          </div>
        </React.Fragment>

        <React.Fragment>
          <h1>Filter all data starting with letter J</h1>
          <div className="display-box">
            <ul>{this.renderBasedOnLetterJ()} </ul>
          </div>
        </React.Fragment>

        <React.Fragment>
          <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
          <div className="display-box">
            <ul>{this.renderBasedOnAge()} </ul>
          </div>
        </React.Fragment>

        <React.Fragment>
          <h1>Find the total years of the designers</h1>
          <div className="display-box">
            <ul>{this.renderTotalAgeOfDesigners()} </ul>
          </div>
        </React.Fragment>
      </>
    );
  }
}

function demo() {
  return "something";
}

export default HigherOrderComponent;
