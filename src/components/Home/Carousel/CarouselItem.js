import React from 'react'
import './CarouselItem.css';
import CarouselItemModel from './CarouselItemModel';
import Model from './CarouselItemModel';
import { Link} from "react-router-dom";

export default function CarouselItem(props) {
    const {
        id,
        title,
        date,
        media_type,
        backdrop_path,
        overview,
        mainFunc,
        type,
        country
    } = props;

    const func = () =>{
      mainFunc(id,  type);
      if(type==='tv'){
        country('Tv-Show');
         } else if(type==='movie'){
           country('Movie');
         } else if(type==='person'){
           country('People');
         }
    }
   
  return (
    <Link to={`/${id}`}>
    <div>
            <div className='content'  onClick={func} key={id}>
              <div className="contentArticle">
                <h2 style={{color:'#fff'}}>{title}</h2>
               <CarouselItemModel media_type={media_type} id={id} key={id} date={date}/>
                <p>{overview.slice(0,250)}</p>
              </div>
  
            <img src={backdrop_path&&backdrop_path!==undefined?`https://image.tmdb.org/t/p/w500/${backdrop_path}`:`https://images.indianexpress.com/2021/06/missing-7591.jpg`} alt=""  />
            
          </div>
          </div>
          </Link>
  )
}