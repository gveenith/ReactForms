import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      description: "",
      gender: "",
      language: "",
      consent: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  handleSubmit() {}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="App">
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <textarea
            name="description"
            value={this.state.description}
            placeholder="Describe yourself"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          <label>Female</label>
          <br />
          <lable>Preferred Language: </lable>
          <select
            name="language"
            value={this.state.language}
            onChange={this.handleChange}
          >
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="spanish">Spanish</option>
          </select>
          <br />
          <input type="checkbox" name="consent" onChange={this.handleChange} />
          <label>I agree to saving my details in database</label>
          <br />
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default App;
