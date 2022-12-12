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
import Person from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
function AfterFilling() {
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
                <Link to="/RequestAsSender" style={{textDecoration: "none"}}>
                  <li><button><ArrowOutwardIcon/>  Request </button></li>
                </Link>
                <Link to="/Wallet" style={{textDecoration: "none"}}>
                  <li><button><WalletIcon />  Wallet</button></li>
                </Link>
                <Link to="/History" style={{textDecoration: "none"}}>
                  <li><button><Inventory2Icon/> History</button></li>
                </Link>
                <Link to="/AfterFilling" style={{textDecoration: "none"}}>
                  <RequestWrap><li><button><AccountCircleTwoToneIcon style={{color: "#7000f6"}} /> Account</button></li><span>.</span></RequestWrap>
                </Link>
                </List1>

                <List2>
                  <li><button><LogoutIcon />  Logout</button></li>
                  <Link to="/Help" style={{textDecoration: "none"}}>
                    <li><button><SupportAgentIcon/>  Contact</button></li>
                  </Link>
                </List2>
                <footer>spatch<img src="pop,logo.jpg" alt="logo"/></footer>
                
               </Container3>
            </BurgerNav>
            <Content>
            <Arrow><WestIcon/><span>Account</span></Arrow>
            <MasterBox>
                <h1>Personal Information</h1>
                <h6>Add your details. We recommend uploading a photo.<br/>You'll be able to change it later.</h6>
                <Profile style={{cursor: "pointer"}}><img src="Profilepic.jpeg" alt="profile" /> Change profile image</Profile>
                <NameWrap>
                  <li><input placeholder='First Name' name="First Name" type="text"></input><Person /></li>
                  <li><input placeholder='Last Name' type="text" name="Last Name"></input><Person/></li>
                </NameWrap>
                <NumberWrap>
                  <input placeholder='Phone Number' type="tel" maxLength= "4" />
                </NumberWrap>
                <EmailWrap>
                <span><H8><input placeholder='Email' name="Email" type="@"></input></H8><EmailIcon/></span>
                </EmailWrap>
                <Link to="/NewPassword" style={{textDecoration: "none"}}>
                  <Password>
                    <span><H8><input placeholder='Change Password' name="password" type="password" /></H8><LockIcon/></span>
                  </Password>
                </Link>
                <h1>Loyalty Program</h1>
                <h6>if you have a loyalty add the code</h6>
                <Code>
                  <span><H8><input placeholder='Code' type="number" name="code" /></H8><LockIcon/></span>
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

export default AfterFilling

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
    padding-top: 8px;
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
padding-top: 10px; 
 
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
  padding-top: 5px;
  padding-left: 15px;
  padding-bottom: 10px;
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
   padding-bottom: 10px;

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
`
const Profile = styled.div`
display: flex;
align-items: center;
color: #7000f6;
font-weight: 600;
`

const NameWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;
cursor: pointer;

li {
  list-style: none;
  border: 2px solid #6E6E6E;
  decoration: none;
  border-radius: 10px;
  color: #6E6E6E;
  align-items: center;
  height: 50px;
  padding-right: 5px; 
  display: flex;

}

input {
  -webkit-appearance: none;
    outline: none;
    decoration: none;
    border: none;
    height: 20px;
    width: 110px;
    font-size: 20px;
    padding-left: 10px;  
}
`
const NumberWrap = styled.div`
list-style: none;
border: 2px solid #6E6E6E;
decoration: none;
border-radius: 10px;
color: #6E6E6E;
align-items: center;
height: 50px;
margin-top: 15px;
cursor: pointer;
display: flex;
justify-content: space-between;

input {
  -webkit-appearance: none;
    outline: none;
    decoration: none;
    border: none;
    height: 20px;
    
    font-size: 20px;
    padding-left: 10px; 
}

`
const EmailWrap = styled.div`
border: 2px solid #6E6E6E;
decoration: none;
border-radius: 10px;
color: #6E6E6E;

margin-top: 15px;
cursor: pointer;

span {
list-style: none;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 10px;
padding-right: 10px;
height: 50px;

}

input {
  -webkit-appearance: none;
    outline: none;
    decoration: none;
    border: none;
    height: 20px;
    
    font-size: 20px; 
}
`
const Password = styled.div`
cursor: pointer;
list-style: none;
border: 2px solid #6E6E6E;
decoration: none;
border-radius: 10px;
color: #6E6E6E;
margin-top: 15px;
cursor: pointer;

span {
list-style: none;
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;
padding-left: 10px; 
padding-right: 10px;
}

input {
  -webkit-appearance: none;
    outline: none;
    decoration: none;
    border: none;
    height: 20px;
    font-size: 20px;  
}
`
const Code = styled.div`
cursor: pointer;
list-style: none;
border: 2px solid #6E6E6E;
decoration: none;
border-radius: 10px;
color: #6E6E6E;
margin-top: 15px;
cursor: pointer;

span {
list-style: none;
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;
padding-left: 10px; 
padding-right: 10px;
}

input {
  -webkit-appearance: none;
    outline: none;
    decoration: none;
    border: none;
    height: 20px;

    font-size: 20px;
    
}
`
const SubmitBtn = styled.div`
background-color: #7000f6;
height: 50px;
color: white;
margin-top: 20px;
font-weight: bold;
border-radius: 8px;
cursor: pointer;

submit{
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`
const BottomAddIcon = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: end;
  padding-right: 20px; 
  margin-bottom: 35px;
  img{   
  height: 50% ;
  width: 15%;
  
  }

margin-top: 0px;
img{
  
  margin-right: 20px;
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
const H8 = styled.div`
  
`