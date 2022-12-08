import React from 'react'
import styled from 'styled-components'
import WestIcon from '@mui/icons-material/West'
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';

function CreateNewPassword() {
  return (
    <>
    <Header>
        <h1>spatch <img src= "./pop,logo.jpg" /> </h1>
    </Header>
    
    <Container>
      <Background></Background>
      <Content>
        <h1>Create new password.</h1>
        <h7>Set your new password and keep it safe.</h7>
        <LoginInput1>
        <LockIconWrap><LockIcon/></LockIconWrap><span> <input placeholder="New password" type="@" id="email" required/></span>
        </LoginInput1>

        <LogininInput2>
           <LockIconWrap><LockIcon/></LockIconWrap> <span><input placeholder="Confirm password" type="number text" id="password" required/></span>
        </LogininInput2>

        <Button>Continue</Button>
      </Content>
    </Container>
    </>
  )
}

export default CreateNewPassword

const Header = styled.div`
font-weight: bold;
background-color: #f2f2f2;
color: #7000f6;
overflow: hidden;

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

padding-top: 30px;
padding-bottom: 0px;

    
   }

   footer{
    color: #6E6E6E;
   }

   a {
    font-weight: bold;
    text-decoration: none;
   }
`
const Arrow = styled.div`
color: #7000F6;
cursor: pointer;

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

const LoginInput1 = styled.div`
margin-top: 50px;
display: flex;
border-bottom: 1px solid #6E6E6E;
padding-top: 20px;



input{
  -webkit-appearance: none;
  outline: none;
  decoration: none;
  border: none;
  color: #7000F6;
  font-weight: bold;
  font-size: 15px;
  padding-left: 10px;
  background-color: #f2f2f2;
  padding-bottom: 15px;
   
}


`
const LogininInput2 = styled(LoginInput1)`
margin-top: 30px;
input {
  
}


`
const SmartphoneIconWrap = styled.div`
color:#848484 ;
`
const LockIconWrap = styled.div`
color:#848484 ;

`
const EyeIcon = styled.div`
color:#848484 ;
cursor: pointer;
display: flex;
justify-content: end;
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