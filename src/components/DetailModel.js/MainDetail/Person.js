import React, { useEffect, useState } from 'react';
import './Person.css';

import axios from "axios";
import {Link} from 'react-router-dom';
import {FaFacebookSquare,FaTwitter,FaInstagram,FaImdb,FaStar} from 'react-icons/fa';
export default function Person(props) {
    const {content,knowsFor,mainFunc,externalId,type,id,iden,country1} = props;
    const [allCredits,setAllCredits] = useState([]);
   
  
       const func = (id,type)=>{
        console.log(id,type);
        mainFunc(id,type);
         
        if(type==='tv'){
            country1('Tv-Show');
             } else if(type==='movie'){
               country1('Movie');
             } else if(type==='person'){
               country1('People');
             }
    }

    const credits = async () =>{
      
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/${type}/${id}/combined_credits?api_key=4750523db0d1c5cd05c4585cdac5a1c5`
            );
            if(iden==='cast'){
            setAllCredits(data.cast);
            }
            else{
                setAllCredits(data.crew);
            }
            console.log(allCredits);
      
           
    }
 
    useEffect(()=>{
                credits();     
               
               
    },[])
  
  return (
    <div className='person'>
    
      <div className="leftSlider">
        <img src={content.profile_path&&content.profile_path!==undefined?`https://image.tmdb.org/t/p/original${content.profile_path}`:`https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg`} alt="" />
        <div className="leftSliderContent">
        <div className="leftSliderIcon">
          { externalId.instagram_id &&
            <a href={`https://www.instagram.com/${externalId.instagram_id}`} target="_blank">
            <FaInstagram />
            </a>
        }
        { externalId.facebook_id &&
            <a href={`https://www.facebook.com/${externalId.facebook_id}`} target="_blank">
            <FaFacebookSquare />
            </a>
     }
     {  externalId.twitter_id &&
            <a href={`https://www.twitter.com/${externalId.twitter_id}`} target="_blank">
            <FaTwitter />
            </a>
     }
     
        </div>
        <h2>Personal Info</h2>
        <div>
            <h4>Know For</h4>
            <span>{content.known_for_department?content.known_for_department:'Unknown'}</span>
        </div>
        <div>
            <h4>Known Credits</h4>
            <span>{allCredits.length?allCredits.length:'Unknown'}</span>
        </div>
        <div>
            <h4>Gender</h4>
            <span>{content.gender===1?'Female':'Male'}</span>
        </div>
        <div>
            <h4>Birthday</h4>
            <span>{content.birthday?content.birthday:'Unknown'}</span>
        </div>
        <div>
            <h4>Place of Birth</h4>
            <span>{content.place_of_birth?content.place_of_birth:'Unknown'}</span>
        </div>
        <div className='alsoKnowContainer'>
            <h4>Also Known As</h4>
            <div className='alsoKnow'>
               
            </div>
        </div>
       
        </div>
      </div>
      <div className="rightSlider">
      <h1>{content.name}</h1>
      <div className="bio">
          <h3 style={{marginBottom:'1rem'}}>Biography</h3>
          <p>{content.biography?content.biography:'Biography is not found sorry please try another way of method for see the biography of particular person.'}</p>
      </div>
      { knowsFor &&
          <div className='rightSliderBox'>
         <p className='rightSliderHead'>Knows For</p>
       <div class='rightSlidertDetail' >
       { knowsFor &&
          knowsFor.map((c)=>(
            <Link to={`/${c.id}`}>
         <div className="rightSliderCast" onClick={() => {func(c.id,c.media_type)}}>
        <img src={c.poster_path&&c.poster_path!==undefined?`https://image.tmdb.org/t/p//w500/${c.poster_path}`:`https://media.istockphoto.com/vectors/missing-person-milk-carton-vector-id507773587?k=20&m=507773587&s=612x612&w=0&h=FRVHzYJRUigco0DK6fNgwnzX9AgdMNhgZH6Zy5phFg4=`} alt="" />
       
        </div>
        </Link>

        ))
          }
       
         </div>
       </div>
    }
       <div>
           <h2>{content.known_for_department}</h2>
       <div className="rightSliderData">
           {
               allCredits.map((c)=>(
                <Link to={`/${c.id}`}>
                <div className="rightSliderDataImg" key={c.id} onClick={() => {func(c.id,c.media_type)}}>
                    <img src={c.poster_path&&c.poster_path!==undefined?`https://image.tmdb.org/t/p//w500/${c.poster_path}`:`https://media.istockphoto.com/vectors/missing-person-milk-carton-vector-id507773587?k=20&m=507773587&s=612x612&w=0&h=FRVHzYJRUigco0DK6fNgwnzX9AgdMNhgZH6Zy5phFg4=`} alt="" />
                </div>
                </Link>
               ))
           }
      
      </div>
      </div>
      </div>

    </div>
  )
}