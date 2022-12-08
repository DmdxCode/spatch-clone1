import React from 'react'
import styled from 'styled-components'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function WelcomeTemplate() {
  return (
    <>
        <MasterContainer>
          <Content>
            <Background></Background>
            <Container1>
                <Header>
                    <img src="pop,logo.jpg" alt="logo"/>
                    <h6>September 04, 2021</h6>
                </Header>
                <TextWrap>
                    <h7>Welcome Fisayo,</h7>
                    <h2>Thank you for<br/>choosing <span>Spatch</span></h2>
                </TextWrap>
            </Container1>
            <Container2>
            <Button><span>Verify your email</span><ArrowWrap><ArrowForwardIcon fontSize="large"/></ArrowWrap></Button> 
            <TextWrap2>
                <p>To continue with Spatch verify your email by clicking the button above,
                    This will let us send you receipt for any transaction.
                </p>
                <h4>if you didn't sign up report here</h4>
            </TextWrap2>
            </Container2>
            <Container3>
            <H3><img src="pop,logo.jpg" />spatch</H3>
            <Wrap>
            <span>Contact</span><IconWrap><TwitterIcon/><InstagramIcon/><LinkedInIcon/></IconWrap>
            </Wrap>
            4001A Plot C, Banana Island Road, Ikoyi, Lagos.<br /> (c) 2020 Spatch Logistic LLC
            <FtWrap>
            <footer>Any concern? <a>Report to Support Team </a><ArrowForwardIcon/></footer>
            </FtWrap>
            </Container3>
            </Content>
        </MasterContainer>
    </>
  )
}
export default WelcomeTemplate

const MasterContainer = styled.div`
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

const Container1 = styled.div`
background-color: #F2F2F2;
padding-bottom: 45px;
`
const Header = styled.div`
display: flex;
justify-content: space-between;
padding-left: 30px;
padding-right: 30px;
   img{
    padding-top: 40px;
    height: 70px;
    padding-bottom: 30px;
   }
   h6 {
    padding-top: 50px;

   }
`
const TextWrap = styled.div`
padding-left: 30px;
padding-right: 30px;
font-size: 20px;

h2 {
   padding-top: 2px;  
}

span {
    color: #7000F6;
}
`
const Container2 = styled.div`
padding-left: 30px;
padding-right: 30px;
background: white;
height: 30vh;
padding-top: 15px;



p {
padding-top: 10px;
}


`
const Button = styled.div`
background-color: #7000F6;
color: white;
height: 60px;
align-items: center;
display: flex;
justify-content: center;
border-radius: 10px;
font-weight: bold;
margin-top: 10px;
cursor: pointer;
  span {
    align-items: center;
    display: flex;
    justify-content: center;
   
  }
`
const ArrowWrap = styled.div`
    align-items: center;
    display: flex;
    justify-content: center
 
`
const TextWrap2 = styled.div`
p {
    display: flex;
    justify-content: center;
}

h4 {
    display: flex;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
    margin-bottom: 8px;
    color: #7000F6;
    cursor: pointer;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
}
border-bottom: 1px solid #7000f6;

`
const Container3 = styled.div`
padding-left: 30px;
padding-right: 30px;
background-color: #7000F6;
color: #F2F2F2;
padding-bottom: 10px;



h1 {


border-bottom: 3px solid red;
}
span {

}

img {
    height: 22px;
 }

span {
    display: flex;
    justify-content: end;
    
}

footer {
display: flex;
justify-content: space-between;
padding-top: 20px;
}

a {
   font-weight: bold;
}

`
const Wrap = styled.div`
display: flex;
justify-content: space-between;
padding-top: 15px;

 h3 {


 }


`

const IconWrap = styled.div`


`
const FtIcon = styled.div`

`
const FtWrap = styled.div`
padding-bottom: 15px;

`
const H3 = styled.div`
padding-top: 10px;
font-weight: bold;
font-size: 35px;
padding-bottom: 10px;
border-bottom: 1px solid #f2f2f2;

`
const EmailIconWrap = styled.div`
display: flex;
padding-left: 30px;
padding-right: 30px;
span {
    color: #7000f6;
    padding-left: 10px;
    font-weight: bold;
}
`


  