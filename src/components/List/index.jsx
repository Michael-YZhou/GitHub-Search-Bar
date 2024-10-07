import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    const { users } = this.props;

    return (
      <div className="row">
        {users.map((userObj) => {
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
        })}
      </div>
    );
  }
}
