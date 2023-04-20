import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types'; // proptype 오류 검출

class ClassComponent extends React.Component {
  // state 오브젝트
  state = {
    counter: 0,
  };

  up = () => {
    //  this.counter = this.counter + 1;
    this.setState({ counter: this.state.counter + 1 });
  };

  down = () => {
    this.setState((value) => ({ counter: value.counter - 1 }));
  };

  //클래스형 컴포넌트 render() 함수 필수
  render() {
    // console.log(this.props);
    // this.props = { name: "홍길동", age : "13"}
    const { name, age } = this.props; //분해할당
    const { counter } = this.state;

    return (
      <div>
        <h1>Hello World, Class Component</h1>
        <h5>{name}</h5>
        <h5>{age}</h5>
        <h5>{this.state.counter}</h5>
        <button onClick={this.up}>숫자업</button>
        <button onClick={this.down}>숫자다운</button>
      </div>
    );
  }
}

ClassComponent.defaultProps = {
  name: 'abc',
  age: '11',
};

ClassComponent.propTypes = {
  // 소문자로 시작 propTypes
  name: PropTypes.string.isRequired, // 대문자 PropTypes
  age: PropTypes.string,
};

export default ClassComponent;
