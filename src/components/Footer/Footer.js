import React from 'react'
import './Footer.css'
import {FaFacebookSquare,FaTwitter,FaInstagram} from 'react-icons/fa';
import {BsYoutube} from 'react-icons/bs';
import {Link} from 'react-router-dom';

export default function Footer() {
 
  return (
    <footer>
    <div className='footer'>

      <div className="footerBox">
        <div className="footerHead">
        <p> Follow Our Community </p>
        </div>
        <ul className="footerIcon">
          <li>
        <a target="_blank" href='https://www.facebook.com/Cinecity-100238959353338'>
        <FaFacebookSquare  />
        </a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/Cinecity_">
        <FaInstagram />
        </a>
        </li>
        <li>
          <a target="_blank"  href="https://twitter.com/Cinecity7">
        <FaTwitter />
        </a>
        </li>
        <li>
          <a target="_blank" href="https://youtube.com/channel/UCj5ffzOoymhIQss9vEUt8Mw">
          <BsYoutube />
          </a>
        </li>
        </ul>
        <div >
         <Link to="/help"> <p>Help</p> </Link>
        </div>
        <div >
          <Link to='/preferences'>
          <p>Prefrences</p>
          </Link>
        </div>
      </div>

      <div className="footerBox">
        <div className="footerHead">
        <p>People</p>
        </div>
        <ul className="footerContent">
            <li ><Link to="/person/popular"><p>Popular</p></Link></li>
           
        </ul>
      </div>

      <div className="footerBox">
        <div className="footerHead">
        <p>Tv</p>
        </div>
        <ul className="footerContent">
        <li ><Link to="/tv/popular"><p>Popular</p></Link></li>
        <li > <Link to="/tv/top_rated"> <p>Top Rated</p></Link></li>
        <li > <Link to="/discover/tv"> <p> Discover </p> </Link> </li>
        <li > <Link to="/tv/airing_today"> <p>TV Airing Today</p> </Link></li>
        <li ><Link to="/tv/on_the_air">   <p>TV On The Air</p></Link></li>
        </ul>
      </div>

      <div className="footerBox">
        <div className="footerHead">
        <p>Movies</p>
        </div>
        <ul className="footerContent">
            <li ><Link to="/movie/popular"  > <p>Popular</p></Link></li>
            <li ><Link to="/movie/top_rated"  > <p>Top Rated</p></Link></li>
            <li ><Link to="/discover/movie"> <p>Discover</p></Link></li>
            <li ><Link to="/movie/upcoming"> <p>Upcoming</p></Link></li>
            <li ><Link to='/movie/now_playing'> <p>Now Playing</p></Link></li>
        </ul>
      </div>

     

      <div className="footerBox">
        <div className="footerHead"> 
          Trending
        </div>
        <ul className="footerContent">
        <li ><Link to="/trending/all/day">Shows & Movies in Day</Link></li>
        <li ><Link to="/trending/all/week">Shows & Movies in Week</Link></li>
        <li ><Link to="/trending/movie/day"> Movies in Day</Link></li>
        <li ><Link to="/trending/movie/week">Movies in Week</Link></li>
        <li ><Link to="/trending/tv/day">Shows  in Day</Link></li>
        <li ><Link  to="/trending/tv/week">Shows  in Week</Link></li>
        </ul>
      </div>
    </div>

<ul className='terms'>
   <li ><Link to='/privacy'><p>Privacy Policy</p></Link></li>
   <li ><Link to='/terms&conditions'><p>T&C</p></Link></li>
   <li>&copy; H&Agroups 2022</li>
   <li>v1.00</li>
</ul>

    </footer>
  )
}