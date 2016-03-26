import React from 'react';
import ReactDom from 'react-dom';
import marked from 'marked';
require("./style.scss");


marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

var App = React.createClass({
  getInitialState() {
    return {raw_markup: ""};
  },
  changeHandler(value) {
    this.setState({
      raw_markup: value
    });
  },
  render() {
    return (
      <div className="app-container">
        <InputBox changeHandler={this.changeHandler}/>
        <OutputBox inputedMarkup={this.state.raw_markup}/>
      </div>
    );
  }
});

var InputBox = React.createClass({
  getInitialState() {
    return {value: 'Type your Github Markdown here!'};
  },
  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.changeHandler(event.target.value);
  },
  render() {
    return (
      <div className="input-box">
        <textarea id="markup-input" value={this.state.value} onChange={this.handleChange}></textarea>
      </div>
    );
  }
});

var OutputBox = React.createClass({
  render() {
    return (
      <div className="output-box" id="markup-output" dangerouslySetInnerHTML={{ __html: marked(this.props.inputedMarkup) }}></div>
    );
  }
});

module.exports = App;
