import React,{useEffect} from 'react';
import Slider from './Slider/Slider';

export default function Data(props) {
    const {language,mainFunc,footer,country,name,name1,mainFunc1} = props;
    useEffect(() =>{
      footer(true);
      mainFunc1(name1);
      country(name);
      window.scrollTo(0, 0);
    },[])
  return (
    <div>
      <Slider country={country}   mainFunc={mainFunc} type="movie" category="popular" title="Popular Movies" lng={language} />
      <Slider country={country}   mainFunc={mainFunc} type="movie" category="top_rated"  title="Top Rated Movies" lng={language}/>
      <Slider country={country}   mainFunc={mainFunc} type="movie" category="upcoming"  title="Upcoming Movies" lng={language}/>
      <Slider country={country}   mainFunc={mainFunc} type="movie" category="now_playing" title="Now Playing" lng={language}/>
      <Slider country={country}   mainFunc={mainFunc} type="discover" category="movie"  title="Discover  Movies" lng={language}/>
      <Slider country={country}   mainFunc={mainFunc} type="trending" category="movie" time="day"  title="Trending Movies in Day" lng={language}/>
      <Slider country={country}   mainFunc={mainFunc} type="trending" category="movie" time="week"  title="Trending Movies  in Week" lng={language}/>
      <Slider country={country}   mainFunc={mainFunc} type="trending" category="all" time="day"  title="Trending Movies & Tv Shows in Day" lng={language}/>
      <Slider country={country}   mainFunc={mainFunc} type="trending" category="all" time="week"  title="Trending Movies & Tv Shows in Week" lng={language}/>
     
      <Slider country={country}   mainFunc={mainFunc} type="tv" category="popular"  title="Popular Shows" lng={language}/>
      <Slider country={country}   mainFunc={mainFunc} type="tv" category="top_rated" title="Top Rated Shows" lng={language} />
      <Slider country={country}   mainFunc={mainFunc} type="tv" category="airing_today" title="Airing Today" lng={language} />
      <Slider country={country}   mainFunc={mainFunc} type="tv" category="on_the_air"  title="On The Air"  lng={language}/>
      <Slider country={country}   mainFunc={mainFunc} type="discover" category="tv"  title="Discover Shows" lng={language}/>
      <Slider country={country}   mainFunc={mainFunc} type="trending" category="tv" time="day"  title="Trending  Tv Shows in Day" lng={language}/>
      <Slider country={country}   mainFunc={mainFunc} type="trending" category="tv" time="week"  title="Trending  Tv Shows in Week" lng={language}/>

      <Slider country={country}   type="person" category="popular" title="Popular Persons" lng="hp"/>

    </div>
  )
}