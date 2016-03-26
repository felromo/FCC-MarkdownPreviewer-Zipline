import React from 'react';
import ReactDom from 'react-dom';

var App = React.createClass({
  render() {
    return (
      <div>
        <InputBox />
        <OutputBox />
      </div>
    );
  }
});

var InputBox = React.createClass({
  render() {
    return (
      <div className="input-box">
        <textarea id="markup-input"></textarea>
      </div>
    );
  }
});

var OutputBox = React.createClass({
  render() {
    return (
      <div className="output-box" id="markup-output">I am an output box!</div>
    );
  }
});

module.exports = App;
