import React from 'react'
import axios from 'axios'

function Buttons({val}) {

  const showMsg= async(e)=>{

    let msg = await axios.get(`http://localhost:5000/api/page/${e.target.textContent}`);
    console.log(msg.data);
    document.getElementById("msg").textContent=msg.data;
  }

  return (
    <button className='but clickable' onClick={showMsg}>{val}</button>
  )
}

export default Buttons