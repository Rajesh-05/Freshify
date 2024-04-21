import React from 'react';
import styled from "styled-components";


import { Link } from 'react-router-dom';
function Home() {

  return (
    <Container>
      <Link to="/home">
      <img style={{width: 180, height: 180}} src="images/logo.png" />
    </Link>
        <div style={{color: '#87C75C', fontSize: 57.71, fontFamily: 'Poppins', fontWeight: '800', wordWrap: 'break-word'}}>FRESHIFY</div>
        <div style={{ color: '#87C75C', fontSize: 19.82, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word'}}>Freshness Beyond Borders</div>
        
    </Container>
    
  )
}

export default Home;

const Container = styled.div`
background:black;
display:flex;
justify-content:center;
flex-direction:column;
width:100vw;
height:100vh;
align-items:center;
`