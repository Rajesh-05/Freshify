import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppBar from './AppBar';

function Main() {
  return (
    <Container style={{ minWidth: '500px' }} fluid className='primary m-0 p-0 vh-100 vw-100 position-relative'>
      <AppBar className="position-absolute top-0 z-1" />
        <div>
          <div style={{ textAlign: 'center', color: 'white', fontSize: '35px', fontFamily: 'Poppins', fontWeight: '500', lineHeight: '45px', wordWrap: 'break-word' }}>Good Morning!</div>
          <Row>
            <Col>
              <div style={{ textAlign: 'center', color: '#87C75C', fontSize: '28px', fontFamily: 'Poppins', fontWeight: '500', lineHeight: '29px', wordWrap: 'break-word' }}>Vehicles</div>
              <Row>
                <Col>
                  <div style={{ width: '100%', height: '100px', background: 'linear-gradient(180deg, rgba(98, 98, 98, 0.5) 0%, rgba(217, 217, 217, 0.25) 100%)', borderRadius: '18px', border: '1.5px solid rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(11px)' }}></div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
    </Container>
  );
}

export default Main;