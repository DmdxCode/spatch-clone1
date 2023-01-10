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
import Record from '../Dashboard/Record.json';

function History() {

  const [burgerStatus, setburgerStatus] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [isOpen, setIsOpen] = useState(null);
  const toggling = (id) => {
    setSelected(id)
    setIsOpen(!isOpen)
    console.log(id)
  };
  
  

    
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
                  <Link to="/Contact" style={{textDecoration: "none"}}>
                    <li><button><SupportAgentIcon/>  Contact</button></li>
                  </Link>
                </List2>
                <footer>spatch<img src="pop,logo.jpg" alt="icon"/></footer>
                
               </Container3>
            </BurgerNav>
            <Content>
            <Link to="/Dashboard2" style={{textDecoration: "none"}}>
              <TopArrow><WestIcon/><span>History</span></TopArrow>
            </Link>
              <BtnTopText><h3>These are your order history<br/></h3> <h6>Confirm your current password</h6></BtnTopText>
            
            {Record.job.map((item,index)=>{ 
              return( 
              <Table key={index} value={item.id} onClick={()=>toggling(item.id)} >
                
                  <Tr1>
                    <>
                      <tr>{item.date}, {item.time}</tr>
                      <tr
                      style={{
                        width: "180px",
                        textOverflow : "ellipsis",
                        overflow: "hidden",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        border: "none",
                        WebkitAppearance: "none",
                        outline: "none",
                        decoration: "none"}}
                      >{item.pickup_address}</tr>
                    </>
                    <span style={{marginBottom: "5px"}}>
                      <td>NGN {item.price}</td><CardSpan>Card {item.job_id}
                      <span><PanoramaFishEyeIcon fontSize="small"/></span></CardSpan>
                    </span>
                  </Tr1>
                  {selected === item.id && (
                     
                    <>
                    
                    <Flex  value={item.id} style={{borderTop: "1px solid #6e6e6e"}}>
                    <Grid1>
                    <span><img src="yellow icon (1) up.png" alt="icon"/><button>Picked From</button></span>
                    <Tr2>
                      <>
                      <td>{item.sender_name}</td>
                      <tr style={{
                        width: "180px",
                        textOverflow : "ellipsis",
                        overflow: "hidden",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        border: "none",
                        WebkitAppearance: "none",
                        outline: "none",
                        decoration: "none"}}>
                          {item.sender.sender_address}</tr>
                      </>
                    </Tr2>
                                
                    <span><img src="icon (5) down.png" alt="icon"/><b>Delivered To</b></span>
                    <Tr>
                      <td>{item.reciever_name}</td>
                      <tr style={{paddingBottom: "10px"}}>{item.reciever.reciever_address}</tr>
                    </Tr>
                    </Grid1>
                    <CardSpan><img src="Spachbike3.jpg" alt="icon"/></CardSpan>
                    </Flex>
                    <Link to="/History2" style={{textDecoration: "none"}}>
                      <Reciept><label>View reciept detail<TrendingFlatIcon fontSize="small" style={{marginTop: "3px", marginLeft: "2px"}}/></label><RemoveCircleOutlineIcon fontSize="small" style={{color: " #6E6E6E"}}/></Reciept>
                    </Link>
                    </>
                  )}
                
              </Table>)
              
            })}
            
            
              
            </Content> 
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
  padding-left: 5px;
  color: #7000F6;
  text-shadow: 0 0 8px #6001D1, 0 0 8px #6001D1;
}

button {
  border: none;
  background-color: #f2f2f2;
  font-weight: bold;
  
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

const BtnTopText = styled.div`
color: black;
font-weight: bold;
`
const Table = styled.div`
background-color: ;
margin-bottom: 10px;
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

tr {

  padding-bottom: 5px;

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

    top: 0;
    padding-left: 28px;
   
`

const Tr1 = styled.div`
padding-top: 15px;
padding-left: 10px;
padding-right: 10px;
span {
 display: flex;
  justify-content: space-between; 
  
  margin-bottom: 5px;
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
margin-bottom: 10px;
border-bottom: 1px solid #6E6E6E;
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
padding-top: 10px;
padding-bottom: 10px;
label{
  display: flex;
  font-weight: 500;
  color: #7000f6;
}
`