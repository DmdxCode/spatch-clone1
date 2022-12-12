import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import WestIcon from '@mui/icons-material/West'
import EmailIcon from '@mui/icons-material/Email';

function ForgotPassword() {
  return (
    <>
        <Header>
         <h1>Spatch <img src="pop,logo.jpg" alt="logo"/></h1> 
        </Header>
        <Container> 
          <Content>
          <Background></Background>           
            <Button5></Button5> 
            <Link to="/LoginEmail" style={{textDecoration: "none"}}>
              <Arrow><WestIcon/></Arrow>
            </Link>
                <h2>Reset password.</h2>
                <h4>Enter your email to receive a <br/>code to reset your password.</h4>
            <LoginInput1>
            <EmailIconWrap><EmailIcon/></EmailIconWrap> <span> <input placeholder="Email" type="text" id="@" required/></span>
            </LoginInput1>
            <Link to="/PasswordVerification" style={{textDecoration: "none"}}>
             <Button>Continue to reset</Button>
            </Link>
            <footer>By continuing, you agree to our <button>Privacy Policy</button><br/>and our <button>Terms of Service</button></footer>
           </Content> 

        </Container>

    </>

  )
}

export default ForgotPassword

const Header = styled.div`
background-color: #f2f2f2;
padding-left: 10px;
color: #7000f6;
overflow: hidden;
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

h4 {
    color: #6E6E6E;
    font-weight: 400;
}

footer{
   text-align: center;
    padding-top: 15px;
    color: #6E6E6E;
   }

   button {
    border: none;
    background-color: #f2f2f2;
    font-weight: bold;
    font-weight: bold;
    text-decoration: none;
    color: #7000F6;
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
const EmailIconWrap = styled.div`
color:#848484 ;
`
const Button = styled.div`
background-color: #7000F6;
margin-top: 60px;
color: white;
height: 60px;
border-radius: 10px;
align-items: center;
display: flex;
justify-content: center;
font-weight: bold;
cursor: pointer;
`
const Button2 = styled.div`
background-color: #f2f2f2;
height: 100px;
color: red;
`

const Button5 = styled(Button2)`
height: 80px;

`
