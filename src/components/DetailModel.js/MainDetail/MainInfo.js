import React,{useState,useEffect} from 'react';
import './MainInfo.css';
import { SiMusescore } from 'react-icons/si';
import { FiList} from 'react-icons/fi';
import { BsFillSuitHeartFill,BsFillBookmarkFill,BsFillStarFill,BsFillPlayFill} from 'react-icons/bs';
import {MdCancel,MdLanguage,MdOutlineSubtitles} from 'react-icons/md';

export default function MainInfo(props) {
    const {content,trailerLink,trailerCancel,country,date,category,producer,director,writer,display,trailer} = props;
    const [overView,setOverView] = useState(null);
    useEffect(() =>{
       setOverView(content.overview);
   
    },[])
  return (
   <>
   <div className="detail1" style={{backgroundImage:`url(https://image.tmdb.org/t/p//w500/${content.backdrop_path})`}}>

<div className="detailImg">
 <img src={content.poster_path&&content.poster_path!==undefined?`https://image.tmdb.org/t/p//w500/${content.poster_path}`:`https://media.istockphoto.com/vectors/missing-person-milk-carton-vector-id507773587?k=20&m=507773587&s=612x612&w=0&h=FRVHzYJRUigco0DK6fNgwnzX9AgdMNhgZH6Zy5phFg4=`} alt="" />
</div>

<div className="detailContent1">
  <div>
 <h1>{content.title || content.name} ({date===0?'':date})</h1>
<p>NR {content.release_date} ({country}) . {category.map((c)=>( <span> {c} ,</span>))} {(content.runtime-content.runtime%60)/60}h {content.runtime%60}m</p>
 </div>
 <div className="detailContent1Icons">
   <div className="user">
 <SiMusescore />
 <p style={{fontSize:'1rem'}}>User <br /> Score</p>
 </div>
 <div className="mainList">
 <div className="list">
   <FiList/>
 </div>
 <div className="list">
   <BsFillSuitHeartFill/>
 </div>

 <div className="list">
   <BsFillBookmarkFill/>
 </div>
 <div className="list">
   <BsFillStarFill/>
 </div>
 </div>
 <div className="play"  onClick={trailerLink}>
   <div class='trailer'>
     <BsFillPlayFill/>
   </div>
   <span>
    Play Trailer
    </span>
 </div>
 </div>
<p style={{fontStyle:'italic',color:'rgb(206, 191, 191)',fontSize:'1.2rem'}}>{content.tagline!==''?content.tagline:'this is heart of cinema'}</p>
<p style={{fontWeight:'bold'}}>Overview</p>
<p className='overViews' > {content.overview?content.overview.slice(0,250):'Overview is not found sorry please try another way of method for see the overview of particular movie/tv-show.'} ....</p>
<div className="writer">
  <div>
    <p><span style={{fontSize:'13px'}}>Director</span> <br/> <span style={{fontWeight:'bold'}}>{director.name?director.name:'Unknown'}</span></p> 
  </div>
  <div>
    <p> <span style={{fontSize:'13px'}}>producer</span> <br /><span style={{fontWeight:'bold'}}>{producer.name?producer.name:'Unknown'}</span> </p> 
  </div>
  <div>
    <p><span style={{fontSize:'13px'}}>Writer</span> <br/> <span style={{fontWeight:'bold'}}>{writer.name?writer.name:'Unknown'}</span> </p> 
  </div>
</div>
</div>


</div> 

   </>
  )
}