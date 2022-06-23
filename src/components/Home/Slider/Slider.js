
import React,{useEffect,useState}  from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import './Slider.css';
import { FaChevronRight,FaChevronLeft,FaLinkedinIn,FaTelegram,FaBabyCarriage } from 'react-icons/fa';
import SliderItem from './SliderItem';
import {BsArrowRightShort,BsArrowRight} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import Spiner from '../../MainItem/Spiner'


const PreviousBtn = (props) =>{
    const {className,onClick} = props;
    
     return (
           <div className={className}  onClick={onClick}>
            <FaChevronLeft style={{color:'white',zIndex:'2',fontSize:'2rem'}} />
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
 


export default function Cors(props) {

 const [loading,setLoading] =useState(true);
  const  {type,category,time,title,lng,mainFunc,id,footer,country} = props;
  const [typeValid,setTypeValid]=useState(false);
  const [ts,setTs] = useState(0);
  const [content,setContent] = useState([]);

  const fetchData = async () =>{
    if(type!=='trending'){
    if(lng==='hp'){
      setLoading(true);
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/${type}/${category}?api_key=4750523db0d1c5cd05c4585cdac5a1c5&page=1`
      );
      setContent(data.results);
      setLoading(false);
     
      
    } else if(lng==='hx'){
      setLoading(true);
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/${type}/${category}/${time}?api_key=4750523db0d1c5cd05c4585cdac5a1c5`
        );
        console.log(data.results);
        setContent(data.results);
        setLoading(false);
        
    }
    else{
      setLoading(true);
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/${type}/${category}?api_key=4750523db0d1c5cd05c4585cdac5a1c5&with_original_language=${lng}`
        );
        setContent(data.results);
        setLoading(false); 
      
    }
    setTypeValid(false);
    if(type==='discover'){
      setTs(category)
    }
    else{
      setTs(type);
    }
  }  else if(type==='trending')   {
    setLoading(true);
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/${type}/${category}/${time}?api_key=4750523db0d1c5cd05c4585cdac5a1c5&with_original_language=${lng}`
      );
      setContent(data.results);
      setTypeValid(true);
      setLoading(false);
      
  }

  

  }
  

  useEffect( () =>{
   fetchData();
  
  },[])


    const settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        initialSlide:0,
          prevArrow:<PreviousBtn />,
          nextArrow:<NextBtn />,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 5,
                speed: 300,
                arrows:false,
              },
            },
             {
              breakpoint: 980,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
                speed: 300,
                arrows:false,
              },
            },
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                speed: 300,
                arrows:false,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                speed: 300,
                arrows:false,
              },
            },
        ]
      };

  return (
    <div>
      {loading && <Spiner />}
      { content.length!==0 &&
    <div   className='SliderContainer' style={{display:loading===true?'none':'flex'}}>
      
      <div className="sliderContent">
        <span> {title}</span>
        <span >
     <Link to={type==='trending'||lng==='hx'?`/${type}/${category}/${time}`:`/${type}/${category}`}>
        <span  className='viewMore'> <span>View More</span> <span className='viewIcon'> <BsArrowRight/> </span> </span>
       </Link>
       </span>
      </div>
      <Slider {...settings}>
          {           
              content.map((c) =>(
                <div  key={c.d}>
                <div className="card">
                <SliderItem
                key={c.id}  
                id={c.id} 
                poster_path={c.poster_path || c.profile_path}
                title={c.title || c.name} 
                date={c.first_air_date || c.release_date} 
                media_type={c.media_type} 
                 backdrop_path={c.backdrop_path} 
                overview={c.overview}  
                mainFunc={mainFunc} 
                
                type={typeValid===true?c.media_type:ts}
                 known_for={type==='person'?c.known_for:false}  
                 name={c.name} 
                 country={country}
                
                />
                
                </div>
            </div>
              ))
          }
      </Slider>
    </div>
}
    </div>
  )
}
