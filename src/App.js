import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopNavBar from '../src/Components/TopNavBar/'

const styles = {
  'hrImaginationWrapper' : {
    color: 'green',
    fontSize: 32, 
    textAlign: 'center'
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.hrImaginationWrapper} className='col-xs-12'> HR Imagination </div>
      </div>
    );
  }
}

export default App;
