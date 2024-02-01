import React, { useState ,createRef } from 'react'
import {exportComponentAsJPEG} from 'react-component-export-image'
import Button from 'react-bootstrap/Button';
import Text from '../component/Text';



function Edit() {
    const params = new URLSearchParams(window.location.search).get('url');
    const memeRef = createRef();
    const [count, setCount] = useState(0);

    const addText = () => {
        setCount(count + 1);
    }

    return (
        <div className='Edit-container'>
            <div ref={memeRef} style={{display:"flex"}}> 
                <img src={params} alt="image" style={{ width: "400px" }} />
                {
                    Array(count).fill(0).map((e) =>(<Text />))
                }
            </div>
            <div className='button-container-edit'>
                <Button variant="primary" onClick={addText}>Add Text</Button>
                <Button variant="success" onClick={()=> exportComponentAsJPEG(memeRef )}>Save</Button>
            </div>
        </div>
    )
}

export default Edit