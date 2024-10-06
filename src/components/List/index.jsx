import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    return (
      <div className="row">
        <div className="card">
          <a rel="noreferrer" href="https://github.com/reactjs" target="_blank">
            <img
              src="https://nepaldesk.com/sites/default/files/styles/content_image_display_/public/2023-12/red-panda-2.jpg?itok=mpFQ3c7R"
              alt="profile"
              style={{ width: "100px" }}
            />
          </a>
          <p className="card-text">reactjs</p>
        </div>
        <div className="card">
          <a rel="noreferrer" href="https://github.com/reactjs" target="_blank">
            <img
              src="https://nepaldesk.com/sites/default/files/styles/content_image_display_/public/2023-12/red-panda-2.jpg?itok=mpFQ3c7R"
              alt="profile"
              style={{ width: "100px" }}
            />
          </a>
          <p className="card-text">reactjs</p>
        </div>
      </div>
    );
  }
}
