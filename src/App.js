import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
  saveUsers = (userObjs) => {
    this.setState({ users: userObjs });
  };
  render() {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    );
  }
}
