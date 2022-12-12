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
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function History() {
    const [burgerStatus, setburgerStatus] = useState(false);
  return (
    <>
    <TopIconWrap>
        <Mi onClick={() => setburgerStatus(true)}><MenuIcon fontSize='large'/></Mi><WarningIcon><ErrorOutlineRoundedIcon fontSize="large"/></WarningIcon>
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
                  <li><button><LogoutIcon />  Logout</button></li>
                  <Link to="/Help" style={{textDecoration: "none"}}>
                    <li><button><SupportAgentIcon/>  Contact</button></li>
                  </Link>
                </List2>
                <footer>spatch<img src="pop,logo.jpg" alt="icon"/></footer>
                
               </Container3>
            </BurgerNav>
            <Content>
            <Link to="/History" style={{textDecoration: "none"}}>
              <TopArrow><WestIcon/><span>History</span></TopArrow>
              <BtnTopText><h3>These are your order history<br/><h6>Confirm your current password</h6></h3> </BtnTopText>
            </Link>
              <Table>
                <Tr1><span><tr>20 August 2021, 12:32pm</tr><tr>Surulere,Lagos</tr></span>
                <span><td>NGN 2,800.00</td><CardSpan>Card 4399<span><PanoramaFishEyeIcon fontSize="small"/></span></CardSpan></span></Tr1>
                <Flex>
                <Grid1>
                <span><img src="yellow icon (1) up.png" alt="icon"/><button>Picked From</button></span>
                <Tr2><td>Fisayo Ahmed</td><h8>Yar'Adua Penthous...</h8></Tr2>
                <span><img src="icon (5) down.png" alt="icon"/><b>Delivered To</b></span>
                <Tr><td>Uche Osifejo</td><h8>Yar'Adua Penthous...</h8></Tr>
                </Grid1>
                <CardSpan><img src="Spachbike3.jpg" alt="icon"/></CardSpan>
                </Flex>
                <Link to="/History2" style={{textDecoration: "none"}}>
                  <Reciept><label>View reciept detail<TrendingFlatIcon fontSize="small" style={{marginTop: "3px", marginLeft: "2px"}}/></label><RemoveCircleOutlineIcon fontSize="small" style={{color: " #6E6E6E"}}/></Reciept>
                </Link>
              </Table>
              
              <RecieptHistory>
                <Tr1>
                  <span><tr>20 August 2021, 12:32pm</tr><tr>Surulere,Lagos</tr></span>
                  <span><td>NGN 0.00 <button>Canceled</button></td><CardSpan>Card 4399<span><PanoramaFishEyeIcon fontSize="small"/></span></CardSpan></span>
                </Tr1>

                <Tr3>
                  <span><tr>20 August 2021, 12:32pm</tr><tr>Surulere,Lagos</tr></span>
                  <span><td>NGN 2,800.00</td><CardSpan>Card 4399<span><PanoramaFishEyeIcon fontSize="small"/></span></CardSpan></span>
                </Tr3>

              <Tr1>
                <span><tr>20 August 2021, 12:32pm</tr><tr>Surulere,Lagos</tr></span>
                <span><td>NGN 2,800.00</td><CardSpan>Card 4399<span><PanoramaFishEyeIcon fontSize="small"/></span></CardSpan></span>
              </Tr1>
              </RecieptHistory>
            </Content> 
            <BottomAddIcon><img src="add icon img-modified (1).png" alt="icon"/></BottomAddIcon>
        </Container>
        
    </>

  )
}

export default History

const Container = styled.div`
@media (min-width: 700px) {
  display: flex-box;
  justify-content: center;
  align-items: center;

  overflow: hidden; 
  padding-left: 100px;
  padding-right: 100px; 
}


padding-left: 30px;
padding-right: 30px;
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

border: 1px solid #6001D1;
padding-top: px;




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
  border: none;
  background-color: #f2f2f2;
  font-weight: bold;
  margin-left: 15px;
}

`
const List2 = styled.div`
padding-top: 25px;
font-weight: bold;
border-bottom: 1px solid #6E6E6E;
li {
   padding-top: 15px; 
   border: none;
   background-color: #f2f2f2;
   font-weight: bold;
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
padding-top: 8px;
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
font-weight: bold;
margin-left: 10px;
margin-bottom: 25px;
cusor: pointer;
}
`
const BottomAddIcon = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: end;
  margin-top: 40px;
  margin-bottom: 20px;
img{
  
  margin-right: 20px;
  -moz-box-shadow: 0px 5px 5px #fff;
  -webkit-box-shadow: 0px 5px 5px #fff;
  box-shadow: 0px 10px 35px #7000f6;
  -moz-border-radius:50px;
  -webkit-border-radius:190px;
  cursor: pointer;
  height: 50px;
  width: 50px;


}
`

const BtnTopText = styled.div`
color: black;
font-weight: bold;
`
const Table = styled.div`
background-color: ;
border: 1px solid #6E6E6E;
padding-left: 10px;
padding-right: 10px;
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
const Flex = styled.div`
display: flex;
justify-content: space-between;
`
const Grid1 = styled.div`
padding-top: 15px;
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
padding-left: 10px;
padding-right: 10px;
span {
 display: flex;
  justify-content: space-between; 
  
  margin-bottom: 10px;
}

tr {
  
  font-size: 13px;
}

td {
  font-weight: 700;
  font-size: 20px;
 
}

button {
  border: none;
  background-color: white;
  color: red;
  font-weight: 600;
  font-size: 15px; 
  padding-left: 5px;
}
`
const Tr2 = styled.div`
margin-left: 23px;
width: 180px;
padding-bottom: 10px;
margin-bottom: 10px;
border-bottom: 1px solid #6E6E6E;
`
const Tr3 = styled(Tr1)`
background-color:  #F4F4F6;
padding-left: 10px;
padding-right: 10px;
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
  padding-top: 60px;
  padding-left: 20px;
  height: 60px;
  width: 60px;
}
`
const Reciept = styled.div`
display: flex;
justify-content: space-between;
border-top: 1px solid #6E6E6E;
padding-top: 15px;
padding-bottom: 15px;
label{
  display: flex;
  font-weight: 500;
  color: #7000f6;
}
`
const RecieptHistory = styled.div`
`