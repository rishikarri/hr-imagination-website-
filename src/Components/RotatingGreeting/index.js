import React from "react";
import styled, { keyframes } from "styled-components";

// This component exports a landing page which displays a rotating "HR IMAGINATION" to the user 

// --------------------------------------Global Variables ---------------------------------------


// Use Styled Components package to build a styled div that rotates whatever string it is passed


// create rotation animation
const rotatingAnimation = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
`;

// Build RotatingLetter such that you can pass a color and a number of rotations as props and have the letter render dynamically
// Use the ternary operator as a conditional - if the user doesn't pass in a color or number of rotations, default to green and 2 respectively

const RotatingLetter = styled.div`
  display: inline-block;
  color: ${(props) => props.color ? props.color : "green"}; 
  font-size: 28px;
  height: 60px;
  width: 60px;  
  animation: ${(props) => props.numRotations ? `${rotatingAnimation} 1.4s linear ${props.numRotations}` : `${rotatingAnimation} 1.4s linear 2`};
`;

// styles for wrapper of text 

const styles = {
	greetingWrapper: {
		height: 600,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},  
};

// --------------------------------------Function To Export ---------------------------------------

const RotatingGreeter = () => (  
	<div className='row'> 
		<div style={styles.greetingWrapper} className='col-xs-12'> 
			<RotatingLetter numRotations={3} color="purple"> H </RotatingLetter>
			<RotatingLetter> R </RotatingLetter>
			<RotatingLetter> &nbsp; </RotatingLetter>
			<RotatingLetter numRotations={3} color="purple"> I </RotatingLetter>
			<RotatingLetter> m </RotatingLetter>
			<RotatingLetter numRotations={3} color="purple"> a </RotatingLetter>
			<RotatingLetter> g </RotatingLetter>
			<RotatingLetter numRotations={3} color="purple"> i </RotatingLetter>
			<RotatingLetter> n </RotatingLetter>
			<RotatingLetter numRotations={3} color="purple"> a </RotatingLetter>
			<RotatingLetter> t </RotatingLetter>
			<RotatingLetter numRotations={3} color="purple"> i </RotatingLetter>
			<RotatingLetter> o </RotatingLetter>
			<RotatingLetter numRotations={3} color="purple"> n </RotatingLetter>          
		</div>        
	</div>
);        


export default RotatingGreeter; 