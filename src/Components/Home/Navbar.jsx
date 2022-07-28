import React from 'react';
import logo from '../image/hidoc.jpg'
import './navbar.scss'
import { AiOutlineTrademarkCircle} from 'react-icons/ai';
import { BiTrophy } from 'react-icons/bi';

export default function Navbar() {
  
    return (
    <>
    <div className='first'>
      <img src={logo} className="log" alt='logo'/>
      <ul> 
      <li><a>Social Network</a></li>
      <li><a>|</a></li>
      <li><a>Demo</a></li>
      <li><a>|</a></li>
      <li><a>Drug DataBase</a></li>
      <li><a>|</a></li>
      <li><a>Article</a></li>
      <li><a>|</a></li>
      <li><a>News</a></li>
      <li><a>|</a></li>
      <li><a>Quizzes</a></li>
      <li><a>|</a></li>
      <li><a>Survesys</a></li>
      <li><a>|</a></li>
      <li><a>Drug Interaction</a></li>
      <li><a>|</a></li>
      <li><a>Disease Database</a></li>

      </ul>
      
     <div className='user'>< AiOutlineTrademarkCircle size='22px'/></div>
     < BiTrophy size='22px'/>
      <span className='point'>236</span>
     
    </div>
    </>
  )
}
