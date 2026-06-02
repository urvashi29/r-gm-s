import React, { Component } from "react";

class Lifecycle extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  //   React 17
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount = () => {
    //API call
    console.log("componentDidMount");
  };

  //optimisation
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  //   React 17
  getSnapshotBeforeUpdate(prevProps, prevState) {
    //animations
    console.log("getSnapshotBeforeUpdate");
    return "snapshot";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // to toast messages, post api calls
    console.log("componentDidUpdate", prevState, this.state, snapshot);
  }

  componentWillUnmount() {
    //cleanup
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
        {this.state.count}

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update
        </button>
      </div>
    );
  }
}

export default Lifecycle;
