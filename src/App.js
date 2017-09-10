import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopNavBar from '../src/Components/TopNavBar/'
import styled, { keyframes } from 'styled-components';

const rotatingAnimation = keyframes`

    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
`;

// need to modularize code and add in music piece 
// need to add in eslint - use rallycoding example 

const RotatingLetter = styled.div`
  display: inline-block;
  color: ${(props) => props.color ? `solid 9px ${props.color}` : 'solid 9px red'}; 
  height: 60px;
  width: 60px;  
  animation: ${(props) => props.blinkRate ? `${rotatingAnimation} ${props.blinkRate} normal forwards` : `${rotatingAnimation} 1.5s linear 2`};
`;

// animation: ${(props) => props.blinkRate ? `${pulseAnimation} ${props.blinkRate} linear infinite` : `${pulseAnimation} 1.5s linear infinite`};

//App Component

const styles = {
  'hrImaginationWrapper' : {
    color: 'green',
    fontSize: 32, 
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 600,
  },
  musicText: {
    color: 'purple',
    fontSize: 32, 
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: 'rgba(230, 230, 230, 0.5)',
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.hrImaginationWrapper} className='col-xs-12'> 
          <div style={styles.hrImaginationText} className='col-xs-12'> 
            <RotatingLetter> H </RotatingLetter>
            <RotatingLetter> R </RotatingLetter>
            <RotatingLetter> &nbsp; </RotatingLetter>
            <RotatingLetter> i </RotatingLetter>
            <RotatingLetter> m </RotatingLetter>
            <RotatingLetter> a </RotatingLetter>
            <RotatingLetter> g </RotatingLetter>
            <RotatingLetter> i </RotatingLetter>
            <RotatingLetter> n </RotatingLetter>
            <RotatingLetter> a </RotatingLetter>
            <RotatingLetter> t </RotatingLetter>
            <RotatingLetter> i </RotatingLetter>
            <RotatingLetter> o </RotatingLetter>
            <RotatingLetter> n </RotatingLetter>          
          </div>
        </div>

        <div style={styles.musicText} className='col-xs-12'> 
          <div> music </div>
        </div>

        <div style={styles.songTitle} className='col-xs-12'> 
          <div> no cameras </div>
        </div>




      </div>
    );
  }
}

export default App;
