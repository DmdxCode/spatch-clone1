import React from 'react'
import styled from 'styled-components'
import WestIcon from '@mui/icons-material/West'



function Welcome() {
  return (
  <>
     <Header>
       <h1>spatch<img src="./pop,logo.jpg"  alt="logo"/></h1>
     </Header>
    <Container>
      <Background></Background>
      <Content>
        <Arrow><WestIcon /></Arrow>
        <h2>Glad you made it here.</h2>
        <h7>Need to deliver your merchandise?<br/>
            <span>Let Spatch take care of that.</span>
        </h7>
        <ButtonTop> 
            Register with Spatch   
        </ButtonTop>
        <ButtonDown>Sign in to Spatch</ButtonDown>
      </Content>
    </Container>
    </>
  )
}

export default Welcome

const Header = styled.div`
background-color: #f2f2f2;
overflow: hidden;
@media (min-max: 1000px) {
    display: flex;
    justify-content: end;
    
   
 
     
 }

h1 {
    color: #7000F6;
    font-weight: bold;
   
    
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
  padding-top: 0px;
  padding-bottom: 15px; 
}

 h7 {
  padding-top: 0px;
  padding-bottom: 0px; 
    color: #6E6E6E;
   }


overflow: hidden;
background-color: #F2F2F2;
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
margin: 0px;


`
const ButtonTop = styled.div`


background-color: #7000F6;
color: white;
height: 60px;
border-radius: 10px;
align-items: center;
display: flex;
justify-content: center;
font-weight: bold;
cursor: pointer;
margin-top: 20px;
`


const ButtonDown =styled(ButtonTop)`
background-color: #E6E6E6;
color: #6E6E6E;
border: 1px solid;

`
