import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppBar from './AppBar';
import Dropdown from 'react-bootstrap/Dropdown';



function Main() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelect = (eventKey) => {
      setSelectedOption(eventKey);
    };
  return (
    <Container style={{ minWidth: '500px' }} fluid className='primary m-0 p-0 vh-200 vw-100 position-relative'>
      <AppBar className="position-absolute top-0 z-1" />
        <div>
          <div className='ms-5' style={{ textAlign: 'start', color: 'white', fontSize: '35px', fontFamily: 'Poppins', fontWeight: '500', lineHeight: '45px', wordWrap: 'break-word' }}>Good Morning!</div>
          <Row >
            <Col className='ms-5 mt-3'>
              <div style={{ textAlign: 'start', color: '#87C75C', fontSize: '28px', fontFamily: 'Poppins', fontWeight: '500', lineHeight: '29px', wordWrap: 'break-word' }}>Vehicles</div>
              <Row className='mr-3 mt-3'>
                <Col>
                  <div style={{ width: '100%', height: '200px', background: 'linear-gradient(180deg, rgba(98, 98, 98, 0.5) 0%, rgba(217, 217, 217, 0.25) 100%)', borderRadius: '18px', border: '1.5px solid rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(11px)' }}>
                    <Row className='p-2 ' style={{display:'flex', justifyContent:''}}>
                        <Col xs={12} className='mb-2 ms-2 '>
                            <div style={{width: '100%', height: '100%', color: 'white', fontSize: 13.26, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Bolero Puckup<br/>(TN41 2992)</div>
                        </Col>
                        <Col xs={12} className='mb-3'>
                            <img style={{width: '100%', height: '100%'}} src="images/car-1.png" />
                        </Col>
                        <Col xs={12} className='ms-4'>
                        <div style={{width: '100%', height: '100%', position: 'relative'}}>
                            <div style={{width: 109.25, height: 28.73, left: 0, top: 0, position: 'absolute', background: '#459444', borderRadius: 5.25}} />
                            <div style={{left: 35.27, top: 5.63, position: 'absolute', color: 'white', fontSize: 11.26, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Select</div>
                        </div>
                        </Col>                        
                    </Row>
                  </div>
                </Col>
                <Col>
                <div style={{ width: '100%', height: '200px', background: 'linear-gradient(180deg, rgba(98, 98, 98, 0.5) 0%, rgba(217, 217, 217, 0.25) 100%)', borderRadius: '18px', border: '1.5px solid rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(11px)' }}>
                    <Row className='p-2 ' style={{display:'flex', justifyContent:''}}>
                        <Col xs={12} className='mb-2 ms-2 '>
                            <div style={{width: '100%', height: '100%', color: 'white', fontSize: 13.26, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Bolero Puckup<br/>(TN41 2992)</div>
                        </Col>
                        <Col xs={12} className='mb-3'>
                            <img style={{width: '100%', height: '100%'}} src="images/car-1.png" />
                        </Col>
                        <Col xs={12} className='ms-4'>
                        <div style={{width: '100%', height: '100%', position: 'relative'}}>
                            <div style={{width: 109.25, height: 28.73, left: 0, top: 0, position: 'absolute', background: '#459444', borderRadius: 5.25}} />
                            <div style={{left: 35.27, top: 5.63, position: 'absolute', color: 'white', fontSize: 11.26, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Select</div>
                        </div>
                        </Col>
                        
                    </Row>
                  </div>
                </Col>
                <Col>
                <div style={{ width: '100%', height: '200px', background: 'linear-gradient(180deg, rgba(98, 98, 98, 0.5) 0%, rgba(217, 217, 217, 0.25) 100%)', borderRadius: '18px', border: '1.5px solid rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(11px)' }}>
                    <Row className='p-2 ' style={{display:'flex', justifyContent:''}}>
                        <Col xs={12} className='mb-2 ms-2 '>
                            <div style={{width: '100%', height: '100%', color: 'white', fontSize: 13.26, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Bolero Puckup<br/>(TN41 2992)</div>
                        </Col>
                        <Col xs={12} className='mb-3'>
                            <img style={{width: '100%', height: '100%'}} src="images/car-1.png" />
                        </Col>
                        <Col xs={12} className='ms-4'>
                        <div style={{width: '100%', height: '100%', position: 'relative'}}>
                            <div style={{width: 109.25, height: 28.73, left: 0, top: 0, position: 'absolute', background: '#459444', borderRadius: 5.25}} />
                            <div style={{left: 35.27, top: 5.63, position: 'absolute', color: 'white', fontSize: 11.26, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Select</div>
                        </div>
                        </Col>
                        
                    </Row>
                  </div>
                </Col>
                <Col>
                <div style={{ width: '100%', height: '200px', background: 'linear-gradient(180deg, rgba(98, 98, 98, 0.5) 0%, rgba(217, 217, 217, 0.25) 100%)', borderRadius: '18px', border: '1.5px solid rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(11px)' }}>
                    <Row className='p-2 ' style={{display:'flex', justifyContent:''}}>
                        <Col xs={12} className='mb-2 ms-2 '>
                            <div style={{width: '100%', height: '100%', color: 'white', fontSize: 13.26, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Bolero Puckup<br/>(TN41 2992)</div>
                        </Col>
                        <Col xs={12} className='mb-3'>
                            <img style={{width: '100%', height: '100%'}} src="images/car-1.png" />
                        </Col>
                        <Col xs={12} className='ms-4'>
                        <div style={{width: '100%', height: '100%', position: 'relative'}}>
                            <div style={{width: 109.25, height: 28.73, left: 0, top: 0, position: 'absolute', background: '#459444', borderRadius: 5.25}} />
                            <div style={{left: 35.27, top: 5.63, position: 'absolute', color: 'white', fontSize: 11.26, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Select</div>
                        </div>
                        </Col>
                        
                    </Row>
                  </div>
                </Col>
                <Col>
                <div style={{ width: '100%', height: '200px', background: 'linear-gradient(180deg, rgba(98, 98, 98, 0.5) 0%, rgba(217, 217, 217, 0.25) 100%)', borderRadius: '18px', border: '1.5px solid rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(11px)' }}>
                    <Row className='p-2 ' style={{display:'flex', justifyContent:''}}>
                        <Col xs={12} className='mb-2 ms-2 '>
                            <div style={{width: '100%', height: '100%', color: 'white', fontSize: 13.26, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Bolero Puckup<br/>(TN41 2992)</div>
                        </Col>
                        <Col xs={12} className='mb-3'>
                            <img style={{width: '100%', height: '100%'}} src="images/car-1.png" />
                        </Col>
                        <Col xs={12} className='ms-4'>
                        <div style={{width: '100%', height: '100%', position: 'relative'}}>
                            <div style={{width: 109.25, height: 28.73, left: 0, top: 0, position: 'absolute', background: '#459444', borderRadius: 5.25}} />
                            <div style={{left: 35.27, top: 5.63, position: 'absolute', color: 'white', fontSize: 11.26, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Select</div>
                        </div>
                        </Col>
                        
                    </Row>
                  </div>
                </Col>
                <Col>
                <div style={{ width: '100%', height: '200px', background: 'linear-gradient(180deg, rgba(98, 98, 98, 0.5) 0%, rgba(217, 217, 217, 0.25) 100%)', borderRadius: '18px', border: '1.5px solid rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(11px)' }}>
                    <Row className='p-2 ' style={{display:'flex', justifyContent:''}}>
                        <Col xs={12} className='mb-2 ms-2 '>
                            <div style={{width: '100%', height: '100%', color: 'white', fontSize: 13.26, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Bolero Puckup<br/>(TN41 2992)</div>
                        </Col>
                        <Col xs={12} className='mb-3'>
                            <img style={{width: '100%', height: '100%'}} src="images/car-1.png" />
                        </Col>
                        <Col xs={12} className='ms-4'>
                        <div style={{width: '100%', height: '100%', position: 'relative'}}>
                            <div style={{width: 109.25, height: 28.73, left: 0, top: 0, position: 'absolute', background: '#459444', borderRadius: 5.25}} />
                            <div style={{left: 35.27, top: 5.63, position: 'absolute', color: 'white', fontSize: 11.26, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Select</div>
                        </div>
                        </Col>
                        
                    </Row>
                  </div>
                </Col>
                <Col>
                <div style={{ width: '100%', height: '200px', background: 'linear-gradient(180deg, rgba(98, 98, 98, 0.5) 0%, rgba(217, 217, 217, 0.25) 100%)', borderRadius: '18px', border: '1.5px solid rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(11px)' }}>
                    <Row className='p-2 ' style={{display:'flex', justifyContent:''}}>
                        <Col xs={12} className='mb-2 ms-2 '>
                            <div style={{width: '100%', height: '100%', color: 'white', fontSize: 13.26, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Bolero Puckup<br/>(TN41 2992)</div>
                        </Col>
                        <Col xs={12} className='mb-3'>
                            <img style={{width: '100%', height: '100%'}} src="images/car-1.png" />
                        </Col>
                        <Col xs={12} className='ms-4'>
                        <div style={{width: '100%', height: '100%', position: 'relative'}}>
                            <div style={{width: 109.25, height: 28.73, left: 0, top: 0, position: 'absolute', background: '#459444', borderRadius: 5.25}} />
                            <div style={{left: 35.27, top: 5.63, position: 'absolute', color: 'white', fontSize: 11.26, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Select</div>
                        </div>
                        </Col>
                        
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className='ms-5' xs={12}>
                <Row >
                    <Col style={{marginTop:"-100px"}} xs={12} >
                        <div style={{textAlign: 'start', color: '#87C75C', fontSize: 29, fontFamily: 'Poppins', fontWeight: '500', lineHeight: 11.98, wordWrap: 'break-word'}}>Details</div>
                    </Col>
                    <Col style={{marginTop:"-300px"}} className='ms-5' xs={12}>
                    <div style={{textAlign: 'start', color: 'white', fontSize: 29, fontFamily: 'Poppins', fontWeight: '500', lineHeight: 11.98, wordWrap: 'break-word'}}>Select the Cargo that you want to transport</div>
                    </Col>
                    <Col style={{marginTop:"-100px"}} >
                    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle style={{width: " 300px", height:"50px", marginLeft:"300px",backgroundColor:"Green"}} id="dropdown-basic">
        { selectedOption || 'Select Fruit'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="apple">Apple</Dropdown.Item>
        <Dropdown.Item eventKey="banana">Banana</Dropdown.Item>
        <Dropdown.Item eventKey="orange">Orange</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                    </Col>
                    <Col xs={12}>
                        <div style={{width:"10%",marginRight:"-300px",background: '#459444', borderRadius: 12.61, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15.76, display: 'inline-flex'}}>
                        <div style={{width: '100%', textAlign: 'center', color: 'white', fontSize: 25.21, fontFamily: 'Noto Sans', fontWeight: '400'}}>Go</div>
                        </div>
                    </Col>
                </Row>
            </Col>
          </Row>
        </div>
    </Container>
  );
}

export default Main;