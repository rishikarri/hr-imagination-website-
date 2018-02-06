import React from 'react';
import styled, { keyframes } from "styled-components";

// --------------------------------------Global Variables ---------------------------------------


// Use Styled Components package to build a styled div that rotates whatever letter is in it 
// Each RotatingLetter should be able to render 

const rotatingAnimation = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
`;

const RotatingLetter = styled.div`
  display: inline-block;
  color: ${(props) => props.color ? props.color : "green"}; 
  font-size: 28px;
  height: 60px;
  width: 60px;  
  animation: ${(props) => props.numRotations ? `${rotatingAnimation} 1.4s linear ${props.numRotations}` : `${rotatingAnimation} 1.4s linear 2`};
`;

const styles = {
	greetingWrapper: {
		height: 600,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},  
};

// function to export

export const RotatingGreeter = () => (  
	<div style={styles.hrImaginationWrapper} className='row'> 
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


