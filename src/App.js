import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div>
        {/* Title */}
        <Title />
        {/* End title */}

        {/* Control */}
        <Control />
        {/* End Control */}

        {/* Form */}
        <Form />
        {/* End form */}

        {/* List */}
        <List />
        {/* End list */}
      </div>
    );
  }
}

export default App;
