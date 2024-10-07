import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
  state = {
    users: [], // users is an array of objects
    firstTimeMounted: true, // whether the component is mounted for the first time
    isLoading: false, // whether the data is being loaded
    err: "", // error message when the request fails
  };

  updateState = (stateObj) => {
    this.setState(stateObj); // update the state
  };

  render() {
    return (
      <div className="container">
        <Search updateState={this.updateState} />
        <List {...this.state} />
      </div>
    );
  }
}
