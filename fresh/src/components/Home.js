import React from 'react'


function Home() {
  return (
    <div style={{width: '100%', height: '100%', position: 'relative', background: 'black'}}>
        <img style={{width: 300, height: 300, left: 672, top: 179, position: 'absolute'}} src="images/logo.png" />
        <div style={{left: 777, top: 556, position: 'absolute', color: '#87C75C', fontSize: 77.71, fontFamily: 'Poppins', fontWeight: '800', wordWrap: 'break-word'}}>FRESHIFY</div>
        <div style={{left: 767, top: 650.28, position: 'absolute', color: '#87C75C', fontSize: 29.82, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word'}}>Freshness Beyond Borders</div>
    </div>
  )
}

export default Home