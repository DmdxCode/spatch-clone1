import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CircleIcon from '@mui/icons-material/Circle';
import WalletIcon from '@mui/icons-material/Wallet';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import AddIcon from '@mui/icons-material/Add';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LogoutIcon from '@mui/icons-material/Logout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import WestIcon from '@mui/icons-material/West';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GpsNotFixedOutlinedIcon from '@mui/icons-material/GpsNotFixedOutlined';
import MopedIcon from '@mui/icons-material/Moped';
import PaymentsIcon from '@mui/icons-material/Payments';
import SmsIcon from '@mui/icons-material/Sms';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Person from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CancelIcon from '@mui/icons-material/Cancel';

function DeleteAccount() {
    const [burgerStatus, setburgerStatus] = useState(false);
  return (
    <>
   
        <Container>
            

            <BurgerNav show={burgerStatus}>
           
              
               <Container1> 
                <CustomClose onClick={() => setburgerStatus(false)}/>
                <ul key={burgerStatus.id}></ul>
                <ProfileImg>
                  <img src="Profilepic.jpeg" alt="profile picture"/>
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
                        <li><a href="#" id="1"><ArrowOutwardIcon/>  Request </a></li><span>.</span>
                   </RequestWrap>
                        <li><a href="#" id="3"><WalletIcon />  Wallet</a></li>
                        <li><a href="#" id="3"><Inventory2Icon/> History</a></li>
                        <li><a href="#" id="4"><AccountCircleTwoToneIcon /> Account</a></li>
                </List1>

                <List2>
                    <li><a href="#" id="3"><LogoutIcon />  Logout</a></li>
                    <li><a href="#" id="3"><SupportAgentIcon/>  Contact</a></li>
                </List2>
                <footer>spatch<img src="pop,logo.jpg" alt="logo"/></footer>
                
               </Container3>
            </BurgerNav>
            <Content>
            
            <MasterBox>
                <span><KeyboardBackspaceIcon fontSize="small" style={{paddingTop: "23px", color: "#7000f6"}}  /><h3>I want to delete my account</h3><img src="cancle icon.png"/></span>
                <h6>If you can figure it out, you can contact support team.</h6>
            <Text>
            <h8> We re so sorry to say goodbye! But of course we respect your decision and thats 
why you can unsubscribe whenever you want. We will delete all your personal data, 
deactivate your account and send you a confirmation email.</h8><br/>
<h8>If you would like us to delete your data, please tell below.</h8><br/>
And we also want you to know that, whenever you want to return, we ll be waiting 
for you with the doors open and the engine running!
            </Text>
      
                <h7>Was this helpful? If you need more help</h7>
                
                <SubmitBtn>Contact support</SubmitBtn>

            </MasterBox>
            
            </Content> 

        </Container>

    </>

  )
}

export default DeleteAccount

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

a {
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
  a {

    text-decoration: none; 
    color: #6E6E6E;
    
  }
}       
`
const CustomClose = styled(CloseIcon)`
color: white;
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
padding-top: 10px;
padding-bottom: 0px;
background-color: white;
margin-bottom: 15px;

h3 {
    font-weight: bold;
    margin-bottom: 0px;
    
}

h6 {
 margin-top: 5px;
 margin-bottom: 30px;   
}

h7 {
    display: flex;
    justify-content: center;
    text-align: center;
    color: black;
    font-weight: 600; 
}

img {
    border-radius: 100px;
    padding-top: 20px;
    height: 30px ;
    width: 30px;
    cursor: pointer;
    margin-left: 10px;
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
const Input1 = styled.div`
list-style: none;
border: 2px solid #6E6E6E;
decoration: none;
border-radius: 10px;
color: #6E6E6E;
display: flex;
align-items: center;
height: 50px;

margin-top: 15px;
cursor: pointer;

input {

    -webkit-appearance: none;
      outline: none;
      decoration: none;
      border: none;
      height: 20px;
      width: 290px;
      font-size: 20px;
      padding-left: 10px; 
  }
`
const Input2 = styled(Input1)`


`

const AddBtn = styled.div`
background-color: #E2CCFD;
border-radius: 10px;
font-weight: 500;
color: #7000f6;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 15px;
cursor: pointer;
`
const MiniBox = styled.div`
background-color: #F2F2F2;
border-radius: 8px;
margin-top: 15px;
margin-bottom: 50px;
height: 70px;
width: 70px;
opacity: 0.6;
`
const SubmitBtn = styled.div`
background-color: #E2CCFD;
border-radius: 10px;
font-weight: bold;
color: #7000f6;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 15px;
cursor: pointer;
`
const Text = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 80px;
h8 {
    padding-bottom: 10px;
}
`