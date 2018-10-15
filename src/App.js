import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, TextInput } from './lib/form';

class App extends Component {
  render() {
    return (
      <Form
        id="formName"
      >
        <TextInput />
      </Form>

    );
  }
}

export default App;
