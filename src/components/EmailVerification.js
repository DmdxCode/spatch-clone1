import React from 'react'
import styled from 'styled-components'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function EmailVerification() {
  return (
    <>
    <Header>
      <h1>spatch<img src="pop,logo.jpg"  alt="logo"/></h1>
    </Header>
    <Body>
      <Background></Background>
      <Text>
        <IconWrap><CheckCircleIcon fontSize="large"/></IconWrap>
        <h2>Check your email for verification.</h2>
        <span>We've sent a verification link to your email.</span>
      </Text>
    </Body>
    </>
  )
}

export default EmailVerification
const Body = styled.div`
@media (min-width: 700px) {
  display: flex-box;
  justify-content: center;
  align-items: center;

  overflow: hidden; 
  padding-left: 200px;
  padding-right: 200px; 
}

overflow: hidden;
padding-left: 30px;
padding-right: 30px;
padding-top: 200px;
padding-bottom: 0px;

`
const Background = styled.div`
position: fixed;
background-color: #7000f6;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: -1;


  
  img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-repeat: no-repeat;
      opacity: 0.5;
  }
`

const Header = styled.div`
overflow: hidden;
background-color: #7000F6;
color: white;
border: 10px solid #7000F6;
margin-left: 0px;
color: #f2f2f2;

     img {
        height: 22px;


     }  
`

const IconWrap = styled.div`
color: #00CC5B;
display: flex;
justify-content: center;

`
const Text = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #f2f2f2;
margin-top: 0px;
h2 {  
    margin-bottom: 10px;
    display: flex;   
}

h5 {
    margin-top: 11px;
}
`