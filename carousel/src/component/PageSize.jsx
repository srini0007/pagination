import React from 'react'

function PageSize({changeSize}) {
    const handleChange = (e)=>{
        if(e.target.value>=1 && e.target.value<=9){
          changeSize(parseInt(e.target.value));
        }
    }
  return (
    <div className="field">
      <center>
      <label>Enter Number of fields: </label>
      <input type='number' onChange={handleChange}></input>
      <br></br>
      <label className='desc'>(upto 9 values)</label>
      </center>
    </div>
  )
}

export default PageSize