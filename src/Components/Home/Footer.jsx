import React from 'react'
import './footer.scss'
import logo from '../image/logopng.png'
import { AiFillFolderOpen } from 'react-icons/ai';
import { MdOutlineSocialDistance} from 'react-icons/md';
import { AiFillFileText} from 'react-icons/ai';
import { BsFacebook} from 'react-icons/bs';
import { BsLinkedin} from 'react-icons/bs';
import { FaInstagramSquare} from 'react-icons/fa';
import { BsYoutube} from 'react-icons/bs';
import { BsFillCalculatorFill} from 'react-icons/bs';
import { GiPodiumWinner} from 'react-icons/gi';

function Bodypic() {
    return (
    <>
    <div className='main'>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
    <div className='oneee'>

    <img src={logo} className="flogo" alt='flogo'/>
<div className='bleft'>Fastest Growing Medical Platform for<br></br> Doctors</div>
<div className='logos'>
<div className='logos1'>
<BsFacebook/>
<div className='logos2'>
<BsLinkedin/></div>
<div className='logos3'>
<FaInstagramSquare/></div>
<div className='logos4'><BsYoutube/></div>
</div>


    </div>
    </div>
    
    <div className='twooo'>
        <div className='bmiddle'>
<div className='reach'>Reach Us</div>
<div className='bmid'>Please Contact below details for any other<br></br> information</div>
<div className='email'>Email:</div>
<div className='add'>varun@hidoc.co</div>
<div className='email'>Address:</div>
<div className='add'>Hidoc Dr.Inc, 2055 Limestone Rd, STE 200-C, Wilmington, DE, 19808, United States</div>



        </div>

</div>
    <div className='threeee'>
<div className='blast'>HIDOC DR.FEATURES</div>
<div className='llogo'>

<div className='llogo1'>
<AiFillFolderOpen/>
    </div>
    <div className='llogo2'>
    <MdOutlineSocialDistance/>
</div>
<div className='llogo3'>
<AiFillFileText/>
</div>
<div className='llogo4'>
    <BsFillCalculatorFill/>
</div>
<div className='llogos'>
</div>
</div>

  </div>
  </div>
  </div>
  <div className='last'>@Copy Right Hidoc R Terms&Condition |Privacy Policy</div>
    </>
   );
}

export default Bodypic;