import React from 'react';
import user from "../images/user.png";

const ContactCard = (props) => {

    const { id, name ,email } = props.contact;

    return(
  
        <div className='item' style={{ display:"flex", position:"relative"}}>
            <img className='ui avatar image' src={user} alt='user' />
            <div className='content'>
                <div className='header'>{name}</div>
                <div>{email}</div>
             </div>
             <div style={{position:"absolute", right:"5px"}}>
             <i 
                className='trash alternate outline icon right' 
                style={{color:'red', marginTop:"7px"}} 
                onClick={() => props.clickHandler(id)}
             ></i>
             </div>
        </div>
    );
}

export default ContactCard;