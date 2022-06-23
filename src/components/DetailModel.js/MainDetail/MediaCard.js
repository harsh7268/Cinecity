import React,{useState,useEffect} from 'react';
import './MediaCard.css';
import {BsFillPlayFill} from 'react-icons/bs';
import axios from "axios";

export default function MediaCard(props) {
    const {mediaData,mediaStyle,trailerLink,clip,iden} = props;
    const [mediaLength,setMediaLength] = useState(0);
 useEffect(()=>{
     console.log(mediaData.length);
     setMediaLength(mediaData.length);
     console.log(mediaLength);
 },[])

   
  return (
    <div>
  
    <div  className='mediaCard'>

      {  
         mediaData.map((c)=>(
      <div className="contentShow"  style={{width:mediaStyle.width}}> 
      { iden &&
       <img src={c.file_path&&c.file_path!==undefined?`https://www.themoviedb.org/t/p/original/${c.file_path}`:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg'} style={{width:mediaStyle.width}} alt="" />
      }
      { iden===false &&
         <img src={c.file_path} />
      }
       { mediaStyle.active &&
       <div className="contentShowIcon" >
         <div className='playBtn' onClick={() => {mediaStyle.identity===false?clip(c.key):trailerLink()}}>
         <BsFillPlayFill /> 
         </div>
       </div>
        }
     </div>

          ))
      }
    
    </div>

    </div>
  )
}