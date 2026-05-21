import React, { Component } from "react";
import User from "./User";

class App extends Component {
  state = {
    firstName: "Alina",
    lastName: "Joe",
    age: 20,
    city: "Pune",
    contact: {
      email: "admin@gmail.com",
    },
    employees: [
      { id: 1, name: "Alina", city: "Pune" },
      { id: 2, name: "Joe", city: "Mumbai" },
      { id: 3, name: "Smith", city: "Delhi" },
    ],
  };

  handleUpdate = () => {
    // this is referring to App
    this.setState({
      city: "Mumbai",
      lastName: "Smith",
    });
  };

  render() {
    // this is referring to App Component
    return (
      <>
        {/* <p>
          My name is {this.state.firstName} {this.state.lastName}, living in{" "}
          {this.state.city}
        </p> */}

        <User
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          city={this.state.city}
        />

        <p>{this.state.contact.email}</p>

        <ul>
          {this.state.employees.map((emp) => {
            return <li>{emp.name}</li>;
          })}
        </ul>

        <button onClick={this.handleUpdate}>Update</button>
      </>
    );
  }
}

export default App;

// User({firstName: "Alina", lastName: "Joe", city: "Pune"});

{
  /* In HTML:  <button onclick="update()"></button> */
}

// Task
// create a array of products, employee data and display in the cards un UI
