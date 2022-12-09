import React from 'react'
import styled from 'styled-components'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SecurityTwoToneIcon from '@mui/icons-material/SecurityTwoTone';

function ResetPasswordEmail() {
  return (
    <>
        <MasterContainer>
            <Content>
            <Container1>
                <Header>
                    <img src="pop,logo.jpg" alt="logo"/>
                    <h6>September 04, 2021</h6>
                </Header>
                <TextWrap>
                    <h7>Welcome Fisayo,</h7>
                    <Wrap1>
                    <h2>Reset your<br/><span>Spatch</span> password</h2><SecurityIcon><SecurityTwoToneIcon fontSize="large"/></SecurityIcon>
                    </Wrap1>
                </TextWrap>
                <EmailIconWrap><EmailOutlinedIcon/><span>fisayoahmad@gmail.com</span></EmailIconWrap>
            </Container1>
            <Container2>
            <TextWrap2>
                <p>Your reset code is password.</p>
                <span>068002</span>
                <h4>if you didn't request this report here</h4>
            </TextWrap2>
            </Container2>
            <Container3>
            <H3><img src="pop,logo.jpg" alt="icon"/> spatch</H3>
            <Wrap>
            <span>Contact</span><IconWrap><TwitterIcon/><InstagramIcon/><LinkedInIcon/></IconWrap>
            </Wrap>
            4001A Plot C, Banana Island Road, Ikoyi, Lagos.<br /> (c) 2020 Spatch Logistic LLC
            <FtWrap>
            <footer>Any concern? <button>Report to Support Team </button><ArrowForwardIcon/></footer>
            </FtWrap>
            </Container3>
        </Content>
        </MasterContainer>
    </>
  )
}
export default ResetPasswordEmail

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
padding-left: 25px;
padding-right: 25px;
background: white;
height: 30vh;
padding-top: 30px;





p {
padding-top: 10px;
display: flex;
justify-content: center;
}

span {
    display: flex;
    justify-content: center;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 60px;
}

`

const TextWrap2 = styled.div`


h4 {
     
    text-decoration: none;
    text-transform: uppercase;
    margin-bottom: 8px;
    color: #7000F6;
    cursor: pointer;
    display: flex;
    justify-content: center;
}
border-bottom: 1px solid #7000F6;
`
const Container3 = styled.div`
padding-left: 30px;
padding-right: 30px;
height: 30vh;
background-color: #7000F6;
color: #F2F2F2;
padding-top: 25px;


h1 {


border-bottom: 1px solid #F2F2F2;
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
    padding-top: 20px;
}

button {
   font-weight: bold;
   cursor: pointer;
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

const FtWrap = styled.div`
padding-bottom: 15px;

`
const H3 = styled.div`
padding-top: 15px;
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
const Wrap1 = styled.div`
display: flex;
justify-content: space-between;
`
const SecurityIcon = styled.div`
color: #7000f6;
padding-top: 70px;
`

  