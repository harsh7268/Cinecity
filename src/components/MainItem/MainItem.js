import React,{useEffect,useState} from 'react';
import axios from 'axios';
import SingleCard from './SingleCard';
import './MainItem.css';
import InfiniteScroll from "react-infinite-scroll-component";
import Spiner from './Spiner1';

export default function MainItem(props) {

    const {type,category,topBar,time,mainFunc,languages,footer,country} = props;
    const [typeValid,setTypeValid]=useState(false);
    const  [mediaType,setMediaType] = useState(type);
    const [page,setPage] = useState(1);
   const [totalResults,setTotalResults] = useState(0);
    const [content,setContent] = useState([]);
    const [loading,setLoading] = useState(true);
    const [ts,setTs]  =  useState(0);
  const fetchData = async () =>{
    topBar(30);
  
      setLoading(true);
      if(type==='trending'||time==='similar'||time==='recommendations'){
        const {data} = await axios.get(
          `https://api.themoviedb.org/3/${type}/${category}/${time}?api_key=4750523db0d1c5cd05c4585cdac5a1c5&page=${page}`
          );
          topBar(70);
          setContent(data.results);
          setTotalResults(data.total_results);
          if(time==='similar'||time==='recommendations'){
            setTypeValid(false);
            setTs(type);
          }
          else{
            setTypeValid(true);
          }
        
         
          
      }   else{
        if(languages==='hp'){
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/${type}/${category}?api_key=4750523db0d1c5cd05c4585cdac5a1c5&page=${page}`
      );
      topBar(70);
      setContent(data.results);
      setTotalResults(data.total_results);
      setTypeValid(false);
      if(type!=='discover'){
        setTs(type);
      }
      else{
        setTs(category);
      }
    }
    else{
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/${type}/${category}?api_key=4750523db0d1c5cd05c4585cdac5a1c5&page=${page}&with_original_language=${languages}`
        );
        topBar(70);
        setContent(data.results);
        setTotalResults(data.total_results);
        setTypeValid(false);
        if(type!=='discover'){
          setTs(type);
        }
        else{
          setTs(category);
        }
    }

    }
   
     setLoading(false);
     topBar(100);
  }
  const fetchMoreData = async () =>{
    
          if(type==='trending'||time==='similar'||time==='recommendations'){
            const {data} = await axios.get(
              `https://api.themoviedb.org/3/${type}/${category}/${time}?api_key=4750523db0d1c5cd05c4585cdac5a1c5&page=${page+1}`
              );
              setContent(content.concat(data.results));
              setTotalResults(data.total_results);
             
             
          } 
          else{
            if(languages==='hp'){
              const {data} = await axios.get(
                `https://api.themoviedb.org/3/${type}/${category}?api_key=4750523db0d1c5cd05c4585cdac5a1c5&page=${page+1}`
                );
                setContent(content.concat(data.results));
                setTotalResults(data.total_results);
              }
              else{
                const {data} = await axios.get(
                  `https://api.themoviedb.org/3/${type}/${category}?api_key=4750523db0d1c5cd05c4585cdac5a1c5&page=${page+1}&with_original_language=${languages}`
                  );
                  setContent(content.concat(data.results));
                  setTotalResults(data.total_results);
              }
               
                
          }


    setPage(page+1);
   
    setLoading(false);
  }

  useEffect(() =>{
   fetchData();
   footer(false);
   if(type==='person'){
     country('People');
   }
   
   window.scrollTo(0, 0);
  },[])
  return (
    <div >
        {loading && <Spiner/>}
        <InfiniteScroll
          dataLength={content.length}
          next={fetchMoreData}
          hasMore={content.length!==totalResults}
          loader={<Spiner/>}
        >
        <div className="card">
      {
          content && content.map((c) =>(
              <SingleCard country={country} name={c.name}  type={typeValid===true?c.media_type:ts} mainFunc={mainFunc} key={c.id} title={c.title} backdrop_path={c.poster_path || c.backdrop_path  || c.profile_path} id={c.id} poster_path={c.poster_path  || c.profile_path} media_type={c.media_type} known_for={type==='person'?c.known_for:false}/>
          ))
      }
    </div>
    </InfiniteScroll>
    </div>
  )
}