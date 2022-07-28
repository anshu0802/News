import React from 'react'
import './bodytable.scss'
import device from '../image/device.jpg'
import second from '../image/second.jpg'

 export default function Bodytable() {
  return (
    <>
    <div className='center'>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
    <div className='one'>Latest News
    <br></br>
   <hr style={{

    color: '#545151',
    width:'90%',
    height: .5,
    
}}/>
<div className='box1'>Lorem Ipsum is simply dummy text of the printing
 and typesetting industry. Lorem Ipsum has been the industry's standard dummy</div>
 <hr style={{

color: '#545151',
width:'90%',
height: .5,

}}/>
<div className='box1'>Lorem Ipsum is simply dummy text of the printing
 and typesetting industry. Lorem Ipsum has been the industry's standard dummy</div>

 <hr style={{

color: '#545151',
width:'90%',
height: .5,

}}/>
 <div className='box1'>Lorem Ipsum is simply dummy text of the printing
 and typesetting industry. Lorem Ipsum has been the industry's standard dummy</div>
 <hr style={{

color: '#545151',
width:'90%',
height: .5,

}}/>
<div className='box1'>Lorem Ipsum is simply dummy text of the printing
 and typesetting industry. Lorem Ipsum has been the industry's standard dummy</div>
 <hr style={{

color: '#545151',
width:'90%',
height: .5,

}}/>
 <div className='box1'>Lorem Ipsum is simply dummy text of the printing
 and typesetting industry. Lorem Ipsum has been the industry's standard dummy</div>
    </div>
    <div className='two'>Trending Now
    <hr style={{

color: '#545151',
width:'90%',
height: .5,

}}/>
<img src={device} className="device" alt='logo'/>
<div className='box1'>Lorem Ipsum is simply dummy text of the printing
 and typesetting industry. Lorem Ipsum has been the industry's standard dummy</div>
 <hr style={{

color: '#545151',
width:'90%',
height: .5,

}}/>
<img src={second} className="second" alt='second'/>
<div className='box2'>Lorem Ipsum is simply dummy text of the printing
 and typesetting industry. Lorem Ipsum has been the industry's standard dummy</div>
</div>
    <div className='three'>Explore More in News
    <hr style={{

color: '#545151',
width:'90%',
height: .5,

}}/>
<div className='box3'><div className='bold'> Lorem Ipsum is simply dummy text </div>of the printing
 and typesetting industry. Lorem Ipsum has been the industry's standard dummy</div>
 <hr style={{

color: '#545151',
width:'90%',
height: .5,

}}/>
<div className='box3'><div className='bold'> Lorem Ipsum is simply dummy text </div>of the printing
 and typesetting industry. Lorem Ipsum has been the industry's standard dummy</div>
 <hr style={{

color: '#545151',
width:'90%',
height: .5,

}}/>
<div className='box3'><div className='bold'> Lorem Ipsum is simply dummy text </div>of the printing
 and typesetting industry. Lorem Ipsum has been the industry's standard dummy</div>
 <button className='button'>Explore HiDocr</button>
    </div>
   
  </div>
  </div>
  <div className='title'>
  <p>What's More on HIdoc Dr.</p></div>
    </>
  )
}