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
import WestIcon from '@mui/icons-material/West';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function History2() {
    const [burgerStatus, setburgerStatus] = useState(false);
  return (
    <>
    <TopIconWrap>
        <Mi onClick={() => setburgerStatus(true)}><MenuIcon fontSize='large'/></Mi>
        <WarningIcon>
          <Link to="/Help" style={{textDecoration: "none"}} >
            <ErrorOutlineRoundedIcon fontSize="large" style={{color: "7000f6"}}/>
          </Link>
        </WarningIcon>
          </TopIconWrap>
        <Container>
            <BackgroundImg></BackgroundImg>
 
            <BurgerNav show={burgerStatus}>
           
              
               <Container1> 
                <CustomClose onClick={() => setburgerStatus(false)}/>
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
                <Link to="/Dashboard2" style={{textDecoration: "none"}}>
                  <li><button><ArrowOutwardIcon/>  Request </button></li>
                </Link>
                <Link to="/Wallet" style={{textDecoration: "none"}}>
                  <li><button><WalletIcon/> Wallet</button></li>
                </Link>
                <Link to="/History" style={{textDecoration: "none"}}>
                  <HistoryFlexWrap>
                    <li><span><Inventory2Icon style={{color: "#7000f6"}}/></span> <button>History</button></li><WalletWrap><span>.</span></WalletWrap> 
                  </HistoryFlexWrap>
                </Link>
                <Link to="/AfterFilling" style={{textDecoration: "none"}}>
                  <li><button><AccountCircleTwoToneIcon /> Account</button></li>
                </Link>
                </List1>

                <List2>
                  <Link to="/" style={{textDecoration: "none"}}>
                    <li><button><LogoutIcon />  Logout</button></li>
                  </Link>
                  <Link to="/Help" style={{textDecoration: "none"}}>
                    <li><button><SupportAgentIcon/>  Contact</button></li>
                  </Link>
                </List2>
                <footer>spatch<img src="pop,logo.jpg" alt="icon"/></footer>
                
               </Container3>
            </BurgerNav>
            <Content>
            <Link to="/History" style={{textDecoration: "none"}}>
                <TopArrow><WestIcon/><span>#234ANMQ</span></TopArrow>
            </Link>
             <ContContainer1>
                <img src="pop,logo.jpg" alt="logo"/>
                <h5>Hi Fisayo,</h5>
                <h1>Thank you for <br/>choosing <span>Spatch</span></h1>
             </ContContainer1>
             <ContContainer2>
                <Table>
                <Tr1><span><tr>20 August 2021, 12:32pm</tr><tr>Surulere,Lagos</tr></span>
                <span><td>NGN 2,800.00</td><CardSpan>Card 4399<span><PanoramaFishEyeIcon fontSize="small"/></span></CardSpan></span></Tr1>

                <Tr2>
                    <span><tr>Distance</tr><tr>Pickup</tr><tr>Delivered</tr></span>
                    <span><td>15.2km</td><td>12:25pm</td><td>2:12pm</td></span>
                </Tr2>

                <Tr3>
                    <span><tr>item</tr> <td><tr>x5</tr>Bead</td></span>

                </Tr3> 
                <Tag>Same Day</Tag>
                <Flex>
                <Grid1>
                <span><img src="yellow icon (1) up.png" alt="icon"/><button>Picked From</button></span>
                <Tr><td>Fisayo Ahmed</td><h8>Yar'Adua Penthous...</h8></Tr>
                <span><img src="icon (5) down.png" alt="icon"/><b>Delivered To</b></span>
                <Tr><td>Uche Osifejo</td><h8>Yar'Adua Penthous...</h8></Tr>
                </Grid1>
                <CardSpan><img src="Spachbike3.jpg" alt="icon"/></CardSpan>
                </Flex>

                </Table>
             </ContContainer2>
             <ContContainer3>
             <H3><img src="pop,logo.jpg" alt="icon"/> spatch</H3>
            <WrapBtm>
            <span>Contact</span><IconWrap><TwitterIcon/><InstagramIcon/><LinkedInIcon/></IconWrap>
            </WrapBtm>
            4001A Plot C, Banana Island Road, Ikoyi, Lagos.<br /> (c) 2020 Spatch Logistic LLC
            <FtWrap>
            <span>Report to Support Team </span><ArrowForwardIcon/>
            </FtWrap>
             </ContContainer3>
            
              
            </Content> 

        </Container>
    </>

  )
}

export default History2

const Container = styled.div`
@media (min-width: 500px) {
  display: flex-box;
  justify-content: center;
  align-items: center;
  padding-top: 5vh; 
  overflow: hidden; 
  padding-left: 100px;
  padding-right: 100px; 
}


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
background-color: white;

`
const BurgerNav = styled.div`
position: fixed;
z-index: 10;
background: #f2f2f2;
list-style: none;
text-align: start;
height: 100vh;
opacity: 1;
width: 230px;
top: 0;
bottom: 0;
left: 0;
right: 0;
overlay: 100%;
transform: ${props => props.show? 'translateY(0)': 'translateY(100%)'};

@media(max-width: 100px) {
    display: none;
  }

`

const Container1 = styled.div`
padding-left: 20px;
background-color: #7000f6;
height: 25vh;
border: 1px solid #6001D1;
padding-top: px;




`
const ProfileImg = styled.div`
padding-top: 13px;
img {
  border-radius: 80px;
  height: 5% ;
  width: 20%; 
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
`

const Container2 = styled.div`
padding-left: 20px;
background-color: #6001D1;
height: 10vh;
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
padding-right: 50px;

`
const List1 = styled.div`
padding-top: 10px;
font-weight: bold;
padding-bottom: 20px;

li {
padding-top: 25px; 
 
}

button {
  border: none;
  background-color: #f2f2f2;
  font-weight: bold;
  text-decoration: none; 
  color: #6E6E6E;
}

span {
  color: #7000f6;
  padding-top: 15px;
}

`
const HistoryFlexWrap = styled.div`
display: flex;
align-items: center;

`
const WalletWrap = styled.div`
display: flex;
align-items: center;
justify-content: start;
span{
  font-size: 30px;
  font-weight: bold;
  padding-top: 15px;
  padding-left: 15px;
  bottom: 20px;
  color: #7000F6;
  text-shadow: 0 0 8px #6001D1, 0 0 8px #6001D1;
}

button {
    margin-left: 15px;
}

`
const List2 = styled.div`
padding-top: 25px;
font-weight: bold;
border-bottom: 1px solid #6E6E6E;
li {
   padding-top: 15px; 
   
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
@media (min-width: 1000px) {
  display: flex-box;
  justify-content: center;
  align-items: center;
  overflow: hidden; 
   padding-left: 300px;
   padding-right: 300px;
}
overflow: hidden;
`
const TopArrow = styled.div`
color: #7000f6;
display: flex;

span {
color: black;
font-weight: 800;
margin-left: 10px;
margin-bottom: 25px;
cusor: pointer;
}
`
const ContContainer1 = styled.div`
background-color: #F2F2F2;
padding-left: 20px;
padding-right: 20px;
padding-bottom: 10px;

img {
 padding-top: 20px;
 height: 30px;
}

span {
 color: #7000f6;
}
`
const ContContainer2 = styled.div`
background-color: white;
height: ; 
padding-left: 20px;
padding-right: 20px;
` 
const Table = styled.div`



span {
    display: flex;
   }
   button {
    border: none;
    background-color: white;
    font-weight: bold;
    color: #FFB947;
    font-size: 15px;
    margin-left: 5px;

    
   }
  b {
    color: #7000f6;
    font-size: 15px;
    margin-left: 5px;
  }
   tr {
     display:grid;
     gap:4px;
     font-size: 13px;
     top: 0;

   }
   
   td {
     font-weight: 700;
     
  
   }
  
  img {
    height: 20px;
    width: 20px;
  }
  
  h8 {
  
    padding-bottom: 15px;
  
  }
`
const Tr = styled.div`
    display:grid;
    gap:4px;
    font-size: 13px;
    top: 0;
    padding-left: 28px;
`

const Tr1 = styled.div`
border-bottom: 1px solid #6E6E6E;
padding-top: 15px;
span {
 display: flex;
  justify-content: space-between; 
  
  margin-bottom: 10px;
}

tr {
  
  font-size: 13px;
}

td {
    display: flex;
  font-weight: 700;
  font-size: 20px;
}

`
const Tr2 = styled.div`
padding-top: 15px;
border-bottom: 1px solid #6E6E6E;

span {
  display: flex;
  justify-content: space-between;
   
   margin-bottom: 10px;
 }
 button {
  color: #FFB947;
  font-size: 15px;
  
 }

 tr {
   
   font-size: 13px;
 }
 
 td {
   font-weight: 700;
   font-size: 20px;
   margin-top: 0px;

 }

img {
  height: 10%;
  width: 15%;
}

h8 {
  border-bottom: 1px solid #6E6E6E;
  padding-bottom: 15px;

}
`
const Tr3 = styled.div`
padding-top: 15px;
border-bottom: 1px solid #6E6E6E;
span {
    display: flex;
    justify-content: space-between;    
     margin-bottom: 10px;
   }

   tr {
    color: #7000f6;
    font-size: 13px;
    font-weight: 500;
    margin-right: 30px;
  }
  
  td {
    display: flex;
    font-weight: 700;
    font-size: 15px;
    margin-top: 0px;
 
  }
`
const CardSpan = styled.div`
display: flex;

span {
  align-items: center;
  margin-left: 5px;
  padding-left: 7px ;
  padding-right: 7px ;
  padding-top: 2px ;
  padding-bottom: 2px ;
  background-color: green;
  color: white;
  border-radius: 3px;

}

img {
  padding-top: 50px;
  
  height: 55px;
  width: 60px;
}
`
const Flex = styled.div`
display: flex;
justify-content: space-between;
`
const Grid1 = styled.div`

`

const ContContainer3 = styled.div`
background-color: #6001D2;

color: white;
padding-left: 20px;
padding-right: 20px;

`
const WrapBtm = styled.div`
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
font-size:  15px;
font-weight: none;
display: flex;
padding-top: 15px;

span {
  font-weight: bold; 
  margin-left: 5px;
}


`
const H3 = styled.div`
padding-top: 15px;
font-weight: bold;
font-size: 35px;
padding-bottom: 10px;
border-bottom: 1px solid #f2f2f2;
`
const Tag = styled.div`
display: flex;
justify-content: center;
color: white;
background-color: #7000f6;
height: 28px;
margin-left: 240px;
width: 87.67606353759766px;
border-radius: 0px 0px 7.04px 7.04px;

`




