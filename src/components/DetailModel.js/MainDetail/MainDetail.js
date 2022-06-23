import React,{useState,useEffect} from 'react';
import './MainDetail.css'
import CastCrew from './CastCrew';
import {MdCancel} from 'react-icons/md';

import axios from "axios";
import MainInfo from './MainInfo';
import Media from './Media';
import Slider from '../../Home/Slider/Slider';
import Person from './Person';
import Spiner from '../../MainItem/Spiner' 


export default function MainDetail(props) {
  const [content,setContent] = useState([]);
  const {id,topBar,type,mainFunc,knowsFor,iden,country1} = props;
  const [director,setDirector] = useState([]);
  const [writer,setWriter] = useState([]);
  const [producer,setProducer] = useState([]);
  const [country,setCountry] = useState(0);
  const [category,setCategory] =useState([]);
  const [date,setDate] = useState(0);
  const  [trailer,setTrailer] =  useState('');
  const [trailerKey,setTrailerKey] = useState('');
  const [display,setDisplay] = useState('none');
  const [cast,setCast] =useState([]);
  const [crew,setCrew] =useState([]);
  const [externalId,setExternalId]=useState([]);
  const [production,setProduction] = useState([]);
  const [loading,setLoading] = useState(true);
  const [loading1,setLoading1] = useState(true);
 
  let a='';
  let arr=[];
  let arr1=[];
  const trailerCancel = () =>{
    setDisplay('none');
  }
  const trailerLink = async () =>{  
   setDisplay('flex');
  setLoading1(true)
   const {data} = await axios.get(
    `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=4750523db0d1c5cd05c4585cdac5a1c5&append_to_response=credits`
    );
   
   let c='';
    setTrailerKey(data.results);
  
    let b=data.results;
    for(let l of b){
     if(l.type==='Trailer' ){
      c=l.key
    }
    else if(l.type==='Teaser'&&c===''){
      c=l.key
    }
    else if(l.type==='Clip'&&c===''){
      c=l.key
    }
     else if(l.type==='Featurette'&&c===''){
      c=l.key
    }
    }
  a=  `https://www.youtube.com/embed/${c}`;
  setTrailer(a);
  setLoading1(false);
  }
  const clip = async (x)=>{
  setLoading1(true);
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=4750523db0d1c5cd05c4585cdac5a1c5&append_to_response=credits`
      );
    
      setTrailerKey(data.results);
     if(x!==null){
        let y = `https://www.youtube.com/embed/${x}`;
        setTrailer(y);
        setDisplay('flex');
        console.log(trailer);
     }
    
    setLoading1(false);
  }
  const icon = async ()  =>{
    
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/external_ids?api_key=4750523db0d1c5cd05c4585cdac5a1c5&append_to_response=credits`
      );
      setExternalId(data);
      let s=data;
      console.log(s);
    
  }
  const fetchData = async () =>{
    topBar(30);
    setLoading(true);
    if(type!=='person'){
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=4750523db0d1c5cd05c4585cdac5a1c5&append_to_response=credits`
      );
   ;
      topBar(70);
      setContent(data);
      setProduction(data.production_companies) 
      setCast(data.credits.cast);
      setCrew(data.credits.crew)
      topBar(100);
    setLoading(false);
    arr=[];
    arr1=[];
    let x=0;
    let y=0;
    let z=0;
    for( let k of data.credits.crew ){
      if(k.known_for_department==='Directing' && k.department==='Directing' && x===0){
       
        x={name:k.name,id:k.id};
      }
      if(k.known_for_department==="Writing"  && k.department==='Writing'){
        
        
        y={name:k.name,id:k.id};
      }
      if(k.known_for_department==='Production'   && k.department==='Production'){
       
       
       z={name:k.name,id:k.id};
      }
    }
    for(let k of data.genres){
      arr1.push(k.name);
    }

    if(x!==0){
      setDirector(x);
    }
    else{
      setDirector({name:'harsh',id:'726891'})
    }
    if(y!==0){
      setWriter(y);
    }
    else{
      setWriter({name:'pathak',id:'726892'})
    }
    if(z!==1){
      setProducer(z);
    }
    else{
      setProducer({name:'Ashish',id:'726893'})
    }
    
 
    setCountry(data.production_countries[0].iso_3166_1);
    setCategory(arr1);
    setDate(data.release_date.slice(0,4));
  
  }
  else{
    topBar(30);
     setLoading(true);
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=4750523db0d1c5cd05c4585cdac5a1c5`
      );
    
      topBar(70);
      setContent(data);
     ;
     topBar(100);
     setLoading(false);
  }
  }
  

  useEffect(() =>{
   fetchData();
   icon();
   if(type!=='person'){
  
   clip(null);
   }
  
  },[])
  


  return (
    <div>
 {loading && <Spiner />}
 <div style={{display:loading===true?'none':''}} >
      { type!=='person' &&
   
    <div className='detail'>
     
  <MainInfo  content={content}  trailerLink={trailerLink} trailerCancel={trailerCancel} country={country} date={date} category={category} director={director} producer={producer} writer={writer} display={display} trailer={trailer} / >
  <CastCrew country1={country1} mainFunc={mainFunc} cast={cast} crew={crew} externalId={externalId}  content={content} production={production} />
  <Media topBar={topBar} trailerLink={trailerLink}  content={content} type={type} id={id} trailerKey={trailerKey} clip={clip} />  
  <Slider mainFunc={mainFunc} type={type}  title={type==='movie'?'Recomondation Movies':'Recomondation Tv Shows'} lng='hx' category={id} time='recommendations'/>
  <Slider mainFunc={mainFunc} type={type}  title={type==='movie'?'Similar Movies':'Similar Tv Shows'} lng='hx' category={id} time='similar'/>
 
  <div className="iframe" style={{display:display}} >
<div > 
 <span>Play Trailer</span>
 <span  className='iframeIcon' onClick={trailerCancel}>     
 <MdCancel />
 </span>
 </div>
 {loading1 && <Spiner />}
<iframe width="560" height="315" src={trailer} frameborder="0" allowfullscreen></iframe>   
</div>

</div>
  }

      { type==='person' &&
     
        <Person country1={country1} iden={iden} content={content} knowsFor={knowsFor} mainFunc={mainFunc} externalId={externalId} id={id} type={type} />

      }
     
  </div>
  </div>
  )
}