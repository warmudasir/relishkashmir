import React from 'react'

export default function MainBanner() {
  return (
    <div className="main" style={{display:'flex',textAlign:'center',justifyContent:'center',alignItems:'center',height:'100vh'}}>
    <div style={{color:'white',width:'300px'}}>
        <div className="top">
      <h1>Relish Kashmir</h1>
      <h5>Premium quality dry fruits and spices</h5>
      <p>Coming Soon....</p>
        </div>
        <div className="bottom" style={{position:'absolute',bottom:'0px'}}>
            <h4>Proprietor: Shayeeb Mohammad War</h4>
        </div>
    </div>
    </div>
  )
}
