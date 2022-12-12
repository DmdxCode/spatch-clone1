import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import WalletIcon from '@mui/icons-material/Wallet';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LogoutIcon from '@mui/icons-material/Logout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

function Dashboard1() {
    const [burgerStatus, setburgerStatus] = useState(false);
  return (
    <>
    <TopIconWrap>
        <Mi onClick={() => setburgerStatus(true)}><MenuIcon fontSize='large'/></Mi><WarningIcon><ErrorOutlineRoundedIcon fontSize="large"/></WarningIcon>
          </TopIconWrap>
        <Container>
            <BackgroundImg><img src="Spatchmap.jpg" alt="background"/></BackgroundImg>

            <BurgerNav show={burgerStatus}>
           
              
               <Container1> 
                <CustomClose onClick={() => setburgerStatus(false)} style={{paddingTop: "10px"}}/>
                <ul key={burgerStatus.id}></ul>
                <ProfileImg>
                  <img src="Profilepic.jpeg" alt="profile"/>
                </ProfileImg>
                <Text1>Elijah Solomon</Text1>
                <Text2>View Profile</Text2>
               </Container1>

               <Container2>
                <BalanceText>Wallet Balance</BalanceText>
              <Wrap>
                <WalletBalance>N12,000</WalletBalance>
                <Button1>
                  <PlusIcon><img src="wallet add icon-modified.png" alt="add icon"/></PlusIcon>
                  </Button1>

                
              </Wrap>
               </Container2>
               <Container3>
                <List1>
                <Link to="/RequestAsSender" style={{textDecoration: "none"}}>
                  <RequestWrap>
                    <li><button><ArrowOutwardIcon style={{color: '#7000f6'}} />  Request </button></li><span>.</span>
                  </RequestWrap>
                </Link>
                <Link to="/Wallet" style={{textDecoration: "none"}}>
                  <li><button><WalletIcon />  Wallet</button></li>
                </Link>
                <Link to="/History" style={{textDecoration: "none"}}>
                  <li><button><Inventory2Icon/> History</button></li>
  	            </Link>
                <Link to="/AfterFilling" style={{textDecoration: "none"}}>
                  <li><button><AccountCircleTwoToneIcon /> Account</button></li>
                </Link>
                </List1>

                <List2>
                <li><button><LogoutIcon />  Logout</button></li>
                <li><button><SupportAgentIcon/>  Contact</button></li>
                </List2>
                <footer>spatch<img src="pop,logo.jpg" alt="icon"/></footer>
                
               </Container3>
            </BurgerNav>
            <Content>
              <BtnTopText>Would you like to request?</BtnTopText>
              
              <BtnWrap1>
              <Link to="/Sameday" style={{textDecoration: "none"}}>
                <Btn1><span><Img><img src="pop,logo.jpg" alt="icon"/></Img>Same Day</span></Btn1>
              </Link>
                <Btn2><span><Img><img src="pop,logo.jpg" alt="icon"/></Img>Express</span></Btn2>
              </BtnWrap1>

              <BtnWrap2>
                <Btn3><span><Img><img src="pop,logo.jpg" alt="icon"/></Img>Interstate</span></Btn3>
                <Btn4><span><Img><img src="pop,logo.jpg" alt="icon"/></Img>International</span></Btn4>
              </BtnWrap2>
              
            </Content> 
        </Container>
      <BottomAddIcon><img src="add icon img-modified (1).png" alt="icon"/></BottomAddIcon>
  
    </>

  )
}

export default Dashboard1

const Container = styled.div`
@media (min-width: 700px) {
  display: flex-box;
  justify-content: center;
  align-items: center;

  
  padding-left: 200px;
  padding-right: 200px; 
}

overflow: hidden; 
padding-left: 10px;
padding-right: 10px;
padding-top: 0px;
padding-bottom: 0px;

  footer {
    padding-top: 18px;
    color: #7000f6;
    font-weight: bold;
    font-size: 25px;
  }
  
  
       img {
          height: 22px;
  
  
       }

`

const BackgroundImg = styled.div`
position: fixed;
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
      opacity: 0.3;
  }

`
const BurgerNav = styled.div`


position: fixed;
z-index: 1;
background: #f2f2f2;
list-style: none;
text-align: start;

opacity: 2;
width: 230px;
overflow: hidden;
bottom: 0;
top: 0;
left: 0;
right: 0;
transform: ${props => props.show? 'translateY(0)': 'translateY(100%)'};

@media(max-width: 100px) {
    display: none;
  }

`

const Container1 = styled.div`
padding-left: 20px;
background-color: #7000f6;
border: 1px solid #6001D1;
`
const ProfileImg = styled.div`
padding-top: 10px;
img {
  border-radius: 80px;
  height: 40px ;
  width: 40px; 
}
`

const Text1 = styled.div`
color: white;
font-weight: bold;
padding-top: 3px;

`
const Text2 = styled.div`
color: white;
padding-top: 3px;
padding-bottom: 5px;
`

const Container2 = styled.div`
padding-left: 20px;
background-color: #6001D1;
border: 1px solid #6001D1;
`
const BalanceText = styled.div`
color: white;
font-weight: 25px;
` 
const Wrap = styled.div`
display: flex;
justify-content: start;
`

const WalletBalance = styled.div`
color: white;
font-weight: bold;
font-size: 35px;
`
const PlusIcon = styled.div`
margin-top: 10px;
margin-left: 20px;
cursor: pointer;
img {

  height: 150% ;
  width: 80%; 
}


`

const Button1 = styled.div`




`

const Container3 = styled.div`
padding-left: 20px;
padding-right: 20px;

`
const List1 = styled.div`
padding-top: 10px;
font-weight: bold;
padding-bottom: 20px;

li {
padding-top: 15px; 

}

button {
  border: none;
  background-color: #f2f2f2;
  font-weight: bold;
  text-decoration: none; 
  color: #6E6E6E;
}


`
const RequestWrap = styled.div`
display: flex;
align-items: center;
span{
  font-size: 30px;
  font-weight: bold;
  padding-top: 10px;
  padding-left: 15px;
  bottom: 20px;
  color: #7000F6;
  text-shadow: 0 0 8px #6001D1, 0 0 8px #6001D1;
}

`
const List2 = styled.div`

padding-top: 15px;
font-weight: bold;
border-bottom: 1px solid #6E6E6E;
li {
   padding-top: 10px; 
   
   border-top: 1px solid #6E6E6E;
   padding-bottom: 15px;
   button {
    border: none;
    background-color: #f2f2f2;
    font-weight: bold;
    text-decoration: none; 
    color: #6E6E6E;
    
  }
}       
`
const CustomClose = styled(CloseIcon)`
color: white;
padding-top: 10px;
cursor: pointer;
`
const TopIconWrap = styled.div`
@media (min-width: 350px){
  display: flex;
  justify-content: space-between; 
}
`

const Mi = styled.div`
cursor: pointer;
padding-top: 8px;
padding-left: 20px;
color: #7000f6;
`
const WarningIcon = styled.div`
cursor: pointer;
display: flex;
padding-top: 8px;
padding-right: 20px; 
color: #7000f6;
`

const Content = styled.div`
@media (max-width: 1000px) {
  display: flex-box;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20vh;
}
`
const BtnWrap1 = styled.div`
display: flex;
margin-top: 20px;

`
const Btn1 = styled.div`
margin-right: 13px;
height: 150px;
background-color: #7000f6;
width: 300px;
border-radius: 20px;
cursor: pointer;

img {
  height: 30px;
  width: 30px;
  padding-top: 20px;
  padding-right: 10px;
  margin-bottom: 60px;
}

span {
  font-weight: bold;
  color: white;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
}
`
const Btn2 = styled.div`

height: 150px;
background-color: #15B1E1;
width: 150px;
border-radius: 20px;
cursor: pointer;

img {
  height: 30px;
  width: 30px;
  padding-top: 20px;
  padding-right: 10px;
  margin-bottom: 60px;
}

span {
  font-weight: bold;
  color: white;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
}
`
const BtnWrap2 = styled.div`
display: flex;
padding-top: 15px;
margin-bottom: 30px;

`

const Btn3 = styled.div`
height: 150px;
background-color: #02C964;
width: 150px;
border-radius: 20px;
margin-right: 13px;
cursor: pointer;

img {
  height: 30px;
  width: 30px;
  padding-top: 20px;
  padding-right: 10px;
  margin-bottom: 60px;
}

span {
  font-weight: bold;
  color: white;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
}
`
const Btn4 = styled.div`
height: 150px;
background-color: #FFB947;
width: 300px;
border-radius: 20px;
cursor: pointer;



img {
  height: 30px;
  width: 30px;
  padding-top: 20px;
  padding-right: 10px;
  margin-bottom: 60px;
}

span {
  font-weight: bold;
  color: white;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
}
`

const BtnTopText = styled.div`
color: black;
font-weight: bold;
`
const BottomAddIcon = styled.div`

  display: flex;
  justify-content: end;
  padding-right: 20px; 
  img{   
  height: 50% ;
  width: 15%;
  
  }

margin-top: 50px;
img{
  
  margin-right: 20px;
  -moz-box-shadow: 0px 5px 5px #fff;
  -webkit-box-shadow: 0px 5px 5px #fff;
  box-shadow: 0px 10px 35px #7000f6;
  -moz-border-radius:50px;
  -webkit-border-radius:190px;
  cursor: pointer;
  height: 10%;
  width: 7%;


}
`
const Img = styled.div`
display: flex;
justify-content: end;
`