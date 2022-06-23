import React,{useEffect,useState}  from 'react';
import { MdOutlineMenu,  MdSearch,MdLanguage,MdCancel} from 'react-icons/md';
import { MdOutlineHPlusMobiledata} from 'react-icons/md';
import './NavBar.css';
import { Link} from "react-router-dom";
import Login from './login.png';
import axios from "axios";
import {AiOutlineRight}  from 'react-icons/ai';
import {FiMonitor} from 'react-icons/fi';
import {BiMoviePlay,BiHelpCircle} from 'react-icons/bi';
import {BsFillPeopleFill} from 'react-icons/bs';
import {AiFillSetting} from 'react-icons/ai';
import {GiFilmProjector} from 'react-icons/gi'



export default function NavBar(props) {

  const {mainFunc1,search,fetchSearchData,countryName} = props;
  const [active,setActive] = useState('active1');
 
  const [content,setContent] = useState([]);
  const [inputText,setInputText] = useState(null);
 const [clip,setClip] = useState('clipActive');
 const [navPadding,setNavPadding] = useState('.3rem');
 const [searchCancel,setSearchCancel] = useState({
   searchOpen:'block',
   searchClose:'none'
 })

  const searchBar =  () =>{
     if(clip==='clipActive'){
       setClip('clipInActive')
       setNavPadding('2.5rem');
       setSearchCancel({
         searchOpen:'none',
         searchClose:'block'
       })
     }
     else{
       setClip('clipActive');
       setNavPadding('.3rem');
       setSearchCancel({
        searchOpen:'block',
        searchClose:'none'
       })
     }
  }
  const activation = () =>{
    setActive('inActive1');
   
  }
  const activationBlur = () =>{
    setActive('active1');
   
   
  }
  const privacy = () =>{
    setActive('active1');
    ;
  }
  const textChange = (event)=>{{
     setInputText(event.target.value);
      search(event.target.value);
      fetchSearchData(event.target.value);
   
    
  }}
  

  const fetchData = async () =>{

    const {data} = await axios.get(
      `https://api.themoviedb.org/3/configuration/languages?api_key=4750523db0d1c5cd05c4585cdac5a1c5`
      );
      setContent(data);
   
    
     
    
  }

  useEffect(() =>{
   fetchData();
  },[])

    const  [style,setStyle] = useState( {
        searchWidth:'15rem',
        searchBorderBottom: '.5px solid rgba(255, 255, 255, 0.74)',
        menuHoverTv:'none',
        menuHoverMovies:'none',
        menuHoverPeople:'none',
       
        menuHoverTrending:'none'
    });

    const mouseHoverTrending = () =>{
      
      setStyle({
          menuHoverTv:'none',
          menuHoverMovies:'none',
          menuHoverPeople:'none',
          
          menuHoverTrending:'flex',
          searchWidth:'15rem',
          searchBorderBottom: '.5px solid rgba(255, 255, 255, 0.74)',
      })
  
  
    }
    
    const mouseLeaveTrending = () =>{
      ;
      setStyle({
          menuHoverTv:'none',
          menuHoverMovies:'none',
          menuHoverPeople:'none',
          
          menuHoverTrending:'none',
          searchWidth:'15rem',
          searchBorderBottom: '.5px solid rgba(255, 255, 255, 0.74)',
      })
       search(null);
     
    }

   
    

    const mouseHoverPeople = () =>{
      
        setStyle({
            menuHoverTv:'none',
            menuHoverMovies:'none',
            menuHoverPeople:'flex',
             
             menuHoverTrending:'none',
            searchWidth:'15rem',
            searchBorderBottom: '.5px solid rgba(255, 255, 255, 0.74)',
        })
    
    
      }
      const mouseLeavePeople = () =>{
      
        setStyle({

            menuHoverTv:'none',
            menuHoverMovies:'none',
            menuHoverPeople:'none',
            
            menuHoverTrending:'none',
            searchWidth:'15rem',
            searchBorderBottom: '.5px solid rgba(255, 255, 255, 0.74)',
        })
        search(null);
      
      }
  const mouseHoverTv = () =>{
      
    setStyle({
        menuHoverTv:'flex',
        menuHoverMovies:'none',
        menuHoverPeople:'none',
        
        menuHoverTrending:'none',
        searchWidth:'15rem',
        searchBorderBottom: '.5px solid rgba(255, 255, 255, 0.74)',
    })


  }
  const mouseLeaveTv = () =>{
    ;
    setStyle({
        menuHoverTv:'none',
        menuHoverMovies:'none',
        menuHoverPeople:'none',
        
        menuHoverTrending:'none',
        searchWidth:'15rem',
        searchBorderBottom: '.5px solid rgba(255, 255, 255, 0.74)',
    })
    search(null);
    
  }
  const mouseHoverMovies = () =>{
      
    setStyle({
        menuHoverMovies:'flex',
        menuHoverTv:'none',
        menuHoverPeople:'none',
        
        menuHoverTrending:'none',
        searchWidth:'15rem',
        searchBorderBottom: '.5px solid rgba(255, 255, 255, 0.74)',
    })


  }
  const mouseLeaveMovies= () =>{
    ;
    setStyle({
        menuHoverMovies:'none',
        menuHoverTv:'none',
        menuHoverPeople:'none',
        
        menuHoverTrending:'none',
        searchWidth:'15rem',
        searchBorderBottom: '.5px solid rgba(255, 255, 255, 0.74)',
    })
    search(null);
   
  }

 const searchBtn = () =>{
     setStyle({
        searchWidth:'20rem',
        searchBorderBottom: '.5px solid #1F80E0',
        menuHoverTv:'none',
        menuHoverMovies:'none',
        menuHoverPeople:'none',
        menuHoverTrending:'none',
        
     })
 }
 const searchBlur = () =>{
     setStyle({
        searchWidth:'15rem',
        searchBorderBottom: '.5px solid rgba(255, 255, 255, 0.74)',
        menuHoverTv:'none',
        menuHoverMovies:'none',
        menuHoverPeople:'none',
        
        menuHoverTrending:'none',
        
     })
     console.log('hello search blur')
 }

 const home  = () =>{
  
mainFunc1('hp');
  search(null);
  
 }
 

  return (
 
    <nav style={{paddingBottom:`${navPadding}`}} id='navBar'>
      <div className={`inputBox ${clip}`}>
        <input  onChange={textChange} value={inputText} type='text' placeholder='Search' />
      </div>
      <div className="leftMenu">
         <div className="logo">
             <div className="icon" onMouseEnter={activation} onClick={activation} onMouseLeave={activationBlur} > 
               <MdOutlineMenu />
             </div>
             <Link to="/"  >
               <div className="companyName" onClick={home} > 
                 <GiFilmProjector style={{fontSize:'1.8rem'}}/> <p>Cinecity</p>  
                 </div>
             </Link> 
             <ul>
               { countryName==='hp' &&
             <li className='trend mainTrend'   onMouseEnter={mouseHoverTrending} onMouseLeave={mouseLeaveTrending} >Trending</li>
               }
                { countryName!=='hp' && 
             <li className='trend mainTrend'    >{countryName}</li>
              }
             
             </ul> 
         </div>
       
         <div className={`mainMenu ${active}`} onMouseLeave={activationBlur}  onMouseEnter={activation}>
        
        <ul   > 
        <li id="login">
          <div>
        <img src={Login} />
        <div>
          <h4>Log in</h4>
          <p>For better experience</p>
        </div>
        </div>
        <MdCancel style={{fontSize:'1.4rem'}} onClick={activationBlur} />
         </li>
            <li  className='commonList' onMouseEnter={mouseHoverTv} onMouseLeave={mouseLeaveTv} ><span className='commonIconList'><FiMonitor className='commonIcon'/> TV </span></li>
            <li className='commonList' onMouseEnter={mouseHoverMovies} onMouseLeave={mouseLeaveMovies}  > <span className='commonIconList'> <BiMoviePlay  className='commonIcon' /> Movies </span></li>
            <li className='commonList' onMouseEnter={mouseHoverPeople} onMouseLeave={mouseLeavePeople} ><span className='commonIconList'> <BsFillPeopleFill  className='commonIcon' /> People </span></li>
           
            <li className='commonList' >
            <Link to='/languages' >
           <span  onClick={privacy} key={1} ><span className='commonIconList'> <MdLanguage className='commonIcon' /> Languages</span></span>
           </Link>
           </li>
           <li  style={{borderTop:'.2px solid rgba(97, 86, 86, 0.596',marginTop:'.5rem'}} className='commonList help' ><Link  to="/preferences"><span  onClick={privacy} className='commonIconList listWidth'> <AiFillSetting  className='commonIcon' /> Preferences </span></Link></li>
            <li style={{borderBottom:'.2px solid rgba(97, 86, 86, 0.596'}} className='commonList help' ><Link to='help'><span onClick={privacy} className='commonIconList listWidth'> <BiHelpCircle  className='commonIcon' /> Help </span></Link></li>
            <li style={{fontSize:'12px',color:'rgb(138, 125, 125)'}} className='commonList help' ><span  className='commonIconList'> <span className='commonIconList' onClick={privacy}><Link to="/privacy">Privacy Policy</Link></span>  <span  onClick={privacy}><Link to="/terms&conditions">T&C</Link></span> <span>v1.00</span> </span></li>
           { countryName==='hp' &&
            <li className='trend'  onMouseEnter={mouseHoverTrending} onMouseLeave={mouseLeaveTrending} >Trending</li>
           }
           {
             countryName!=='hp'&&
             <li className='trend'   >{countryName}</li>
           }
        </ul>
    </div>
  
 </div>
   
      <div className="rightMenu">
          <div className={`input `} onClick={searchBtn} onBlur={searchBlur} style={{borderBottom:style.searchBorderBottom}}>
           
             <input onChange={textChange} value={inputText} type="text" placeholder='Search' style={{width:style.searchWidth}}/>
             </div>
             <MdSearch style={{display:`${searchCancel.searchOpen}`}} className="searchIcon" onClick={searchBar} />
             <MdCancel style={{fontSize:'1.3rem',display:`${searchCancel.searchClose}`}}  className="searchIcon" onClick={searchBar} />
             <p className="subscribe">SUBSCRIBE</p>
             <p className="login">Login</p> 
      </div>
 
          <ul className='tv' style={{display:style.menuHoverTv}}   onMouseEnter={ mouseHoverTv} onMouseLeave={mouseLeaveTv}>
          <li  onClick={mouseLeaveTv}><Link to="/tv/popular" ><p>Popular</p></Link></li>
          <li onClick={mouseLeaveTv}><Link to="/tv/top_rated"><p>Top Rated</p></Link></li>
          <li onClick={mouseLeaveTv}><Link to="/discover/tv"><p>Discover </p></Link></li>
          <li onClick={mouseLeaveTv}><Link to="/tv/airing_today"><p>TV Airing Today</p> </Link></li>
          <li onClick={mouseLeaveTv}><Link to="/tv/on_the_air"> <p> TV On The Air </p></Link></li>
          </ul>

          <ul className='movies' style={{display:style.menuHoverMovies}} onMouseEnter={ mouseHoverMovies} onMouseLeave={mouseLeaveMovies}>
          <li onClick={mouseLeaveMovies}><Link to="/movie/popular"  ><p>Popular</p></Link></li>
          <li onClick={mouseLeaveMovies} ><Link to="/movie/top_rated"  ><p>Top Rated</p></Link></li>
          <li onClick={mouseLeaveMovies}><Link to="/discover/movie"><p>Discover</p></Link></li>
          <li onClick={mouseLeaveMovies}><Link to="/movie/upcoming"><p>Upcoming</p></Link></li>
          <li onClick={mouseLeaveMovies}><Link to='/movie/now_playing'><p>Now Playing</p></Link></li>
          </ul>
          <ul className='people' style={{display:style.menuHoverPeople}} onMouseEnter={mouseHoverPeople} onMouseLeave={mouseLeavePeople}>
          <li onClick={mouseLeavePeople}><Link to="/person/popular"><p>Popular</p></Link></li>
         
          </ul>
        
         
          <ul className='trending' style={{display:style.menuHoverTrending}} onMouseEnter={mouseHoverTrending} onMouseLeave={mouseLeaveTrending}>
          <li onClick={mouseLeaveTrending}><Link to="/trending/all/day"><p>Shows & Movies in Day</p></Link></li>
          <li onClick={mouseLeaveTrending}><Link to="/trending/all/week"><p>Shows & Movies in Week</p></Link></li>
          <li onClick={mouseLeaveTrending}><Link to="/trending/movie/day"><p> Movies in Day</p></Link></li>
          <li onClick={mouseLeaveTrending}><Link to="/trending/movie/week"><p>Movies in Week</p></Link></li>
          <li onClick={mouseLeaveTrending}><Link to="/trending/tv/day"><p>Shows  in Day</p></Link></li>
          <l onClick={mouseLeaveTrending}><Link to="/trending/tv/week"><p>Shows  in Week</p></Link></l>
          
          </ul>
     
    </nav>
   
  )
}