import React from 'react'
import styled from 'styled-components'


import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


function DeleteAccount() {

  return (
    <>
   
        <Container>
            <Content>
            
            <MasterBox>
                <span><KeyboardBackspaceIcon fontSize="small" style={{paddingTop: "23px", color: "#7000f6"}}  /><h3>I want to delete my account</h3><img src="cancle icon.png" alt="icon"/></span>
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