import {  ContactsTwoTone, EmailOutlined, PhonelinkRing, West } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Contact() {
  return (
    <>
    <Content>
      <Container>
          <BackGround1>
            <Link to="/Dashboard2" style={{textDecoration: "none"}}>
              <West style={{color: "#6e6e6e"}}/>
            </Link>
              <h1>Contact</h1>
              <ContactsTwoTone fontSize='large' style={{color: "#7000f6"}}/>
              <h1>Admin</h1>
              <span style={{display: "flex", fontWeight: "bold"}}><PhonelinkRing style={{marginRight: "10px", paddingBottom: "5px"}}/>+234 901 721 3200</span>
          </BackGround1>
          <span style={{display: "flex", fontWeight: "bold", borderBottom: "1px solid #6e6e6e", paddingBottom: "10px", paddingTop: "5px", marginLeft: "15px"}}><EmailOutlined style={{marginRight: "10px"}}/>hello@spatch.com</span>
      </Container>
    </Content>
    </>
  )
}

export default Contact

const Content = styled.div`
display: flex;
justify-content: left;
background-color: #f2f2f2;
height: 100vh;
overflow: hidden;
`

const Container = styled.div`

`

const BackGround1 = styled.div`
margin-left: 15px;
padding-top: 20px;
border-bottom: 1px solid #6e6e6e;
margin-bottom: 10px;
`