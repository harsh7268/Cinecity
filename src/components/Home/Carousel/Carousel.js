import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import { FaChevronRight,FaChevronLeft } from 'react-icons/fa';
import axios from "axios";
import CarouselItem from './CarouselItem';
import Spiner from '../../MainItem/Spiner';

const PreviousBtn = (props) =>{
    
   const {className,onClick,topBar} = props;
    return (
          <div className={className}  onClick={onClick}>
           <FaChevronLeft style={{color:'white',zIndex:'2',fontSize:'2rem'}}/>
          </div>  
    )
}

const NextBtn = (props) =>{
    const {className,onClick} = props;
    return (
      <div  className={className}  onClick={onClick}>
        <FaChevronRight style={{color:'white',zIndex:'2',fontSize:'2rem'}} />
      </div>
    )
}


export default function Carousel(props) {

  const {topBar,type,category,time,language,mainFunc,country} =props;
 const [content,setContent] = useState([]);
 const [typeValid,setTypeValid]=useState(false);
 const [loading,setLoading] = useState(true);

  const fetchData = async () =>{
    topBar(30);
    setLoading(true);
    if(language==='hp'){
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/${type}/${category}/${time}?api_key=4750523db0d1c5cd05c4585cdac5a1c5`
      );
      topBar(70);
      setContent(data.results);
      setTypeValid(false);
      setLoading(false);
    }
    else{
      setLoading(true);
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/${type}/${category}?api_key=4750523db0d1c5cd05c4585cdac5a1c5&with_original_language=${language}`
        );
        topBar(70);
        setContent(data.results);
        setTypeValid(true);
        setLoading(false);
    }
   
     topBar(100);
  }

  useEffect(() =>{
   fetchData();
  },[])
  
 
    const settings1 = {
        dots: false,
        arrows:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        prevArrow:<PreviousBtn />,
        nextArrow:<NextBtn />,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows:false
              },
            },

        ] 
        
      };
  return (
    <>   
      {loading && <Spiner/>}
  <div  className='container'>
     <div style={{backgroundColor:'#030B17'}}>
      <Slider {...settings1}>  
    {
       content &&  content.map((c) => (
        <CarouselItem
        key={c.id}  
        id={c.id} 
       
        title={c.title || c.name} 
        date={c.first_air_date || c.release_date} 
        media_type={c.media_type} 
         backdrop_path={c.backdrop_path} 
        overview={c.overview} 
        type={typeValid===false?c.media_type:category}
        mainFunc={mainFunc} 
        country={country}
        />
      ))
    }
    
      
      </Slider>
      </div>
    </div>
  
    </>
  )
}