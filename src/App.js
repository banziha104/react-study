import React, { Component } from 'react';
import logo from './logo.svg';
import PhotoText from './example/PhotoText'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <PhotoText name="이영준" job="안드">
        </PhotoText>
      </div>
    );
  }
}

export default App;
