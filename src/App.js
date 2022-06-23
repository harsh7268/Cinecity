import {useState,useEffect} from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import LoadingBar from 'react-top-loading-bar';
import Spiner from './components/MainItem/Spiner';
import Spiner1 from './components/MainItem/Spiner1';
import Footer from './components/Footer/Footer'

import Home from './components/Home/Home';
import SingleCard from './components/MainItem/SingleCard';
import InfiniteScroll from "react-infinite-scroll-component";
import Privacy from './components/Privacy/Privacy'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainItem from './components/MainItem/MainItem';
import Data from './components/Home/Data';  
import axios from "axios";
import Carousel  from  './components/Home/Carousel/Carousel';
import DetailModel from './components/DetailModel.js/DetailModel';
import CountriesData from './components/Countries/CountriesData';

function App(props) {
  let b;
  const  [valid,setValid]=useState(0);
  const [type,setType] = useState(0);
  const [knowsFor,setKnowsFor] = useState(0)
  const [languages,setLanguages] = useState('hp');
  const [searchData,setSearchData] = useState([]);
  const [text,setText] = useState(null);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);
  const [loading,setLoading] = useState(true);
  const [iden,setIden] = useState(0);
  const [countryName,setCountryName] = useState('hp');
  const [foot,setFoot] = useState(true);
  const [lag,setLag] = useState('hp');
  const search = (a) =>{
         setText(a);
         footer(false);
         console.log(a.length);
         if(a.length===0){
           setText(null);
           country('Trending')
         }
         else{
   country('Searching');
   }
  }
  const mainFunc1 = (lng)  => {
    setLanguages(lng); 
  
    console.log(lng);
  }
  
  const country = (a) =>{
    setCountryName(a);

  }
    const mainFunc  =  (a,type,known_for,iden) =>{
    b=a;
    setValid(a);
    setText(null);
    setType(type);
    setKnowsFor(known_for);
    setIden(iden);
    console.log(known_for);
    
    }
 
  const [content,setContent] = useState([]);

  const fetchData = async () =>{
    
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/configuration/languages?api_key=4750523db0d1c5cd05c4585cdac5a1c5`
      );
      setContent(data);
    
  }
  const footer = (a) =>{
    setFoot(a)
    console.log(a);
  }
  const fetchSearchData = async (a) =>{
    console.log(a);
    window.scrollTo(0,0);
    if(a.length===0){
      setText(null);
    }
    setLoading(true);
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=4750523db0d1c5cd05c4585cdac5a1c5&query=${a}`
      );
      setSearchData(data.results);
      setTotalResults(data.total_results);
  
      setText(a);
      setLoading(false);
      console.log(data.results);
      setPage(1);
     
  }
  const fetchMoreSearchData = async () =>{
    setLoading(true);
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=4750523db0d1c5cd05c4585cdac5a1c5&page=${page+1}&query=${text}`
      );
      setSearchData(searchData.concat(data.results));
      setTotalResults(data.total_results);
      setPage(page+1);
      setLoading(false);

  }

  useEffect(() =>{ 
    
   fetchData();
   setLag('hp');
  
  },[])


  const [progress,setProgress] = useState(0);
  const topBar = (progress) =>{
      setProgress(progress)
  }
  return (
    <Router>
    <div className="App">
    <NavBar  mainFunc1={mainFunc1} search={search} fetchSearchData={fetchSearchData} countryName={countryName}/>
    <LoadingBar
        color='#0463df'
        progress={progress}
        height={4}
      />
      {
        text!==null &&
        <div >
        {loading && <Spiner/>}
        <InfiniteScroll
          dataLength={searchData.length}
          next={fetchMoreSearchData}
          hasMore={searchData.length!==totalResults}
          loader={<Spiner1/>}
        >
        <div className="card">
      {
          searchData && searchData.map((c) =>(
              <SingleCard country={country}   type={c.media_type} mainFunc={mainFunc} key={c.id} title={c.title} backdrop_path={c.backdrop_path || c.profile_path || c.poster_path} id={c.id} poster_path={c.poster_path} media_type={c.media_type} known_for={type==='person'?c.known_for:false}/>
          ))
      }
    </div>
    </InfiniteScroll>
    </div>
      }
        {
        text===null &&
    
    <Switch>
  
          <Route exact path="/" key='home'>
          <Home country={country} name='hp' name1='hp' mainFunc1={mainFunc1}   mainFunc={mainFunc}  topBar={topBar} footer={footer}/>
          </Route>
 
          <Route exact path="/movie/popular" >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='moviePopular'  type='movie' category='popular' topBar={topBar} languages={languages}/> 
          </Route>
          <Route exact path="/movie/top_rated" >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='movieTop_rated' type='movie' category='top_rated'  topBar={topBar}  languages={languages}/> 
          </Route>
          <Route exact path="/discover/movie" >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='movieLatest' type='discover' category='movie'  topBar={topBar} languages={languages}/> 
          </Route>
          <Route exact path="/movie/upcoming" >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='movieUpcoming' type='movie' category='upcoming'  topBar={topBar} languages={languages}/> 
          </Route>
          <Route exact path="/movie/now_playing" >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='movieNow-playing' type='movie' category='now_playing'  topBar={topBar} languages={languages}/> 
          </Route>
          <Route  exact path="/tv/popular" >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='tvPopular' type='tv' category='popular'  topBar={topBar} languages={languages}/> 
          </Route>
          <Route exact path="/tv/top_rated" >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='tvTop_rated' type='tv' category='top_rated' topBar={topBar}  languages={languages}/> 
          </Route>
          <Route exact path="/discover/tv"   >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='tvLatest' type='discover' category='tv'  topBar={topBar} languages={languages}/> 
          </Route>
          <Route exact path="/tv/airing_today" >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='tvAiring_today' type='tv' category='airing_today'  topBar={topBar} languages={languages}/> 
          </Route>
          <Route exact path="/tv/on_the_air" >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='tvOn_the_air' type='tv' category='on_the_air'  topBar={topBar} languages={languages}/> 
          </Route>
          <Route exact path="/person/popular" >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='personPopular' type='person' category='popular'  topBar={topBar} languages={languages}/> 
          </Route>
          {
            content.map((c)=> (
          <Route exact path={`/language/${c.english_name}`} key={c.iso_639_1}>
             <Carousel country={country} mainFunc={mainFunc}  topBar={topBar}  language={c.iso_639_1} type='discover' category='movie'    />
              <Data mainFunc1={mainFunc1} country={country} name={c.english_name} name1={c.iso_639_1} footer={footer} mainFunc={mainFunc}  language={c.iso_639_1}   topBar={topBar} /> 
          </Route>
          ))
           }

        <Route exact path="/trending/all/day" >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='trendingAllDay' type='trending' category='all' time='day'  topBar={topBar} languages={languages}/> 
        </Route>
        <Route exact path="/trending/all/week" >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='trendingAllWeek' type='trending' category='all' time='week'  topBar={topBar} languages={languages}/> 
        </Route>
        <Route exact path="/trending/movie/day" >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='trendingMovieDay' type='trending' category='movie' time='day'  topBar={topBar} languages={languages}/> 
        </Route>
        <Route exact path="/trending/movie/week" >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='trendingMovieWeek' type='trending' category='movie' time='week'  topBar={topBar} languages={languages}/> 
        </Route>
        <Route exact path="/trending/tv/day" >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='trendingTvDay' type='trending' category='tv' time='day'  topBar={topBar} languages={languages}/> 
        </Route>
        <Route exact path="/trending/tv/week" >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='trendingTvWeek' type='trending' category='tv' time='week'  topBar={topBar} languages={languages}/> 
        </Route>
        <Route exact path={`/movie/${valid}/similar`} >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='movieSimilar' type='movie' category={valid} time='similar'  topBar={topBar} languages={languages}/> 
        </Route>
        <Route exact path={`/movie/${valid}/recommendations`} >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='movieRecommendations' type='movie' category={valid} time='recommendations'  topBar={topBar} languages={languages}/> 
        </Route>
        <Route exact path={`/tv/${valid}/similar`} >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='tvSimilar' type='tv' category={valid} time='similar'  topBar={topBar} languages={languages}/> 
        </Route>
        <Route exact path={`/tv/${valid}/recommendations`} >
         <MainItem  country={country}  footer={footer}  mainFunc={mainFunc} key='tvRecommendations' type='tv' category={valid} time='recommendations'  topBar={topBar} languages={languages}/> 
        </Route>


        <Route exact path={`/${valid}`} key={valid} >
        <DetailModel country={country} footer={footer} id={valid} topBar={topBar} type={type} mainFunc={mainFunc} knowsFor={knowsFor} iden={iden}/>
        </Route>
        
        <Route exact path="/languages" >
           <CountriesData  country={country} mainFunc1={mainFunc1} footer={footer}/>
        </Route>

        <Route exact path="/privacy" key='privacy'>
          <Privacy footer={footer}  title='Privacy Policy'/>
        </Route>
        <Route exact path="/help" key='help'>
          <Privacy footer={footer}   title='Help' />
        </Route>
        <Route exact path="/preferences" key='preferences'>
          <Privacy footer={footer}  title='Preferences' />
        </Route>
        <Route exact path="/terms&conditions" key='terms'>
          <Privacy footer={footer}  title='Terms & Conditions' />
        </Route>

        </Switch>
   }
   { foot===true &&
   <Footer />
  }
    </div>
    </Router>
  );
}

export default App;