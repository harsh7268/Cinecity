import React from 'react';
import {MdLanguage,MdOutlineSubtitles} from 'react-icons/md'
import {FaFacebookSquare,FaTwitter,FaInstagram,FaImdb,FaStar} from 'react-icons/fa';
import {BiRupee} from 'react-icons/bi'
import {GrStatusCriticalSmall} from 'react-icons/gr';
import './CastCrew.css';
import {Link} from 'react-router-dom'

export default function CastCrew(props) {
    const {cast,crew,externalId,content,production,mainFunc,country1}  = props;
    const func = (id,type,known_for,iden) =>{
      mainFunc(id,type,known_for,iden);
      if(type==='tv'){
        country1('Tv-Show');
         } else if(type==='movie'){
           country1('Movie');
         } else if(type==='person'){
           country1('People');
         }
    }
     
  return (
    <div>
       <div className="detail2">
      
      <div className="crew">
      <div className='box'>
         <p className='detail2head'>Full Cast</p>
       <div class='castDetail' >
        {
          cast.map((c)=>(
            <Link to={`/${c.id}`}>
         <div className="cast"  onClick={ () => {func(c.id,'person',false,'cast')}}>
        <img src={c.profile_path&&c.profile_path!==undefined?`https://image.tmdb.org/t/p//w500/${c.profile_path}`:`https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg`} alt="" />
        <div className="crewContent">
        <span className='name'>{c.name?c.name:'Unknown'}</span>
        <span>{c.character?c.character:'Unknown'}</span>
        </div>
        </div>
       </Link>
        ))
        }
        </div>
       </div>
 
       <div className='box'>
         <p className='detail2head'>Full Crew</p>
       <div class='castDetail' >
       {
         crew.map((c)=>(
          <Link to={`/${c.id}`}>
         <div className="cast" onClick={ () => {func(c.id,'person',false,'crew')}}>
        
        <img src={c.profile_path&&c.profile_path!==undefined?`https://image.tmdb.org/t/p//w500/${c.profile_path}`:`https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg`} alt="" />
        <div className="crewContent">
        <span className='name'>{c.name?c.name:'Unknown'}</span>
        <span>{c.character?c.character:''}</span>
        </div>
       
        </div>
        </Link>
         ))
       }
       
       </div>
       </div>
 
       </div>
       <div className="socialLogo">
       <div className="socialIcon">
         { externalId.facebook_id &&
         <a target="_blank" href={`https://www.facebook.com/${externalId.facebook_id}`}>
          <FaFacebookSquare/>
          </a>
         }
         { externalId.twitter_id &&
          <a target="_blank" href={`https://www.twitter.com/${externalId.twitter_id }`}>
          <FaTwitter/>
          </a>
         }
         { externalId.instagram_id &&
          <a target="_blank" href={`https://www.instagram.com/${externalId.instagram_id }`}>
          <FaInstagram/>
          </a>
        }
        {externalId.imdb_id  &&
          <a target="_blank" href={`https://www.imdb.com/title/${externalId.imdb_id }`}>
          <FaImdb/>
          </a>
       }
        </div>
        <div className="title">
      <p style={{fontWeight:'bold'}}>Original Title</p>
        <p><MdOutlineSubtitles style={{color:'yellow'}} /> {content.original_title?content.original_title:'Title'}</p>
        </div>
        <div className="status">
      <p style={{fontWeight:'bold'}}>Staus</p>
        <p><GrStatusCriticalSmall style={{color:'yellow'}}/> {content.status?content.status:'released'}</p>
        </div>
        <div className="language">
      <p style={{fontWeight:'bold'}}>Original Language</p>
        <p><MdLanguage style={{color:'yellow'}}/>{content.original_language?content.original_language:'en'}</p>
        </div>
        <div className="budget">
      <p style={{fontWeight:'bold'}}> Budget</p>
        <p><BiRupee style={{color:'yellow'}}/>{content.budget?content.budget:'10000000'}</p>
        </div>
        <div className="reveneu">
      <p style={{fontWeight:'bold'}}> Revenue</p>
        <p> <BiRupee style={{color:'yellow'}}/> {content.revenue?content.revenue:'320000000'}</p>
        </div>
        <div className="keyword">
      <p style={{fontWeight:'bold'}}>Key Words</p>
        <p>Hello Name</p>
        </div>
        <div className="score">
      <p style={{fontWeight:'bold'}}>IMDB Rating</p>
        <p><FaStar style={{color:'yellow'}}/> <FaStar style={{color:'yellow'}}/> <FaStar style={{color:'yellow'}}/> {content.vote_average?content.vote_average:'7.4'}</p>
        </div>
        <div className="production">
      <p style={{fontWeight:'bold'}}>Production Companies</p>
 
       {
         production.map((c)=>(
           <div>
           
           <img src={c.logo_path&&c.logo_path!==undefined?`https:/image.tmdb.org/t/p/w500/${c.logo_path}`:`https://wallpaperaccess.com/full/1594534.jpg`} />
           
           </div>
         ))
 
       }
        </div>
 
       </div>
 
      </div>
 
     </div>
   
  )
}