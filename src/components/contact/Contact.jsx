import React from 'react';
import "./Contact.scss";
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';



const Contact = () => {
  return (
    <div className='contact'>
      <div className="wrapper">

<span>GET IN TOUCH WITH US</span>
<div className='mail'>
    <input type="text" placeholder="Enter your email...." />
    <button>JOIN US </button> 
</div>
<div className='icons'>
<FacebookSharpIcon /> 
<TwitterIcon />
<GoogleIcon />
<InstagramIcon />
<PinterestIcon />

</div>
      </div>
    </div>
  )
}

export default Contact
