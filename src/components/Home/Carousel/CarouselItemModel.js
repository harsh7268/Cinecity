import React,{useEffect,useState} from 'react';
import axios from "axios";

export default function CarouselItemModel(props) {
    const {media_type,id,date} = props;
    const [category,setCategory] = useState([]);
    const [language,setLanguage] = useState([]);
    const fetchTrending = async () =>{
        const {data} = await axios.get(
          `https://api.themoviedb.org/3/${media_type}/${id}?api_key=4750523db0d1c5cd05c4585cdac5a1c5&page=1`
          );
    
          setCategory(data.genres.splice(0,2));
          setLanguage(data.spoken_languages.splice(0,1))
         
      }
    useEffect(()=>{
       
       fetchTrending();
      
    },[])
  return (
    <div>
        {
         category.map((c)=>(
        <span key={c.id}>{c.name?c.name:'Unkown'}  . </span>
        ))   
        }
          {
         language.map((c)=>(
        <span key={c.id}> {c.english_name?c.english_name:'Unknown'} .  </span>
        ))   
        }
        <span> {date?date.slice(0,4):'Unknown'}</span>
    </div>
  )
}