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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MopedIcon from '@mui/icons-material/Moped';
import PaymentsIcon from '@mui/icons-material/Payments';
import SmsIcon from '@mui/icons-material/Sms';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function RequestAsSender() {
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
                  <RequestWrap>
                   <li><button id="1"><ArrowOutwardIcon style={{color: "#7000f6"}}/>  Request </button></li><span>.</span>
                  </RequestWrap>
                </Link>
                <Link to="/Wallet" style={{textDecoration: "none"}}>
                 <li><button id="3"><WalletIcon />  Wallet</button></li>
                </Link>
                <Link to="/History" style={{textDecoration: "none"}}>
                 <li><button id="3"><Inventory2Icon/> History</button></li>
                </Link>
                <Link to="/AfterFilling" style={{textDecoration: "none"}}>
                 <li><button id="4"><AccountCircleTwoToneIcon /> Account</button></li>
                </Link>
                </List1>

                <List2>
                <li><button id="3"><LogoutIcon />  Logout</button></li>
                <Link to="/Help" style={{textDecoration: "none"}}>
                        <li><button><SupportAgentIcon/>  Contact</button></li>
                      </Link>
                </List2>
                <footer>spatch<img src="pop,logo.jpg" alt="logo"/></footer>
                
               </Container3>
            </BurgerNav>
            <Content>
            <Link to="/Sameday" style={{textDecoration: "none"}}>
             <Arrow><WestIcon style={{cursor: "pointer"}}/><span>Request</span></Arrow>
            </Link>
           <MasterBox>
            <BoxHead><span>Same Day</span><KeyboardArrowDownIcon fontSize="large" style={{cursor: "pointer"}}/></BoxHead>
            <MinBoxWrap>
              <MinBox1><img src="icon (1).png" alt="icon"/><span>sender</span></MinBox1>
              <MinBox2>
                <Link to="/RequestAsReceiver" style={{textDecoration: "none"}}>
                  <img src="icon (2).png" alt="icon"/><span>receiver</span>
                </Link>
              </MinBox2>
              <MinBox3><img src="icon (3).png" alt="icon"/><span>guest</span></MinBox3>
            </MinBoxWrap>
            <Box1><span><img src="icon (4).png" alt="icon"/>Adam Rewana Ikoyin Estate, Ikoyi</span><CloseIcon style={{cursor: "pointer"}}/></Box1>

            <Box2>
            <span><H7><img src="icon (5).png" alt="icon"/><button>3, Idumota Lane, Lagos Island</button></H7><CloseIcon style={{cursor: "pointer"}}/></span>
            <span><H8><img src="icon (6).png" alt="icon"/><button>Rasheed Aderanmisie</button></H8><CloseIcon style={{cursor: "pointer"}} /> </span>
            <span><H9><img src="icon (7).png" alt="icon"/><button><input type="tel" id="tel" placeholder="+234 | 809 000 4030"/></button></H9><CloseIcon style={{cursor: "pointer"}}/></span>
            <span><H10><img src="icon (8).png" alt="icon"/><button>A new pair of adidas shoes</button></H10><CloseIcon style={{cursor: "pointer"}}/></span>
            </Box2>
            <Box3>
              <li><Icon1><MopedIcon/><span>Select vehicle category</span></Icon1><Icon4><ExpandMoreIcon/></Icon4></li>
            <BikeCategory>
                <span>Bike<br/><BikePrice>Price <span>N2,240</span></BikePrice></span>
                <img src="Spachbike.jpg" alt="icon"/>
            </BikeCategory>

            <VanCategory>
              <span>Van<br/><VanPrice>Price <span>N4,300</span></VanPrice></span>
                <img src="Spatchvan.jpg" alt="icon"/>
            </VanCategory>
              <li><Icon2><SmsIcon/><span>Leave a note</span></Icon2><Icon6><ExpandMoreIcon/></Icon6></li>
              
              <li><Icon3><PaymentsIcon/><span>Receive cash for me</span></Icon3><Icon5><ExpandMoreIcon/></Icon5></li>
            </Box3>
            <Link to="/RequestAsSender2" style={{textDecoration: "none"}}>
              <BottomBtn>
                <Amount>N2,240</Amount>
                <span>Request Spatch<BtnIcon><KeyboardArrowRightIcon/></BtnIcon></span>
              </BottomBtn>
            </Link>
           </MasterBox>   
              
            </Content> 

        </Container>

    </>

  )
}

export default RequestAsSender

const Container = styled.div`
@media (min-width: 700px) {
  display: flex-box;
  justify-content: center;
  align-items: center;

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


  
  img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-repeat: no-repeat;
      opacity: 0.5;
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
position: relative;
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
 
`
const Arrow = styled.div`
color: #7000f6;
display: flex;
margin-bottom: 15px;
span{
    font-size: 23px;
    color: black;
    font-weight: bold;
    margin-left: 10px;
}
`
const MasterBox =styled.div`

overflow: hidden; 

padding-top: 0px;
padding-bottom: 0px;



background-color: white;
border-radius: 20px;
margin-bottom: 15px;
-moz-box-shadow: 10px 8px 8px #F2F2F2;
  -webkit-box-shadow: 0px 10px 10px #F2F2F2;
  box-shadow: 0px 10px 10px #F2F2F2;
  -moz-border-radius:50px;
`
const BoxHead = styled.div`
padding-top: 10px;
padding-left: 20px;
margin-right: 20px;
display: flex;
color: #6E6E6E;

span {
  font-weight: bold;
  font-size: 20px;
  color: black;
}
`
const MinBoxWrap = styled.div`
display: flex;
padding-left: 20px;
padding-right: 20px;
margin-bottom: 15px;

`
const MinBox1 = styled.div`
color: #7000f6;
height: 40px;
width: 250px; 
margin: 5px;
border-radius: 7px;
background-color: white;
border: 1px solid #7000f6;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
img {
  margin-right: 5px;
}

span {
  
}
`
const MinBox2 = styled(MinBox1)`
background-color: #F1F4FB;
border: none;
color: #6E6E6E;
cursor: pointer;

`
const MinBox3 = styled(MinBox1)`
background-color: #F1F4FB;
border: none;
color: #6E6E6E;
cursor: pointer;
`
const Box1 = styled.div`
margin-top: 20px;
margin-left:10px;
margin-right: 10px;
height: 70px;
border-radius: 8px;
display: flex;
justify-content: space-between;

border: 1px solid #F1F4FB;
align-items: center;
color: #6E6E6E;
font-weight: bold;
padding-left: 15px;
padding-right: 15px;
font-size: 14px;
span{
  color: black;
  display: flex;
}
img {
  margin-right: 10px;
}
`
const Box2 = styled.div`
font-size: 15px;
margin-top: 15px;
margin-left:10px;
margin-right: 10px;
height: 200px;
border-radius: 8px;
border: 1px solid #F1F4FB;
padding-left: 15px;
padding-right: 15px;


input{
  -webkit-appearance: none;
  outline: none;
  decoration: none;
  border: none;
  font-weight: bold;
  font-size: 18px;
  width: 180px;
  color: black;
}

span { 
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  list-style: none;
  color: #6E6E6E;
  display: flex;
  font-weight: bold;
  padding-top: 20px;
}

img{
margin-right: ;

}

button {
  border: none;
  background-color: white;
  text-decoration: none;
  color: black;
  display: flex;
  margin-left: 10px;
  font-weight: 700;

}
`
const H7 = styled.div`
  display: flex;
  
  color: #6E6E6E;
`
const  H8 = styled.div`
    display: flex;
    color: #6E6E6E;
`
const H9 = styled.div`
    display: flex;
    color: #6E6E6E;
` 
const H10 = styled.div`
    display: flex;
    color: #6E6E6E;
`
const Box3 = styled.div`
margin-top: 15px;
margin-left:10px;
border-radius: 8px;
margin-right: 10px;

padding-left: 15px;
padding-right: 15px;
height: 110px;

li {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  color: #6E6E6E;  
}

button {
  border: none;
  background-color: white;
  color: black;
  font-weight: bold;
  margin-left: 10px;
}

span {
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
}

input {
    -webkit-appearance: none;
    outline: none;
    decoration: none;    
    width: 260px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #7000fb;
    padding-left: 15px;
    padding-bottom: 20px;
    text-align: top;
    font-size: 18px;
}
`

const Icon1 = styled.div`
display: flex;
color: #6E6E6E;
`
const Icon2 = styled.div`
color: #6E6E6E;
display: flex;
`
const Icon3 = styled.div`
color: #6E6E6E;
display: flex;
`
const Icon4 = styled.div`
color: #6E6E6E;
cursor: pointer;
`
const Icon5 = styled(Icon4)`
color: #6E6E6E;
cursor: pointer;
`
const Icon6 = styled(Icon4)`
color: #6E6E6E;
cursor: pointer;
`
const BikeCategory = styled.div`
margin-top: 20px;

height: 70px;
border-radius: 8px;
display: flex;
justify-content: space-between;
border: 1px solid #7000f6;
align-items: center;
color: #6E6E6E;
font-weight: bold;
padding-left: 5px;


span {
    color: black;
    display: grid;
}

img {
    height: 65px ;
    width: 80px;
    border-radius: 0 10px 4px;   
}
`
const VanCategory = styled.div`
margin-top: 20px;
border: o.9px solid #6E6E6E;
height: 70px;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
color: #6E6E6E;
font-weight: bold;
padding-left: 5px;
background-color: #f2f2f2;
opacity: 0.6;
span {
    color: black;
    display: grid;
}

img {
    height: 65px ;
    width: 80px;   
}
`
const BikePrice = styled.div`
font-size: 15px;
color: #70006b;
display: flex;
span {
  color: #70006b;
  font-size: 18px;
}
`
const VanPrice = styled.div`
display: flex;
`



const BottomBtn = styled.div`
display: flex;
margin-top: 200px;
margin-left:10px;
margin-right: 10px;
border-radius: 8px;
margin-bottom: 40px;
border: 1px solid #F1F4FB;
padding-left: 15px;
padding-right: 15px;
align-items: center;
justify-content: space-between;
height: 50px;
color: white;
cursor:pointer;

span {
font-weight: bold;
background-color: #7000f6;
display: flex;
align-items: center;
height: 35px;
border-radius: 8px;
padding-left: 15px;
}
`
const Amount = styled.div`
color: #7000f6;
font-weight: 800;
font-size: 20px;
`


const BtnIcon = styled.div`

display: flex;

`
