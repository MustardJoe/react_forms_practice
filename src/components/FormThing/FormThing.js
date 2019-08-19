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
    // this.setState(outputText): inputText;
    this.updateOutputText();
  }

  // incrementCount = () => {
  //   this.setState(state => {
  //     return {
  //       count: state.count + 1
  //     };
  //   });
  // }

  updateOutputText = () => {
    this.setState(state => {
      return {
        outputText: state.inputText
      };
    });
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
        <input name="textBox" value={inputText} onChange={this.handleTextBox} />

        <p>{outputText}</p>
        <p>Output text should be above/before here</p>

      </>
    );
  }
}

/* eslint-disable no-console */
console.log(FormThing);

export default FormThing;
