import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  search = () => {
    // get the input value and rename it as keyWord
    const {
      keyWordElement: { value: keyWord },
    } = this;
    console.log(keyWord);
    // send axios request
    axios.get(`http://localhost:3000/api1/search/users2?q=${keyWord}`).then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        // update the state
        console.log(error);
      }
    );
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search GitHub Users</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="enter the name you want to search"
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
