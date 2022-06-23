import React,{useEffect,useState}  from 'react';
import axios from "axios";
import { Link} from "react-router-dom";
import './CountriesData.css'
import Spiner from '../MainItem/Spiner'

export default function CountriesData(props) {
  const {mainFunc1,footer,country} = props;
  const [loading,setLoading] = useState(true);
  const lng =  (a,b) =>{
    
     mainFunc1(a);
  
  }

    const [content,setContent] = useState([]);

    const fetchData = async () =>{
      setLoading(true);
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/configuration/languages?api_key=4750523db0d1c5cd05c4585cdac5a1c5`
        );
      
     
      let arr1 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
       
       let arr = [];
       for(let c of arr1){
       for(let k of data){
         if(k.english_name[0]===c){
           arr.push(k);
         }
       }
      }
      setContent(arr);
      setLoading(false);
      
    }
  
    useEffect(() =>{
     fetchData();
     footer(true);
     country('Languages');
     window.scrollTo(0, 0);
    },[])

  return (
    <div >
      { loading && <Spiner />   }
        <div className='countriesData'>
      {
           content.map((c)=>(
            
            <Link to={`/language/${c.english_name}`}  >
          <div onClick={ () => {lng(c.iso_639_1,c.english_name)}} key={c.iso_639_1}  className='countriesDataItem'  >{c.english_name}</div>
          </Link>
          
           ))
      }
      </div>

    </div>
  )
}