import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  search = () => {
    // get the input value and rename it as keyWord
    const {
      keyWordElement: { value: keyWord },
    } = this;
    /////////////////////////////////// update the state just before sending request ///////////////////////////////////
    this.props.updateState({
      firstTimeMounted: false, // change the status of the first mount to false because the component has been mounted
      isLoading: true, // change the loading status to true because the request is being sent
    });
    // send axios request
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      (response) => {
        ////////////////////////////////// update the state before receiving response //////////////////////////////////
        this.props.updateState({
          users: response.data.items, // store the array of users
          isLoading: false, // change the loading status to false because the response has been received
        });
      },
      (error) => {
        //////////////////////////////////// update the state after receiving error ////////////////////////////////////
        this.props.updateState({
          isLoading: false, // change the loading status to false because the error has been received
          err: error.message, // store the error message
        });
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
