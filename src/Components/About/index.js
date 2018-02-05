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
	descriptionText: {
		color: 'purple',
		fontSize: 32, 
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: 150,
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
					<div className='col-xs-12' style={styles.descriptionText}></div>
					

				<div className='row'> 
					<div className='col-xs-12' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
						<div className='col-xs-6' style={{height: 300, width: 300, marginTop: 30, borderRadius: '50%', }}>
							<img style={{ borderRadius: 20,  borderStyle: 'solid', maxWidth: '100%'}}className='interests-image' src='../Images/hs_photo.JPG' /> 
						</div>
						<div className='col-xs-4'>
						<p style={{display: 'inlineBlock', fontSize: 40, color: 'green'}}><span style={styles.bigLetterH}>H</span>olden Sherer </p>
							<p><span style={{color: 'green', 'fontWeight': '300', fontStyle: 'italic', fontSize: 20, }}>Studio Sections:</span></p>
							<p style={{marginLeft: 20, }}> 
								<li style={{fontWeight: 800, fontSize: 14, color: 'green'}}>Piano</li>                
								<li style={{fontWeight: 800, fontSize: 14, color: 'green'}}>Vocals (Hip-Hop, Rap) </li>
								<li style={{fontWeight: 800, fontSize: 14, color: 'green'}}>Lyric Writer</li> 
								<li style={{fontWeight: 800, fontSize: 14, color: 'green'}}>Audio Engineer</li>
								<li style={{fontWeight: 800, fontSize: 14, color: 'green'}}>Music Producer</li> 

							</p>

							<p><span style={{color: 'purple', 'fontWeight': '300', fontStyle: 'italic', fontSize: 20, }}>Book Recommendations:</span></p>
							<p style={{marginLeft: 20, }}> 
								<li style={{fontWeight: 800, fontSize: 14, color: 'purple'}}>The Bluest Eye - Toni Morrison </li>
								<li style={{fontWeight: 800, fontSize: 14, color: 'purple'}}>Open - Andre Agassi </li> 
								<li style={{fontWeight: 800, fontSize: 14, color: 'purple'}}>The Four Agreements - Don Miguel Ruiz </li>
							</p>

							<p><span style={{color: 'green', 'fontWeight': '300', fontStyle: 'italic', fontSize: 20, }}>Other Interests:</span></p>
							<p style={{marginLeft: 20, }}> 
								<li style={{fontWeight: 800, fontSize: 14, color: 'green'}}>Sociology</li>
								<li style={{fontWeight: 800, fontSize: 14, color: 'green'}}>Tennis</li> 
								<li style={{fontWeight: 800, fontSize: 14, color: 'green'}}>Milwaukee Bucks </li>
								<li style={{fontWeight: 800, fontSize: 14, color: 'green'}}>Graphic Design </li>
								<li style={{fontWeight: 800, fontSize: 14, color: 'green'}}>Traveling </li>
							</p>
						</div>
					</div>
				</div>

				<div className='row' style={{marginTop: 120,}}> 
					<div className='col-xs-12' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
						<div className='col-xs-6' style={{height: 300, width: 300, borderRadius: '50%', }}>
							<img style={{maxWidth: '100%', borderRadius: 20, }}className='interests-image' src='../Images/rk_photo2.jpeg' /> 
						</div>
						<div className='col-xs-4'>
							<p style={{display: 'inlineBlock', fontSize: 40, color: 'purple'}}><span style={styles.bigLetter}>R</span>ishi Karri </p>
							<p><span style={{color: 'purple', 'fontWeight': '300', fontStyle: 'italic', fontSize: 20, }}>Studio Sections:</span></p>
							<p style={{marginLeft: 20, }}> 
								<li style={{fontWeight: 800, fontSize: 14, color: 'purple'}}>Guitar</li>
								<li style={{fontWeight: 800, fontSize: 14, color: 'purple'}}>Ukulele</li> 
								<li style={{fontWeight: 800, fontSize: 14, color: 'purple'}}>Lyric Writer</li> 
								<li style={{fontWeight: 800, fontSize: 14, color: 'purple'}}>Vocals (R&B, Pop) </li>
								<li style={{fontWeight: 800, fontSize: 14, color: 'purple'}}>Manager </li>
							</p>

							<p><span style={{color: 'green', 'fontWeight': '300', fontStyle: 'italic', fontSize: 20, }}>Book Recommendations:</span></p>
							<p style={{marginLeft: 20, }}> 
								<li style={{fontWeight: 800, fontSize: 14, color: 'green'}}>The Alchemist - Paulo Coelho </li>
								<li style={{fontWeight: 800, fontSize: 14, color: 'green'}} >Just Mercy - Bryan Stevenson </li> 
								<li style={{fontWeight: 800, fontSize: 14, color: 'green'}}>Diamond Boy - Michael Williams </li>
							</p>

							<p><span style={{color: 'purple', 'fontWeight': '300', fontStyle: 'italic', fontSize: 20, }}>Other Interests:</span></p>
							<p style={{marginLeft: 20, }}> 
								<li style={{fontWeight: 800, fontSize: 14, color: 'purple'}}><a style={{color: 'purple'}} target="_blank" href="http://rishikarri.com">Software Development </a></li>
								<li style={{fontWeight: 800, fontSize: 14, color: 'purple'}}>Tennis</li> 
								<li style={{fontWeight: 800, fontSize: 14, color: 'purple'}}><a style={{color: 'purple'}} target="_blank" href="http://rishikarri.com/#interests">Reading </a></li>
								<li style={{fontWeight: 800, fontSize: 14, color: 'purple'}}>Spanish  </li>
								<li style={{fontWeight: 800, fontSize: 14, color: 'purple'}}>Traveling </li>
							</p>
						</div>
					</div>
				</div>

				<div className='col-xs-12' style={{color: 'green', fontSize: 20, marginTop: 140, textAlign: 'center'}}> 
					<div>We write under the stage-name HR Imagination for a few different reasons: </div>
					<div>&nbsp;</div>
						<ul>
							<div>Most of our songs are written about fictional characters that <br></br>are merely figments of “HR Imagination”.<br></br> Characters that are relatable, good-intentioned, flawed, human. </div>
							<div><div>&nbsp;</div>We started pursuing music as a group while rooming together at <br></br>college (University of Wisconsin - Madison). <br></br>School / work was prioritized over music. We threw<br></br> an hour here and an hour there into our makeshift studio. <br></br>These hours were treasured. These hours were viewed as time to break free from routine... <br></br>moments void of mundane decisions... a place where we could dream. <br />A place where we could imagine.</div>
							<div>&nbsp;</div>
							<div>"H" & "R" are the first initials of our names.</div>							
						</ul>
					<div style={{marginTop: 100,}}>We enjoy music from several genres and are not currently affiliated with a record label at this time.</div> 
				</div>


				</div>
			</div>
		);        
};

