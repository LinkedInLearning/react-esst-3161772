import React from "react";

export class App extends React.Component {
  render() {
    const { title, name, nameObj } = this.props;
    return (
      <div title={title}>
        Hallo {nameObj.prename} {nameObj.lastname}
      </div>
    );
  }
}
