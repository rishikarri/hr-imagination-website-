import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';


// --------------------------------------Global Variables ---------------------------------------



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
  songCard: {
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    marginTop: 30,
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
  bigLetter: {
    fontSize: 120,
    color: 'green',    
  },
  bigLetterH: {
    fontSize: 120,
    color: 'purple',    
  },

  songTitle: {    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    fontSize: 30,
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
  aboutWithHatSpace: {
    marginTop: 100,
  }
}

const listenButtonContainerStyle = {

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const listenButtonStyle = {
  color: 'white',
  hoverColor: 'blue',
  fontSize: 32, 
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 160,
  width: 160,
  marginTop: 40,
  borderColor: 'black',
  borderWidth: 2,
  borderStyle: 'solid',
  borderRadius: 4,
  backgroundColor: 'black',

}



// Component to export 

export const About = () => {

    
    return (
      <div className='row'>
        <div className='row' style={styles.about} className='col-xs-12'> 
          <div className='col-xs-12' style={styles.musicText}> About </div>
        </div>

        <div className='row'> 
          <div className='col-xs-12' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className='col-xs-6' style={{height: 300, width: 300, marginTop: 30, borderRadius: '50%', }}>
              <img style={{borderWidth: 2, borderColor: 'red', borderRadius: 20,  borderStyle: 'solid', maxWidth: '100%'}}className='interests-image' src='../Images/rk_photo.png' /> 
            </div>
            <div className='col-xs-4'>
            <p style={{display: 'inlineBlock', fontSize: 40, color: 'green'}}><span style={styles.bigLetterH}>H</span>olden Sherer </p>
              <p><span style={{color: 'green', 'fontWeight': '300', fontStyle: 'italic', fontSize: 20, }}>Studio Sections:</span></p>
              <p style={{marginLeft: 20, }}> 
                <li style={{fontWeight: 800, fontSize: 14, color: 'green'}}>Piano</li>
                <li style={{fontWeight: 800, fontSize: 14, color: 'green'}}>Music Producer</li> 
                <li style={{fontWeight: 800, fontSize: 14, color: 'green'}}>Vocals </li>
              </p>

              <p><span style={{color: 'purple', 'fontWeight': '300', fontStyle: 'italic', fontSize: 20, }}>Book Recommendations:</span></p>
              <p style={{marginLeft: 20, }}> 
                <li style={{fontWeight: 800, fontSize: 14, color: 'purple'}}>Holden Book - Holden Sherer </li>
                <li style={{fontWeight: 800, fontSize: 14, color: 'purple'}}>Holden Book - Holden Sherer </li> 
                <li style={{fontWeight: 800, fontSize: 14, color: 'purple'}}>Holden Book - Holden Sherer </li>
              </p>
            </div>
          </div>
        </div>

        <div className='row' style={{marginTop: 280,}}> 
          <div className='col-xs-12' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className='col-xs-6' style={{height: 300, width: 300, borderRadius: '50%', }}>
              <img style={{maxWidth: '100%', borderRadius: 20, }}className='interests-image' src='../Images/rk_photo.png' /> 
            </div>
            <div className='col-xs-4'>
              <p style={{display: 'inlineBlock', fontSize: 40, color: 'purple'}}><span style={styles.bigLetter}>R</span>ishi Karri </p>
              <p><span style={{color: 'purple', 'fontWeight': '300', fontStyle: 'italic', fontSize: 20, }}>Studio Sections:</span></p>
              <p style={{marginLeft: 20, }}> 
                <li style={{fontWeight: 800, fontSize: 14, color: 'purple'}}>Guitar</li>
                <li style={{fontWeight: 800, fontSize: 14, color: 'purple'}}>Ukulele</li> 
                <li style={{fontWeight: 800, fontSize: 14, color: 'purple'}}>Vocals </li>
              </p>

              <p><span style={{color: 'green', 'fontWeight': '300', fontStyle: 'italic', fontSize: 20, }}>Book Recommendations:</span></p>
              <p style={{marginLeft: 20, }}> 
                <li style={{fontWeight: 800, fontSize: 14, color: 'green'}}>The Alchemist - Paulo Coelho </li>
                <li style={{fontWeight: 800, fontSize: 14, color: 'green'}} >Just Mercy - Bryan Stevenson </li> 
                <li style={{fontWeight: 800, fontSize: 14, color: 'green'}}>Diamond Boy - Michael Williams </li>
              </p>
            </div>
          </div>
        </div>
      </div>
    );        
};

