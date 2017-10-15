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

const listenButtonStyle = {
  color: 'purple',
  fontSize: 32, 
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 160,
  width: 160,
  marginTop: 40,
  backgroundColor: 'rgba(230, 230, 230, 0.5)',

}

const listenButtonContainerStyle = {

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const createAudioFile = (hrefToUse) => {
  var audio = new Audio('audio_file.mp3');

  return ( 
    <div style={listenButtonContainerStyle}>
      <div> <button className="col-xs-12" style={listenButtonStyle}> <a href={hrefToUse} target="_blank">Listen</a> </button> </div>
    </div>
    )
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
          <div style={styles.summary} className='col-xs-12 col-md-6'> 
            <div>Inspiration</div>
            <blockquote> no cameras is inspired by “ride with me” / Nelly. We interpreted “ride with me” as as follows: Nelly is explaining how his life changed after he became rich and famous - he loves certain perks (like having a nice Mercedes) but overall doesn’t enjoy the fact that people are treating him differently because of his money. So we took this concept and told the story about a random man who is newly famous and is now getting treated differently (girls are chasing him for his money, his friends are fake etc.). Our character realizes that all he wants to do is flee away from the cameras, hangout with a simple girl, and grind in the studio until he can’t anymore.</blockquote>            
          </div>

          <div style={styles.sound} className='col-xs-12 col-md-6'> 
            {createAudioFile("https://soundcloud.com/user-44658808/no-cameras")}
          </div>
        </div>

        <div className='row'>
          <div style={styles.summary} className='col-xs-12 col-md-6'> 
            <div>Inspiration</div>
            <blockquote> switch is inspired by a parking ticket. There was a day when one of the members of HR Imagination got off of work, found a parking ticket on his car and it ruined his afternoon. He got a parking ticket, then got home and realized there was no beer left in the fridge :( and he realized that he was feeling quite agitated. It was then that he took a major step back and realized that he shouldn't be stressing about these trivial things. There are millions of people in the world who live on less than 3 dollars a day and here he was worrying about a parking ticket and no beer. He decided to "switch" up how he thought and focus on living a more compassionate life rather than spend time worrying about paltry problems.</blockquote>
          </div>

          <div style={styles.sound} className='col-xs-12 col-md-6'> 
            {createAudioFile("https://soundcloud.com/user-44658808/switch")}
          </div>
        </div>

        <div className='row'>
          <div style={styles.summary} className='col-xs-12 col-md-6'> 
            <div>Inspiration</div>
            <blockquote> wonderful conversation is inspired by the book wonder (R.J Palacio). Wonder is a book that tells a story about a kid who has a deformed face and is treated differently by the world because of it. What we took from the book is that at the end of the day, as cliche as it sounds, it's what is inside that matters. We, as humans, should get to know people with an open mind rather than myopically judge them based on how they look / dress. This song tells a story of a person who encounters a man with a deformity in a city. This man pulls the narrator aside and the two have a wonderful conversation.</blockquote>
          </div>

          <div style={styles.sound} className='col-xs-12 col-md-6'> 
            {createAudioFile("https://soundcloud.com/user-44658808/wonderful-conversation")}
          </div>
        </div>

        <div className='row'>
          <div style={styles.summary} className='col-xs-12 col-md-6'> 
            <div>Inspiration</div>
            <blockquote> confidence vs doubt is about one person with two competing emotions (confidence and doubt). The person realizes that these emotions appear to alternate without one remaining prominent over the other. ("There ain't no sunny days without any stormy weather"). Confidence says things like "let's escape town" (leave doubt behind) "on the first greyhound that you see". The person listens and is trying to calm down and focus on achieving his / her dreams - "just take your time now, let your emotions all fall on down, as you take the crown" ... but then doubt hops into the emotional backdrop "i've been running, running so so long", "mother nature always holds you down". Doubt is telling the person that he / she has been running after his / her dreams for so long and will probably run out of energy or time before he / she gets to them. The song continues as this hypothetical character wages war between these two strong feelings.</blockquote>
          </div>

          <div style={styles.sound} className='col-xs-12 col-md-6'> 
            
              {createAudioFile("https://soundcloud.com/user-44658808/confidence-vs-doubt")}
            
          </div>
        </div>

        




      </div>
    );
  }
}

export default App;
