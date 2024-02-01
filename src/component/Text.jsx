import React, { useState } from 'react'
import Draggable from 'react-draggable'

function Text() {
    const [value, setValue] = useState("DoubleClick to Edit");
    const [editModeOn, editModeOff] = useState(false);

    return (
        <div className='add-text'>
            <Draggable>
                {
                    editModeOn ? (<input type="text" placeholder='I am a text' style={{ cursor: "pointer", position: "absolute" }} onDoubleClick={(e)=>editModeOff(false)} onChange={(e)=> setValue(e.target.value)}/>) : 
                    (
                        <h3 style={{ cursor: "pointer", position: "absolute" }} onDoubleClick={(e)=>editModeOff(true)}>{ value }</h3>
                    )
                       
                        
           }

        </Draggable>
    </div >
  )
}

export default Text
