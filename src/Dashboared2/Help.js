import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import WalletIcon from '@mui/icons-material/Wallet';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LogoutIcon from '@mui/icons-material/Logout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Help() {
    const [burgerStatus, setburgerStatus] = useState(false);
  return (
    <>
   
        <Container>
            

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
                  <RequestWrap>
                <li><button><ArrowOutwardIcon/>  Request </button></li><span>.</span></RequestWrap>
                <li><button><WalletIcon />  Wallet</button></li>
                <li><button><Inventory2Icon/> History</button></li>
                <li><button><AccountCircleTwoToneIcon /> Account</button></li>
                </List1>

                <List2>
                <li><button><LogoutIcon />  Logout</button></li>
                <li><button><SupportAgentIcon/>  Contact</button></li>
                </List2>
                <footer>spatch<img src="pop,logo.jpg" alt="logo"/></footer>
                
               </Container3>
            </BurgerNav>
            <Content>
            
            <MasterBox>
                <span><h1>Help</h1>
                <Link to="/Dashboard1" style={{textDecoration: "none", color: "black"}}>
                 <img src="cancle icon.png" alt="icon"/>
                </Link>
                </span>
                <h6>How can we be of help to you?</h6>
                
               
                <li>I can't order<ArrowForwardIosIcon fontSize="small" style={{color: "#6E6E6E"}}/></li>
                <li>I can't add money to my wallet<ArrowForwardIosIcon fontSize="small" style={{color: "#6E6E6E"}}/></li>
                <li>I can't add payment method<ArrowForwardIosIcon fontSize="small" style={{color: "#6E6E6E"}}/></li>
                <Link to="/MyPackageWasNotDelivered" style={{textDecoration: "none", color: "black"}}>
                 <li>My package was not delivered<ArrowForwardIosIcon fontSize="small" style={{color: "#6E6E6E"}}/></li>
                </Link>
                <Link to="/DeleteAccount" style={{textDecoration: "none", color: "black"}}>
                 <li>I want to delete my account<ArrowForwardIosIcon fontSize="small" style={{color: "#6E6E6E"}}/></li>
                </Link>
            </MasterBox>
            
            </Content> 

        </Container>

    </>

  )
}

export default Help

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
  padding-top: 15px;
  padding-left: 15px;
  bottom: 20px;
  color: #7000F6;
  text-shadow: 0 0 8px #6001D1, 0 0 8px #6001D1;
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

    text-decoration: none; 
    color: #6E6E6E;
    
  }
}       
`
const CustomClose = styled(CloseIcon)`
color: white;
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

const MasterBox =styled.div`
overflow: hidden; 
padding-top: 10px;
padding-bottom: 0px;
background-color: white;
margin-bottom: 15px;

h1 {
    font-weight: bold;
    margin-bottom: 0px;
    font-size: 30px;
}

h6 {
 margin-top: 5px;
 margin-bottom: 50px;   
}

img {
    border-radius: 100px;
    padding-top: 20px;
    height: 30px ;
    width: 30px;
    cursor: pointer;
  }

span {
  display: flex;
  justify-content: space-between;

}

li {
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-weight: bold;
    margin-bottom: 20px;
    padding-bottom: 20px;
    padding-left: 10px;
    border-bottom: 2px solid #6E6E6E;
    cursor: pointer;
}
`


