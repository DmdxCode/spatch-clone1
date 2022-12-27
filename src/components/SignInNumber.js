import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import WestIcon from '@mui/icons-material/West'
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';

function SignInNumber() {
const [showPassword, setShowPassword] = useState(false);

const togglePassword = () => {
  setShowPassword(!showPassword)
}

  return (
    <>
    <Header>
        <h1>spatch <img src= "./pop,logo.jpg"  alt="logo"/> </h1>
    </Header>
    
    <Container>
      <Content>
        <Background></Background>
        <Link to="/" style={{textDecoration: "none"}}>
          <Arrow><WestIcon/></Arrow>
        </Link>
          <h1>Sign in to Spatch.</h1>
          <h7>please enter your sign in detail</h7>
          <LoginInput1>
            <SmartphoneIconWrap><SmartphoneIcon/></SmartphoneIconWrap> <span> <input placeholder="+234 915 182 5173 " type="number" id="email" required/></span>
          </LoginInput1>

          <LogininInput2>
            <LockIconWrap>
              <EyeIcon><LockIcon/> <span><input placeholder="Password" type={showPassword ? "text" : "password"} required/></span></EyeIcon>
              <VisibilityIcon onClick={togglePassword} />
            </LockIconWrap>
          </LogininInput2>
          <h6>Forgot password?</h6>
          <Link to="/Dashboard2" style={{textDecoration: "none"}}>
          <Button>Sign in Spatch</Button>
          </Link>
          <footer>By continuing, you agree to our <button>Privacy Policy</button><br/> and our <button>Terms of Service</button></footer>
      </Content>
    </Container>
    </>
  )
}

export default SignInNumber

const Header = styled.div`
font-weight: bold;
background-color: #f2f2f2;
color: #7000f6;
overflow: hidden;
padding-left: 10px;

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
    margin-top: 10px;
    display: flex;
    justify-content: end;
  }
    
   }

   footer{
    color: #6E6E6E;
   }

   button {
    border: none;
    background-color: #f2f2f2;
    color: #7000f6;
    font-weight: bold;
    text-decoration: none;
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

const Arrow = styled.div`
color: #7000F6;
cursor: pointer;

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
  font-size: 20px;
  padding-left: 10px;
  background-color: #f2f2f2;  
}
`

const LogininInput2 = styled.div`
margin-top: 30px;
border-bottom: 2px solid #7000F6;

input{
  -webkit-appearance: none;
  outline: none;
  decoration: none;
  border: none;
  color: #7000F6;
  font-weight: bold;
  font-size: 20px;
  padding-left: 10px;
  background-color: #f2f2f2;  
}
`
const SmartphoneIconWrap = styled.div`
color:#848484 ;
`
const LockIconWrap = styled.div`
color:#848484 ;
display: flex;
justify-content: space-between;
`
const EyeIcon = styled.div`
color:#848484 ;
cursor: pointer;
display: flex;

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
margin-top: 50px;
cursor: pointer;
`