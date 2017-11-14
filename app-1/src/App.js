import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Semantic-UI-Turotial</h1>
        <Button animated="fade">
          <Button.Content visible>animated</Button.Content>
          <Button.Content hidden>
            <Icon name="eyedropper"/>
          </Button.Content>
        </Button>
        <Button
          content='Like'
          icon='heart'
          label={{ as: 'span', basic: true, content: '2,048' }}
          labelPosition='right'
        />
      </div>
    );
  }
}

export default App;
