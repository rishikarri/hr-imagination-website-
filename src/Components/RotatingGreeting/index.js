import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

// --------------------------------------Global Variables ---------------------------------------

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
  animation: ${(props) => props.blinkRate ? `${rotatingAnimation} ${props.blinkRate} normal forwards` : `${rotatingAnimation} 2.4s linear 2`};
`;

const styles = {
  'hrImaginationWrapper' : {
             
  },
  hrImaginationText: {
    color: 'green',
    fontSize: 32,
    height: 600,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  },

  songTitle: {
    fontSize: 20,
    color: 'green',
    display: 'block', 
    textAlign: 'center',
    // display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  summary: {
    textAlign: 'center',
    padding: 0,
  },

  sound: {
    textAlign: 'center',
  },
}


// Component to export 

export const RotatingGreeter = () => {

    
    return (
        <div style={styles.hrImaginationWrapper} className='row'> 
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
    );        
};

