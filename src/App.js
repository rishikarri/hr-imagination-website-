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

const RotatingLetter = styled.div`
  display: inline-block;
  color: ${(props) => props.color ? `solid 9px ${props.color}` : 'solid 9px red'}; 
  height: 60px;
  width: 60px;  
  animation: ${(props) => props.blinkRate ? `${rotatingAnimation} ${props.blinkRate} linear infinite` : `${rotatingAnimation} 1.5s linear infinite`};
`;

// animation: ${(props) => props.blinkRate ? `${pulseAnimation} ${props.blinkRate} linear infinite` : `${pulseAnimation} 1.5s linear infinite`};





//App Component

const styles = {
  'hrImaginationWrapper' : {
    color: 'green',
    fontSize: 32, 
    textAlign: 'center'
  },
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.hrImaginationWrapper} className='col-xs-12'> 
          <div style={styles.hrImaginationText} className='col-xs-12'> HR Imagination </div>
          <RotatingLetter> H </RotatingLetter>

        </div>
      </div>
    );
  }
}

export default App;
