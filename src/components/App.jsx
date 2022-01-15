import React from "react";

export class App extends React.Component {
  render() {
    return (
      <div>
        Hallo <strong>{this.props.name}!</strong>
        <div>{this.props.children}</div>
        {this.props.coolKid}
      </div>
    );
  }
}
