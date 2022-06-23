
import React,{useState,useEffect} from 'react';
import './Media.css';
import MediaCard from './MediaCard';
import axios from "axios";

let x;
export default function Media(props) {
  
  const {trailerLink,content,type,id,topBar,trailerKey,clip} = props;
 const [mediaData,setMediaData] = useState([]);
 const [iden,setIden] = useState(true);
 const [mediaStyle,setMediaStyle] = useState({
   width:'47vw',
   popActive:'',
   vidActive:'',
   bacActive:'active',
   posActive:'',
   active:true,
   identity:true
 });
 const [mediaLength,setMediaLength] = useState({
   vidLength:trailerKey.length,
   bacLength:0,
   posLength:0
 })

                      
  const func = async (a) =>{

    let imagesArr = [
      {file_path:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'},
      {file_path:'https://image.winudf.com/v2/image1/Y29tLm5hdHVyYWxpbWFnZWhkd2FsbHBhcGVyLnJ5cnNfc2NyZWVuXzNfMTU0MjM3MDgxOV8wOTg/screen-3.jpg?fakeurl=1&type=.jpg'}
    
    ]
  
   if(a==='default'){
    
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/images?api_key=4750523db0d1c5cd05c4585cdac5a1c5`
      );
      x=data;
      
     if(x.backdrops.length!==0){
      let arr=[x.backdrops[0]]
      setMediaData(arr);
      setIden(true);
     }
     else{
       setMediaData(imagesArr);
       setIden(false);
     }
      setMediaStyle({
        width:'94vw',
        popActive:'active',
        vidActive:'',
        bacActive:'',
        posActive:'',
        active:true,
        identity:true
      });
      setMediaLength({
        vidLength:trailerKey.length,
        bacLength:x.backdrops.length,
        posLength:x.posters.length
      })
     
     
    }else if(a==='pop'){
      if(x.backdrops.length!==0){
      let arr=[x.backdrops[0]]
      setMediaData(arr);
      setIden(true);
      }
      else{
        setMediaData(imagesArr);
        setIden(false);
      }
      setMediaStyle({
        width:'92vw',
        popActive:'active',
        vidActive:'',
        bacActive:'',
        posActive:'',
        active:true,
        identity:true
      });
}
       else if(a==='vid'){
         if(trailerKey!==0){
        setMediaData(trailerKey);
        setIden(true);
         }
         else{
               setMediaData(imagesArr);
               setIden(false);
         }
      
        setMediaStyle({
          width:'47vw',
          popActive:'',
          vidActive:'active',
          bacActive:'',
          posActive:'',
          active:true,
          identity:false
        });
       }else if(a==='bac'){
        if(x.backdrops.length!==0){
          setMediaData(x.backdrops);
          setIden(true);
        }
        else{
          setMediaData(imagesArr);
          setIden(false);
        }
          setMediaStyle({
            width:'47vw',
            popActive:'',
            vidActive:'',
            bacActive:'active',
            posActive:'',
            active:false,
             identity:true
          });
      
       }else if(a==='pos'){
        if(x.posters.length!==0){
          setMediaData(x.posters);
          setIden(true);
        }
        else{
          setMediaData(imagesArr);
          setIden(false);
        }
           setMediaStyle({
            width:'300px',
            popActive:'',
            vidActive:'',
            bacActive:'',
            posActive:'active',
            active:false,
            identity:true
          });
       }
     
  }

useEffect(() =>{
       func('default');
},[]);

  return (
   
    <div className='detail3'>
   
     <div className="media">

      <div className="mediaHead">
      <span >Media</span>
      </div>
     
      <div className="mediaContent">
  
      <span className={`${mediaStyle.popActive}`} onClick={() => {func('pop')}} > Popular</span>
     
      <span className={`${mediaStyle.vidActive}`}  onClick={() => {func('vid')}}  > Videos {trailerKey.length}</span>
      <span className={`${mediaStyle.bacActive}`}  onClick={() => {func('bac')}} > Backdrops {mediaLength.bacLength}</span> 
      <span className={`${mediaStyle.posActive}`} onClick={() => {func('pos')}} > Posters {mediaLength.posLength}</span>
      </div>

     </div>
    
     <MediaCard iden={iden} mediaData={mediaData}   mediaStyle={mediaStyle} trailerLink={trailerLink} clip={clip}/>          
    
    </div>
  
  )
}