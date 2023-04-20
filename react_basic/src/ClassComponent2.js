import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types'; // proptype 오류 검출

class ClassComponent2 extends React.Component {
  // state 오브젝트
  state = {
    counter: 0,
  };

  up = () => {
    this.setState({ counter: this.state.counter + 2 });
  };

  down = () => {
    this.setState((value) => ({ counter: value.counter - 1 }));
  };
  render() {
    const { counter } = this.state;

    return (
      <div>
        <h5>{this.state.counter}</h5>
        <button onClick={this.up}>+2</button>
        <button onClick={this.down}>-1</button>
      </div>
    );
  }
}

export default ClassComponent2;
