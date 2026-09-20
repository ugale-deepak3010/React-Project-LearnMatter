import React, { useState } from 'react'

function SelfDataOrConditionalRendering() {

  var[isRed, updateIsRed] =      useState(false);

  return (
    <div>
        <hr></hr>
        <br></br>

        <button
     className={
                    `${ isRed === false ? "bg-red-600" : "bg-green-600"}`
            } 

        onClick={()=>{
            updateIsRed(!isRed);
        }}
     
     >            
        Click me to change the color

        </button>



    </div>
  )
}

export default SelfDataOrConditionalRendering