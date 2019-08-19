import React, { Component } from 'react';

class FormThing extends Component {
  state = {
    inputText: 'wrap',
    outputText: 'hi',
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   /* eslint-disable no-console */
  //   console.log('this state:', this.state.inputText);
  //   this.setState.outputText = this.state.inputText;
  //   console.log('after: ', this.state);
  // }

  handleTextBox = event => {
    this.setState({ inputText: event.target.value });
  }

  render() {
    const {
      inputText,
      outputText,
    } = this.state;

    return (
      <>
        <h1>Dumb Quiz Practice - actually I think quizes are usefull, but please
          don`t tell anybody!
        </h1>
        <input name="textBox" value={this.state.inputText} onChange={this.handleTextBox} />

        <p>{outputText}</p>

      </>
    );
  }
}

/* eslint-disable no-console */
console.log(FormThing);

export default FormThing;
