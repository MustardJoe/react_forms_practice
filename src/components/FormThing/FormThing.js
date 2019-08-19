import React, { Component } from 'react';

class FormThing extends Component {
  state = {
    inputText: '',
    outputText: '',
  }
  
  updateOutputText = () => {
    this.setState(state => {
      return {
        outputText: state.inputText
      };
    });
  }

  handleTextBox = event => {
    this.setState({ inputText: event.target.value });
    // this.setState(outputText): inputText;
    this.updateOutputText();
  }
  

  render() {
    const {
      inputText,
      outputText,
    } = this.state;

    return (
      <>
        <input name="textBox" value={inputText} onChange={this.handleTextBox} />

        <p>{outputText}</p>
        <p>Output text should be above/before here</p>
      </>
    );
  }
}

export default FormThing;
