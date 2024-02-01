import React, { useEffect, useState } from 'react'
import MemeCard from '../component/Card';
import { getMemesData } from '../api';


function Home() {
    const [meme, setMeme] = useState([]);

    useEffect( () => {
        getMemesData().then((memes) => setMeme(memes.data.memes));        
    }, [])
    return (
        <div>
            <h1 className='text-center'>Meme Generator</h1>
            {
            meme?
            (
                <div className='row m-5'>
                {
                    meme.map((element) =><MemeCard name={element.name} img={element.url} />)
                }
                 </div>
            )
             :
            (
              <div>Loading...</div>
            )
            }
        </div>
    )
}

export default Home