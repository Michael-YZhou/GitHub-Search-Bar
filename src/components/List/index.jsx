import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    const { users, firstTimeMounted, isLoading, err } = this.props;

    return (
      <div className="row">
        {firstTimeMounted ? (
          <h2>Enter the name you want to search</h2>
        ) : isLoading ? (
          <h2>Loading...</h2>
        ) : err ? (
          <h2 style={{ color: "red" }}>{err}</h2>
        ) : (
          users.map((userObj) => {
            return (
              <div className="card" key={userObj.id}>
                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                  <img
                    src={userObj.avatar_url}
                    alt="profile"
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
