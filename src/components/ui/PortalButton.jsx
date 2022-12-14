import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
	width: 25%;
`

const StyledButton = styled.button`
	width: ${props => props.className === 'primary-button' ? '197px' : '197px'};
	height: ${props => props.className === 'primary-button' ? '48px' : '48px'};
	padding: ${props => props.className === 'primary-button' ? '0' : '1px'};
	background-color: ${props => props.className === 'primary-button' ? '#A86EFF' : "rgba(0,0,0,.1)"};
	border: ${props => props.className === 'primary-button' ? 'none' : '.2rem solid #A86EFF'};
	border-radius: 30px;
	font-family: 'Manrope';
    font-style: normal;
	font-weight: ${props => props.className === 'primary-button' ? '700' : '300' };
	font-size: ${props => props.className === 'primary-button' ? '1.7rem' : '1.3rem' };
	line-height: ${props => props.className === 'primary-button' ? '2.2rem' : '1.8rem' };
	color: ${props => props.className === 'primary-button' ? '#FFFFFF' : '#A86EFF' }
`
const PortalButton = (props) => {
  return (
	  <div>
		<Wrapper>
			<StyledButton className={props.className} onClick={props.handleClick}>
				{
					props.img ?
					<div>
						<img src={props.img} width="29px" height="29px"/>
						{props.name}
					</div>
					: <p style={{marginTop:"5px"}}>{props.name}</p>
				}
			</StyledButton>
		</Wrapper>
	  </div>
  )
}

export { PortalButton }
