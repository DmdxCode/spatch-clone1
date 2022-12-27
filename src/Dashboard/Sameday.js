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
import GpsNotFixedOutlinedIcon from '@mui/icons-material/GpsNotFixedOutlined';
import MopedIcon from '@mui/icons-material/Moped';
import PaymentsIcon from '@mui/icons-material/Payments';
import SmsIcon from '@mui/icons-material/Sms';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CurrencyInput from 'react-currency-input-field';

function Sameday() {
    const [burgerStatus, setburgerStatus] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => {
      setIsOpen(!isOpen);
    };
    const [selectedOption, setSelectedOption] = useState(null);
    const onOptionClicked = value => () => {
      setSelectedOption(value);
      setIsOpen(false);
      console.log(selectedOption);
    };
    
    const options = [
      
      "Bike . ₦1,250",
    ]
    const options2 = [
      "Van . ₦4,350",
          ]
    const [isOpen2, setIsOpen2] = useState(false);
    const toggling2 = () => {
      setIsOpen2(!isOpen2);
    };

    const [inputValue, setInputValue] = useState();

    let onChange = (event) => {
     const newValue = event.target.value;
     setInputValue(newValue);
    };
 
const [isOpen3, setIsOpen3] = useState(false);
const toggling3 = () => {
  setIsOpen3(!isOpen3);
}

const [amount, setAmount] = useState();

 let onChange2 = (event) => {
  const newAmount = event.target.value;
  setAmount(newAmount);
}

const [cancle1, setCancle1] = useState('');

const toggleCancle1 = event => {
setCancle1(event.target.value);
};

const toggleHandle = () => {
  setCancle1('');
};

const [cancle2, setCancle2] = useState('');

const toggleCancle2 = event => {
setCancle2(event.target.value);
};

const toggleHandle2 = () => {
  setCancle2('');
};

const [cancle3, setCancle3] = useState('');

const toggleCancle3 = event => {
setCancle3(event.target.value);
};

const toggleHandle3 = () => {
  setCancle3('');
};

const [cancle4, setCancle4] = useState('');

const toggleCancle4 = event => {
setCancle4(event.target.value);
};

const toggleHandle4 = () => {
  setCancle4('');
};

const [cancle5, setCancle5] = useState('');

const toggleCancle5 = event => {
setCancle5(event.target.value);
};

const toggleHandle5 = () => {
  setCancle5('');
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
                  <WalletBalance>₦12,000</WalletBalance>
                  <Button1>
                    <PlusIcon><img src="wallet add icon-modified.png" alt="add icon"/></PlusIcon>
                  </Button1> 
                </Wrap>
              </Container2>
              <Container3>
                <List1>
                  <Link to="/Dashboard2" style={{textDecoration: "none", display: "flex"}}>
                    <RequestWrap>
                      <li>
                        <button><ArrowOutwardIcon style={{color: "#7000f6"}}/>  Request </button>
                      </li><span>.</span>
                    </RequestWrap>
                  </Link>
                  <Link to="/Wallet" style={{textDecoration: "none", display: "flex"}}>
                    <li><button ><WalletIcon />  Wallet</button></li>
                  </Link>
                  <Link to="/History" style={{textDecoration: "none"}}>
                   <li><button ><Inventory2Icon/> History</button></li>
                  </Link>
                  <Link to="/AfterFilling" style={{textDecoration: "none"}}>
                    <li><button ><AccountCircleTwoToneIcon /> Account</button></li>
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
                <footer>spatch<img src="pop,logo.jpg" alt="logo"/></footer>
                
              </Container3>
            </BurgerNav>
            <Content>
            <Link to="/Dashboard2" style={{textDecoration: "none"}}>
              <Arrow><WestIcon/><span>Request</span></Arrow>
            </Link>
           <MasterBox>
            <BoxHead><span>Same Day</span><KeyboardArrowDownIcon fontSize="large"/></BoxHead>
            <MinBoxWrap>
              <MinBox1><img src="icon (1).png" alt="icon"/><span>sender</span></MinBox1>
              <MinBox2>
              <Link to="/RequestAsReceiver" style={{textDecoration: "none", display: "flex"}}>
                  <img src="icon (2).png" alt="icon"/><span>receiver</span>
              </Link>
              </MinBox2>
              <MinBox3>
                <Link to="/Guest" style={{textDecoration: "none", display: "flex"}}>
                  <img src="icon (3).png" alt="icon"/><span>guest</span>
                </Link>
              </MinBox3>
            </MinBoxWrap>
            <Box1>
              <span>
                <img src="icon (4).png" alt="icon"/>
                <button style={{border: "none", backgroundColor: "white"}}>
                  <input value={cancle1} onChange={toggleCancle1} placeholder= "Pick from..." 
                  style={{width: "180px", textOverflow : "ellipsis", overflow: "hidden", display: "inline-block", whiteSpace: "nowrap", border: "none", WebkitAppearance: "none", outline: "none",decoration: "none", fontWeight: "bold", fontSize: "15px"}} />
                </button>
              </span>
              {cancle1?
                 <CloseIcon onClick={toggleHandle}/>
                 : ""
                }            
            </Box1>
            <Box2>
              <span>
                <H7><img src="icon (5).png" alt="icon"/>
                  <button> 
                    <input value={cancle2} onChange={toggleCancle2} type="text" placeholder={ 'Where are we delivering to?' } style={{width: "200px", textOverflow : "ellipsis", overflow: "hidden", display: "inline-block", whiteSpace: "nowrap", fontWeight: "bold", fontSize: "15px" }} />
                  </button>
                </H7>
                {cancle2?
                 <CloseIcon onClick={toggleHandle2}/>
                 : <GpsNotFixedOutlinedIcon onClick={toggleHandle2}/>
                }
              </span>
              <span>
                <H8><img src="icon (6).png" alt="icon"/>
                  <button>
                    <input value={cancle3} onChange={toggleCancle3} placeholder= "Receiver's name" style={{width: "180px", textOverflow : "ellipsis", overflow: "hidden", display: "inline-block", whiteSpace: "nowrap", fontWeight: "bold", fontSize: "15px"}} required/>
                  </button>
                </H8>
                {cancle3?
                 <CloseIcon onClick={toggleHandle3}/>
                 : ""
                }
              </span>
              <span>
                <H9><img src="icon (7).png" alt="icon"/>
                  <button>
                    <input value={cancle4} onChange={toggleCancle4} type="number" id="number" placeholder="+234 | 809 000 4030" input require="+234" />
                  </button>
                </H9>
                {cancle4?
                 <CloseIcon onClick={toggleHandle4}/>
                 : ""
                }              </span>
              <span>
                <H10><img src="icon (8).png" alt="icon"/>
                  <button>
                    <input value={cancle5} onChange={toggleCancle5} placeholder="Describe item" style={{width: "180px", textOverflow : "ellipsis", overflow: "hidden", display: "inline-block", whiteSpace: "nowrap", fontWeight: "bold", fontSize: "15px" }}/>
                  </button>
                </H10>
                {cancle5?
                 <CloseIcon onClick={toggleHandle5}/>
                 : ""
                }              
              </span>
            </Box2>
            <Box3>
              <DropDownContainer1>
                <><DropDownHeader1 onClick={toggling}>
                  <li><Icon1><MopedIcon/><span  style={{fontWeight: "500", color: "black"}}>{ selectedOption || "Select Vehicle Category"}</span></Icon1><Icon4><ExpandMoreIcon/></Icon4></li>

                </DropDownHeader1></>
                { isOpen && (
                  <DropDownListContainer1>
                    <DropDownList1>
                        {
                          options.map( vehicle => {
                            return (                          
                              <ListItem1 key={ vehicle } onClick={onOptionClicked(vehicle)}>
                                <li><img src="Spachbike3.jpg" alt="" /><span>₦1,250</span>
                                
                                </li>
                              </ListItem1>                     
                            )
                          }) 
                        }
                        {
                          options2.map( vehicle => {
                            return (                          
                              <ListItem2 key={ vehicle } onClick={onOptionClicked(vehicle)}>
                                <li><img src="Spatchvan.jpg" alt=""/><span>₦4,350</span></li>
                              </ListItem2>                     
                            )
                          }) 
                        }
                      
                      
                    </DropDownList1>
                  </DropDownListContainer1>
                )}
              </DropDownContainer1>

              <DropDownContainer2 > 
                <DropDownList2>      
                  <li>
                    <Icon2>
                      <SmsIcon/>
                      <span style={{width: "180px", textOverflow : "ellipsis", overflow: "hidden", display: "inline-block", whiteSpace: "nowrap", color: "black"}}>{inputValue || "Leave a note" }</span>
                    </Icon2>
                    <Icon6>
                      <ExpandMoreIcon onClick={toggling2} />
                    </Icon6>
                  </li> 
                  
                    {isOpen2 && (  
                  <Note>
                  
                    <input placeholder={inputValue? 'Write a message' : "Write a message"} onChange={onChange} value={inputValue}/>
                    
                  </Note> )}   
                               
                </DropDownList2>
              </DropDownContainer2>

              <li>
                <Icon3>
                  <PaymentsIcon/>
                  <span> Receive cash for me <button style={{color: "#7000f6"}} >{amount}</button></span>
                </Icon3>
                <Icon5>
                  <ExpandMoreIcon onClick={toggling3}/>
                </Icon5>
              </li>
              {isOpen3 && (
                
              <ReceiveAmount>
                <CurrencyInput
                  id="input-example"
                  name="input-name"
                  placeholder="Amount"
                  defaultValue={0}
                  decimalsLimit={2}
                  onValueChange={(value, name) => console.log(value, name)}
                  prefix="NGN "
                  onChange={onChange2}
                  
                /> 
              </ReceiveAmount>
             )}
            </Box3>
   
            
              <BottomBtn>
                <span>Request Spatch</span><BtnIcon><KeyboardArrowRightIcon/></BtnIcon>
              </BottomBtn>
           </MasterBox>   
              
            </Content> 

        </Container>

    </>

  )
}

export default Sameday

const DropDownContainer1 = styled.div`

`
const DropDownListContainer1 = styled.div`

`
const DropDownList1 = styled.div`

`
const DropDownContainer2 = styled.div`

`

const DropDownList2 = styled.div`

`

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


`
const MinBox3 = styled(MinBox1)`
background-color: #F1F4FB;
border: none;
color: #6E6E6E;

`
const Box1 = styled.div`
margin-top: 20px;
margin-left:10px;
margin-right: 10px;
height: 70px;
border-radius: 8px;
display: flex;
justify-content: space-between;
text-overflow: ellipsis;
border: 1px solid #F1F4FB;
align-items: center;
color: #6E6E6E;
font-weight: bold;
padding-left: 15px;
padding-right: 15px;
font-size: 14px;
span{
  overflow: hidden;
  
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
  font-weight: 700;
  text-decoration: none;
  color: black;
  display: flex;
  margin-left: 10px;

}
`
const H7 = styled.div`
  display: flex;
  button {
    color: #6E6E6E;
  }
  input {
    font-weight: 150;
    font-size: 14px;
  }
`
const  H8 = styled.div`
    display: flex;
    color: #6E6E6E;
    input {
      font-weight: 150;
      font-size: 14px;
    }
`
const H9 = styled.div`
    display: flex;
    color: #6E6E6E;
    input {
      font-weight: 150;
      font-size: 14px;
    }
` 
const H10 = styled.div`
    display: flex;
    color: #6E6E6E;
    input {
      font-weight: 150;
      font-size: 14px;
    }
`
const Box3 = styled.div`
margin-top: 15px;
margin-left:10px;
border-radius: 8px;
margin-right: 10px;

padding-left: 15px;
padding-right: 15px;


li {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
   
}

button {
  border: none;
  background-color: white;
  font-weight: 700;
  color: black;
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


const BottomBtn = styled.div`
display: flex;
justify-content: center;

margin-left:10px;
margin-right: 10px;
border-radius: 8px;
margin-bottom: 40px;
border: 1px solid #F1F4FB;

align-items: center;
height: 50px;
color: white;
cursor:pointer;
background-color: #7000f6;

span {
font-weight: bold;
display: flex;

align-items: center;
border-radius: 8px;
margin-right: 50px;
margin-left: 50px;
}
`

const BtnIcon = styled.div`
display: flex;
justify-content: end;
align-items: right;

`
const DropDownHeader1 = styled.div`
input{
  height: 15px;

  border: none;
}
`
const ListItem1 = styled.div`
border: 1px solid #7000f6;
border-radius: 10px;
height: 50px;
margin: 5px;
cursor: pointer;

li {
  display: flex;
  justify-content: space-between;
  margin: 5px;
  padding: 8px 10px;
  font-weight: 500;
  color: #7000f6;  
}

img {
    width: 40px;
    
}
`
const ListItem2 = styled(ListItem1)`

`
const Note = styled.div`
text-overflow: elipsis;
input {
  height: 50px;
  text-overflow: elipsis;
}
`
const ReceiveAmount = styled.div`
 display: flex;
justify-content: center;
align-items: center;

input {
  color: #7000f6;
  height: 35px;
  width: 350px;
  text-overflow: elipsis;
  text-align: center;
 
}
`