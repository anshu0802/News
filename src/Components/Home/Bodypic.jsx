import React from 'react'
import heart from '../image/heart.png'
import './bodypic.scss'
import { AiFillQuestionCircle } from 'react-icons/ai';
import { FcSurvey} from 'react-icons/fc';
import { BsFillCalculatorFill} from 'react-icons/bs';
function Bodypic() {
    return (
    <>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
    <div className='onee'><p className='ln'>Latest News</p>

<div className='box11'>Lorem Ipsum is simply dummy text of the printing
 and typesetting industry. Lorem Ipsum has been the industry's standard dummy
 Lorem Ipsum is simply dummy text of the printing
 and typesetting industry. Lorem Ipsum has been the industry's standard dummy
 Lorem Ipsum has been the industry's standard dummy
 Lorem Ipsum is simply dummy text of the printing
 and typesetting industry. Lorem Ipsum has been the industry's standard dummy</div>
    </div>
    <div className='twoo'>
<img src={heart} className="heart" alt='heart'/>
</div>
    <div className='threee'>
    
<div className='box33'><AiFillQuestionCircle/><div className='bold'> Lorem :</div><div>printing
 and typesetting</div></div>
 <hr style={{

color: '#545151',
width:'90%',
height: .5,

}}/>
<div className='box33'><FcSurvey/><div className='bold'> Lorem :</div><div>printing
 and typesetting</div></div>
 <hr style={{

color: '#545151',
width:'90%',
height: .5,

}}/>
<div className='box33'><BsFillCalculatorFill/><div className='bold'> Lorem :</div><div>printing
 and typesetting</div></div>
    </div>
   
  </div>
  <div className='tab'>Social Network for doctors-A special feature on Hidoc Dr.
  <button>Visit</button>
  </div>

    </>
   );
}

export default Bodypic;