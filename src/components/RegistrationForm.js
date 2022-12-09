import React from 'react'
import styled from 'styled-components'
import WestIcon from '@mui/icons-material/West';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import 'react-phone-number-input/style.css'

function RegistrationForm() {
  
  
  return (
    <>
    <Header>
        <h1>Spatch<img src="pop,logo.jpg" alt="logo"/></h1>
    </Header>
    <Container>
      <Background></Background>
      <Content>
        <Arrow><WestIcon/></Arrow>
        <h2>Register with Spatch</h2>
        <span>Continue creating account with</span>
        <h6>usmanjaguar@gmail.com</h6>

        <LoginInput1>
            <PersonIconWrap><PersonIcon/></PersonIconWrap><input placeholder='Usman Jaguar'/>
        </LoginInput1>
        <LoginInput2>
            <LockIconWrap><VisibilityIconWrap><LockIcon /><input placeholder='Password'/></VisibilityIconWrap><VisibilityOffIcon /></LockIconWrap>
        </LoginInput2>
        <NameWrap>
                  <li><input placeholder='+234' name="First Name" type="text"></input></li>
                  <li><input placeholder='803 600 1234' type="text" name="Last Name"></input></li>
        </NameWrap>
        <Button type="submit">Create account</Button>
        <footer>By continuing, you agree to our <button>Privacy Policy</button> and our <button>Terms of Service</button></footer>
    </Content>
    </Container>
    </>
  )
}

export default RegistrationForm

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
    padding-bottom: 5px;
    margin-top: 0px;
    
}

h6 {
    margin-top: 5px;
}

footer{
  color: #6E6E6E;
  margin-top: 30px;
 }

 button {
  font-weight: bold;
  text-decoration: none;
  color: #7000f6;
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

const Header = styled.div`
background-color: #f2f2f2;
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
const Arrow = styled.div`
color: #7000F6;
cursor: pointer;
`
const LoginInput1 = styled.div`
border-bottom: 2px solid #7000F6;
padding-bottom: 10px;
display: flex;


input{
    -webkit-appearance: none;
    outline: none;
    decoration: none;
    border: none;
    font-size: 16px;
    color: #7000F6;
    font-weight: bold;
    background-color:  #f2f2f2;
    padding-left: 10px;
 
  }
`
const LoginInput2 = styled.div`
margin-top: 30px;
border-bottom: 2px solid #7000F6;
padding-bottom: 10px;

input{
  -webkit-appearance: none;
  outline: none;
  decoration: none;
  border: none;
  font-size: 16px;
  color: #7000F6;
  padding-left: 10px;
  font-weight: bold;
  background-color:  #f2f2f2;
  
  
  
}

`
const PersonIconWrap = styled.div`
color: #6E6E6E;

`
const LockIconWrap = styled.div`
color: #6E6E6E;
display: flex;
justify-content: space-between;
`
const VisibilityIconWrap = styled.div`
color: #6E6E6E;
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

const NameWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;
cursor: pointer;

li {
  list-style: none;
  border-bottom: 2px solid #7000f6;
  decoration: none;
  color: #6E6E6E;
  align-items: center;
  height: 50px;
  padding-right: 5px; 
  display: flex;

}

input {
  -webkit-appearance: none;
    outline: none;
    decoration: none;
    border: none;
    height: 20px;
    width: 120px;
    font-size: 20px;
    padding-left: 10px;  
    background-color: #f2f2f2;
}
`