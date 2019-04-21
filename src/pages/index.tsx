import React, { Component } from "react";

class Index extends Component {
  public componentDidMount() {
    window.location.href = "/cv";
  }

  public render() {
    return (
      <div>
        If you are not redirected automatically, follow this
        <a href="/cv">link</a>.
      </div>
    );
  }
}

export default Index;
