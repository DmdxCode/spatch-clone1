import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Dashboard() {
  return (
    <>
    <Header>
      <h1>spatch<img src="pop,logo.jpg"  alt="logo"/></h1>

      <Link to="/Dashboard2" style={{textDecoration: "none", color: "white"}}>
        <ArrowForwardIosIcon fontSize='large' style={{color: "color", paddingRight: "10px", marginTop: "20px", cursor: "pointer"}}/>
      </Link>
    </Header>

    <Container>
    <Background></Background>
    <Text>
    <IconWrap><CheckCircleIcon fontSize="large"/></IconWrap>
    <h2>Succesful</h2>
    <h5>Welcome to spatch</h5>
    </Text>  
    </Container>
    </>
  )
}

export default Dashboard

const Header = styled.div`
display: flex;
justify-content: space-between;
overflow: hidden;
background-color: #7000F6;
color: white;
border: 10px solid #7000F6;
margin-left: 0px;


h1 {

  font-weight: bold;
  color: white; 

   img {
      height: 22px;


   }
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
color: white;
margin-top: 0px;
h2 {
    
    margin-bottom: 5px;
    display: flex;
    
    
}

h5 {
    font-weight: 400;
    margin-top: 8px;

}
`