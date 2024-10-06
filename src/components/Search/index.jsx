import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search GitHub Users</h3>
        <div>
          <input type="text" placeholder="enter the name you want to search" />
          &nbsp;<button>Search</button>
        </div>
      </section>
    );
  }
}
