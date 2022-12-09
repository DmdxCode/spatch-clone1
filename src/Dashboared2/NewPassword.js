import React, { useState } from 'react'
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
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';



function NewPassword() {
    const [burgerStatus, setburgerStatus] = useState(false);
  return (
    <>
    <TopIconWrap>
        <Mi onClick={() => setburgerStatus(true)}><MenuIcon fontSize='large'/></Mi><WarningIcon><ErrorOutlineRoundedIcon fontSize="large"/></WarningIcon>
          </TopIconWrap>
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
            <Arrow><WestIcon/><span>Account</span></Arrow>
            <MasterBox>
                <h1>Current Password</h1>
                <h6>Create your current password</h6>
                
               
                <Password>
                  <li><input placeholder='Current Password' name="password" type="password" /><LockIcon/></li>
                </Password>
                <h1>New Password</h1>
                <h6>Provide the new password</h6>
                <Code>
                  <li><input placeholder='New Password' type="password" name="current password" /><Visibility/></li>
                </Code>
                <Code>
                  <li><input placeholder='Current New Password' type="password" name="current new password" /><Visibility/></li>
                </Code>
                <SubmitBtn>
                <submit>Save Changes</submit>
                </SubmitBtn>
            </MasterBox>
            <BottomAddIcon><img src="add icon img-modified (1).png" alt="icon"/></BottomAddIcon>
            </Content> 

        </Container>

    </>

  )
}

export default NewPassword

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
margin-bottom: 15px;

h1 {
    font-weight: bold;
    margin-bottom: 0px;
    font-size: 30px;
}

h6 {
 margin-top: 5px;   
}

img {
    border-radius: 80px;
    height: 70px ;
    width: 70px;
    margin-right: 20px; 
  }

span {
  display: flex;
  align-items: center;
  color: #7000f6;
  font-weight: 600;
}
`

const EmailWrap = styled.div`
border: 2px solid #6E6E6E;
decoration: none;
border-radius: 10px;
color: #6E6E6E;
margin-top: 15px;


li {
display: flex;
justify-content: space-between;
padding-right: 10px;
align-items: center; 
height: 50px;
cursor: pointer;
}

input {
  -webkit-appearance: none;
    outline: none;
    decoration: none;
    border: none;
    height: 20px;
    font-size: 20px;
    padding-left: 10px; 
    color: black;
}
`
const Password = styled(EmailWrap)`
`
const Code = styled(EmailWrap)`
`
const SubmitBtn = styled.div`
background-color: #7000f6;
color: white;
margin-top: 30px;
font-weight: bold;
border-radius: 8px;
cursor: pointer;

submit{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}
`
const BottomAddIcon = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: end;
  padding-right: 10px; 
  margin-bottom: 35px;

  img{   
  height: 50% ;
  width: 15%;
  
  }

margin-top: 0px;
img{
  
  
  -moz-box-shadow: 0px 5px 5px #fff;
  -webkit-box-shadow: 0px 5px 5px #fff;
  box-shadow: 0px 10px 35px #7000f6;
  -moz-border-radius:50px;
  -webkit-border-radius:190px;
  cursor: pointer;
  height: 40px;
  width: 40px;


}
`
