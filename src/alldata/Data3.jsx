import React from "react";

import "./ClassComponentForm.css";

const emptyForm = {
  name: "",
  email: "",
  zipcode: "",
  date: new Date().toISOString().slice(0, 10),
};

class ClassComponentForm extends React.Component {
  state = {};

  componentDidMount() {
    this.setState(emptyForm);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div id="classComponentForm">
        <h2>Form</h2>
        <form id="form">
          <label htmlFor="nameInput">Fullname:</label>
          <input
            id="nameInput"
            name="name"
            type="text"
            placeholder="Please type your name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
          <label htmlFor="emailInput">Email:</label>
          <input
            id="emailInput"
            name="email"
            type="text"
            placeholder="Please type your email"
            value={this.state.email}
            onChange={(e) => this.handleChange(e)}
          />
          <label htmlFor="zipcodeInput">Zipcode:</label>
          <input
            id="zipcodeInput"
            name="zipcode"
            type="text"
            placeholder="Please type your zipcode"
            value={this.state.zipcode}
            onChange={(e) => this.handleChange(e)}
          />
          <label htmlFor="dateInput">Date:</label>
          <input
            id="dateInput"
            name="date"
            type="date"
            value={this.state.date}
            onChange={(e) => this.handleChange(e)}
          />
        </form>
        <div>
          <button type="button">Submit </button>
        </div>
      </div>
    );
  }
}

export default ClassComponentForm;
