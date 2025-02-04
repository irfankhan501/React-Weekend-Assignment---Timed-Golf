import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0 };
    this.intervalID = null;
    this.handlekeyPressed = this.handlekeyPressed.bind(this);
  }
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidUpdate(prevProps, prevState) {
    if (this.state.x === 250 && this.state.y === 250) {
      clearInterval(this.intervalID);
      window.removeEventListener("keydown", this.handlekeyPressed);
    }
  }

  handleClick() {
    this.intervalID = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
    window.addEventListener("keydown", this.handlekeyPressed);
  }

  handlekeyPressed(e) {
    // console.log(e);
    const X = this.state.x;
    const Y = this.state.y;
    if (e.keyCode === 39) {
      this.setState({ x: X + 5 });
    }
    if (e.keyCode === 37) {
      this.setState({ x: X - 5 });
    }
    if (e.keyCode === 40) {
      this.setState({ y: Y + 5 });
    }
    if (e.keyCode === 38) {
      this.setState({ y: Y - 5 });
    }
  }

  render() {
    return (
      <>
        <p className="heading-timer">{this.state.time}</p>
        <button className="start" onClick={this.handleClick.bind(this)}>
          Start
        </button>
        <div
          className="ball"
          style={{ left: this.state.x, top: this.state.y }}
        ></div>
        <div className="hole"></div>
      </>
    );
  }
}

export default Timer;
