import React from "react";

export class App extends React.Component {
  state = {
    counterValue: 2,
  };

  componentDidMount() {
    console.log("neues interval");
    this.myInterval = setInterval(() => {
      this.setState((state) => {
        if (state.counterValue > 0) {
          return { counterValue: state.counterValue - 1 };
        } else {
          return { counterValue: 0 };
        }
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }

  shouldComponentUpdate() {
    if (this.state.counterValue === 0) {
      return false;
    }

    return true;
  }

  render() {
    return (
      <strong>Countdown = {this.state.counterValue}</strong>;
    );
  }
}
