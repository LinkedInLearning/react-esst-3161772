import React from "react";

export class App extends React.Component {
  state = {
    counterValue: 3,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        if (state.counterValue > 0) {
          return { counterValue: state.counterValue - 1 };
        } else {
          return { counterValue: 0 };
        }
      });
    }, 1000);
  }

  render() {
    return <strong>Countdown = {this.state.counterValue}</strong>;
  }
}
