import React from 'react'
import './body.scss'
import device from '../image/device.jpg'
export default function Body() {
  return (
   <>
   <div className='body'>
   
   <div className='bodytop'>
   <p className='heading'>News</p>
   <img src={device} className="device" alt='logo'/>
   <div className='heading2'>News Heading will be here</div>
   <br />
   <p className='para'>We and our partners use cookies to store and access personal data 
   such as browsing data for purposes such as serving and personalizing 
   content and advertising and analyzing site traffic. You may find out more about the purposes
    for which we and our partners use cookies or exercise your preferences by clicking
     the ‘Cookie Settings’ button below. You can revisit your consent choices or withdraw 
     consent at any time by clicking the link to your cookie settings in our Cookie Policy.
      We work in coordination with an industry framework, signaling your preferences globally
       for all participating websites. You can adjust cookie preferences in Cookie Settings.We and our partners use cookies to store and access personal data 
   such as browsing data for purposes such as serving and personalizing 
   content and advertising and analyzing site traffic. You may find out more about the purposes
    for which we and our partners use cookies or exercise your preferences by clicking
     the ‘Cookie Settings’ button below. You can revisit your consent choices or withdraw 
     consent at any time by clicking the link to your cookie settings in our Cookie Policy.
      We work in coordination with an industry framework, signaling your preferences globally
       for all participating websites. You can adjust cookie preferences in Cookie Settings.</p>
       <br></br>
       <br></br>
       <a style={{color:'skyblue',
      fontStyle : 'italic',
      padding: '50px'
      }} href="">Read Full News</a>
    </div>
   </div>
   <br></br>
   <br></br><br></br>
   <hr style={{

    color: '#545151',
    width:'90%',
    height: .5,
    
}}/>
   </>
  )
}
