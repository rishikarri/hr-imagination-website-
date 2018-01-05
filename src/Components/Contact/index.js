import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import FaPaperPlaneO from 'react-icons/lib/fa/paper-plane-o';
import FaAngellist from 'react-icons/lib/fa/hand-peace-o';



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


// Component to export 

export const Contact = () => {

    
    return (
      <div className='row'>
        <div className='row' style={{marginTop: 200,}} className='col-xs-12'> 
          <div className='col-xs-12' style={styles.musicText}> Contact </div>
        </div>

        <div className='row' style={{marginTop: 20}} className='col-xs-12'>           
          <div className='col-xs-12' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>            
            <div>
              <a style={{color: 'purple'}}              
              href='mailto:hrimagination414@gmail.com'> <FaPaperPlaneO height={180} width={180}/></a>              
            </div>          

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', 
              color: 'purple', fontSize: 30, marginTop: 50,
            }}>
            <a style={{color: 'purple'}}              
              href='mailto:hrimagination414@gmail.com'> <FaAngellist height={180} width={180} /></a>              
              
            </div>

          </div>

          

          <div className='col-xs-12'
          style={{display: 'flex', alignItems: 'center', justifyContent: 'center', 
          color: 'green', fontSize: 30, marginTop: 50,
          }}> <a style={{color: 'green'}} href='mailto:hrimagination414@gmail.com'>Email Us!</a> </div>


        </div>

          

        <div> 

        <div className='col-xs-12' style={{marginTop: 140, marginBottom: 20, textAlign: 'center'}}>Audio Content Copyright @ www.hrimagination.life. Website Copyright © www.rishikarri.com 2018. </div>



        </div>      
      </div>
    );        
};

