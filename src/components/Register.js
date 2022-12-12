import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import WestIcon from '@mui/icons-material/West'
import EmailIcon from '@mui/icons-material/Email';

function Register() {
  return (
    <Body>
    <Header>
        <h1>spatch<img src="pop,logo.jpg"  alt="logo"/></h1>
    </Header>
    <Container>
      <Content>
        <Arrow><WestIcon /></Arrow>
        <h1>Register with Spatch.</h1>
        <h7>Enter your email to create an account</h7>
        <LoginInput1>
              <EmailIconWrap><EmailIcon/></EmailIconWrap> <span> <input placeholder="Email" type="text" id="@" required/></span>
        </LoginInput1>
        <Link to="/EmailVerification" style={{textDecoration: "none"}}>
          <Button>Continue</Button>
        </Link>
        <footer>By continuing, you agree to our <button>Privacy Policy</button> and our <button>Terms of Service</button></footer>
      </Content>
    </Container>
    
    </Body>
  )
}

export default Register
const Body = styled.div`
background-color: #F2F2F2;
height: 100vh;
overflow: hidden;
`

const Header = styled.div`
margin-top: 0px;
font-weight: bold;
padding-left: 10px;
color: #7000f6;
  
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


   h7{
      color: #6E6E6E;
   }
   h6{
    color: #6E6E6E;
    
   }

   footer{
    color: #6E6E6E;
   }

   button {
    border: none;
    background-color: f2f2f2;
    color: #7000f6;
    font-weight: bold;
    text-decoration: none;
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
const Arrow = styled.div`
color: #7000F6;


`
const LoginInput1 = styled.div`
margin-top: 50px;
display: flex;
border-bottom: 2px solid #7000F6;



  input{
    -webkit-appearance: none;
    outline: none;
    decoration: none;
    border: none;
    color: #7000F6;
    font-weight: bold;
    background-color: #F2F2F2;
    font-size: 20px;
    
    
  }

  span{
    margin-left: 10px;
  }

`
const EmailIconWrap = styled.div`
color:#848484 ;
`
const Button = styled.div`
background-color: #7000F6;
color: white;
cursor:pointer;
height: 60px;
border-radius: 10px;
align-items: center;
display: flex;
justify-content: center;
font-weight: bold;
margin-top: 50px;
`