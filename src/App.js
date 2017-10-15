import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopNavBar from '../src/Components/TopNavBar/'
import styled, { keyframes } from 'styled-components';
import { RotatingGreeter } from '../src/Components/RotatingGreeting/';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../no'

const rotatingAnimation = keyframes`

    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
`;

// need to modularize code and add in music piece 
// need to add in eslint - use rallycoding example 
//also should add react helmet 


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

class App extends Component {
  render() {
    return (
      <div className="App">        

        <RotatingGreeter />

        <div className='row' style={styles.musicText}> 
          <div className='col-xs-12'> music </div>          
        </div>

        <div className='row' style={styles.songTitle} className='col-xs-12'> 
          <div className='col-xs-12'> no cameras </div>
        </div>

        <div className='row'>
          <div style={styles.summary} className='col-xs-6'> 
            <div>Inspiration</div>
            <blockquote> no cameras is inspired by “ride with me” / Nelly. We interpreted “ride with me” as as follows: Nelly is explaining how his life changed after he became rich and famous - he loves certain perks (like having a nice Mercedes) but overall doesn’t enjoy the fact that people are treating him differently because of his money. So we took this concept and told the story about a random man who is newly famous and is now getting treated differently (girls are chasing him for his money, his friends are fake etc.). Our character realizes that all he wants to do is flee away from the cameras, hangout with a simple girl, and grind in the studio until he can’t anymore.</blockquote>
          </div>

          <div style={styles.sound} className='col-xs-6'> 
            <div>Sound</div>
          </div>
        </div>

        <div className='row'>
          <div style={styles.summary} className='col-xs-6'> 
            <div>Inspiration</div>
            <blockquote> Switch is inspired by a parking ticket. There was a day when one of the members of HR Imagination got off of work, found a parking ticket on his car and it ruined his afternoon. He got a parking ticket, then got home and realized there was no beer left in the fridge :( and he realized that he was feeling quite agitated. It was then that he took a major step back and realized that he shouldn't be stressing about these trivial things. There are millions of people in the world who live on less than 3 dollars a day and here he was worrying about a parking ticket and no beer. He decided to "switch" up how he thought and focus on living a more compassionate life rather than spend time worrying about paltry problems.</blockquote>
          </div>

          <div style={styles.sound} className='col-xs-6'> 
            <div>Sound</div>
          </div>
        </div>

        




      </div>
    );
  }
}

export default App;
