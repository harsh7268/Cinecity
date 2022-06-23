import React,{useEffect} from 'react';
import Carousel  from './Carousel/Carousel';
import Data from './Data';



export default function Home(props) {
 
  const {mainFunc,topBar,footer,country,name,name1,mainFunc1} = props; 
  
 
  return (
    <div>
      <Carousel country={country} mainFunc={mainFunc} topBar={topBar} type='trending' category='all' time='day' language='hp'/>
      <Data mainFunc1={mainFunc1} name={name} name1={name1} country={country} mainFunc={mainFunc}   language='hp' footer={footer}/>
    </div>
  )
}