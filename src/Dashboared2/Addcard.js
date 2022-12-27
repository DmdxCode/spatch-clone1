import {CalendarMonthTwoTone, CreditCard, CreditScoreOutlined, East, QuestionMarkRounded, West } from '@mui/icons-material'
import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

function Addcard() {
  return (
  <Container>
     
        <Container2>
          <Link to="/Wallet" style={{textDecoration: "none"}} >
            <West 
            style={{color: "6e6e6e"}}/>
          </Link>
            <h1 style={{fontSize: "40px", color: "black"}}>Add Card</h1>
            <CardNumber>
              <span style={{display: "flex"}}>
                <CreditCard/><input type="number" placeholder='Card Number' /></span> <QuestionMarkRounded/>
            </CardNumber>
            <InfoInput>
              <span style={{display: "flex", justifyContent: "space-between"}}>
                <span style={{
                  display: "flex",
                  paddingTop: "20px",
                  borderBottom: "2px solid #7000F6",
                  paddingBottom: "20px",}}>
                  <CalendarMonthTwoTone/> <input type="number" placeholder='MM/YY' style={{backgroundColor: "white", width: "100px", marginLeft: "10px"}}/>
                </span>
                <span style={{
                  display: "flex",
                  paddingTop: "20px",
                  borderBottom: "2px solid #7000F6",
                  paddingBottom: "20px",}}>
                  <CreditScoreOutlined/> <input type="number" placeholder='CVV' style={{backgroundColor: "white",  width: "100px", marginLeft: "10px"}}/>
                </span>
              </span>
            </InfoInput>
            <CountryInput style={{
              display: "flex",
              paddingTop: "20px",
              borderBottom: "2px solid #7000F6",
              paddingBottom: "20px",}}>
                <span >
                  <button style={{backgroundColor: "green", width: "2px", height: "15px", border: "none", borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px"}}></button>
                  <button style={{backgroundColor: "white", width: "2px", height: "15px", border: "none"}}></button>
                  <button style={{backgroundColor: "green", width: "2px", height: "15px", border: "none", borderTopRightRadius: "2.9px", borderBottomRightRadius: "2.9px"}}></button>
                </span>
                <input value="Nigeria" style={{color: "#6e6e6e"}}/>
                
            </CountryInput>
            <span style={{display: "flex", justifyContent: "center", textAlign: "center", paddingTop: "5px"}}>Your payment info will be stored securely.</span>
            <AddCardButton>
              <span style={{fontSize: "20px", marginLeft: "110px"}}>Add Card</span>
              <East fontSize="large" style={{marginLeft: "80px"}}/>
            </AddCardButton>
        </Container2>
    </Container>
  )
}

export default Addcard

const Container = styled.div`
@media (min-width: 700px) {
    display: flex-box;
    justify-content: center;
    align-items: center;
    overflow: hidden; 
    padding-left: 200px;
    padding-right: 200px; 
  }

  height: 100vh;
  overflow: hidden;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: white;
`
const Container2 = styled.div`
@media (min-width: 1000px) {
    display: flex-box; 
    justify-content: center;
    align-items: center;
    overflow: hidden; 
     padding-left: 300px;
     padding-right: 300px;
  }
  padding-top: 50px;
  display: flex-box; 
  justify-content: center;

 h1 {
    border-bottom: 2px solid #6e6e6e;
    padding-bottom: 50px;
 } 
  input{
    -webkit-appearance: none;
    counter: none;
    outline: none;
    decoration: none;
    border: none;
    font-size: 16px;
    color: #7000F6;
    font-weight: bold;
    background-color:  white;
    padding-left: 10px;
 
  }
`
const CardNumber = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 2px solid #7000F6;
padding-bottom: 20px;



  input{
    -webkit-appearance: none;
    outline: none;
    decoration: none;
    border: none;
    color: black;
    font-weight: bold;
    background-color: white;
    font-size: 20px; 
  }

  span{
    
  }

`
const InfoInput = styled.div`

`
const CountryInput = styled.div`

`
const AddCardButton = styled.div`
background-color: #7000F6;
color: white;
height: 60px;
border-radius: 10px;
align-items: center;
display: flex;
justify-content: center;
font-weight: bold;
margin-top: 30px;
cursor: pointer;
`