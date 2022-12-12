import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import LockIcon from '@mui/icons-material/Lock';
function PasswordVerification() {
  return (
    <>
    <Header>
    <h1>Spatch <img src="pop,logo.jpg" alt="logo"/></h1> 
    </Header>
    <Container>
      <Background></Background>
      <Content>
      <h2>Verification.</h2>
      <h6>We've sent a verication code to your detail:<br/>
      <h3>(234) 809 900 1234 or usmanjaguar@gmail.com</h3>
      </h6>
      <CodeInput>
        <IconWrap><LockIcon/></IconWrap><input type='number' placeholder='Enter code'/>
      </CodeInput>
      <Link to="/CreateNewPassword" style={{textDecoration: "none"}}>
        <Button>Confirm</Button>
      </Link>
            <Text>Didn't get the mail?</Text>

            <Text2>Verify that your email address is correct,<br/>or check your spam folder.</Text2>

            <Button2>Resend code</Button2>

            <Text3>Or RESTART</Text3>

      </Content>
    </Container>




    </>
  )
}

export default PasswordVerification

const Header = styled.div`
background-color: #f2f2f2;
padding-left: 10px;
overflow: hidden;
color: #7000f6;
@media (min-max: 1000px) {
    display: flex;
    justify-content: end;    
 }

     img {
        height: 22px;


     }  
`
const Container = styled.div`
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
padding-top: 0px;
padding-bottom: 0px;
background-color: #f2f2f2;

h2 {
    font-weight: bold;
    font-size: 30px;
}
h6 {
  font-weight: 400;
  color: #6E6E6E 
}
`
const Background = styled.div`
position: fixed;
background-color: #f2f2f2;
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

const Content = styled.div`
@media (min-width: 1000px) {
  display: flex-box;
  justify-content: center;
  align-items: center;
  overflow: hidden; 
   padding-left: 300px;
   padding-right: 300px;
}

`

const CodeInput = styled.div`
border-bottom: 2px solid #7000F6;
padding-bottom: 10px;
display: flex;
margin-top: 10px;


input{
    -webkit-appearance: none;
    outline: none;
    decoration: none;
    border: none;
    font-size: 20px;
    font-weight: bold;
    background-color:  #f2f2f2;
    
   
  }

`

const IconWrap = styled.div`
color: #6E6E6E;
margin-right: 20px;

`
const Button = styled.div`
background-color: #7000F6;
color: white;
height: 60px;
border-radius: 10px;
align-items: center;
display: flex;
justify-content: center;
font-weight: bold;
margin-top: 30px;
cursor: pointer;
`

const Text = styled.div`
padding-top: 10px;
color: #7000F6;
font-size: 13px;
font-weight: bold;
cursor: pointer;
` 
const Text2 = styled.div`
color: #6E6E6E;
padding-top: 10px;
`
const Button2= styled.div`
background-color: white;
color: #6E6E6E;
height: 60px;
border: 1px solid #6E6E6E;
border-radius: 10px;
align-items: center;
display: flex;
justify-content: center;
font-weight: bold;
margin-top: 30px;
cursor: pointer;

`
const Text3 = styled.div`
padding-top: 10px;
color: #7000F6;
font-weight: bold;
cursor: pointer;

`
