import React, { useEffect,useRef,useState} from 'react'
import './Video.css'
import video from '../../assets/vid.mp4' 
const Video = ({playState,setPlayState}) => {
    
    const player=useRef(null);

    const closePlayer = (e) =>{
        if(e.target===player.current){
            setPlayState(false);
        }
    }
  
    return (
    <div className={ `video-player ${playState?'':'hide'}`}ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Video
