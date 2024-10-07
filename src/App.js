import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
  state = {
    users: [], // users is an array of objects
  };

  saveUsers = (userObjs) => {
    this.setState({ users: userObjs });
  };

  render() {
    const { users } = this.state;

    return (
      <div className="container">
        <Search saveUsers={this.saveUsers} />
        <List users={users} />
      </div>
    );
  }
}
