import React,{useEffect} from 'react'
import MainDetail from './MainDetail/MainDetail';

export default function DetailModel(props) {
  const {id,topBar,type,mainFunc,knowsFor,iden,footer,country} = props;
  useEffect(()=>{
    console.log(id,type,knowsFor); 
    footer(true);
    window.scrollTo(0, 0);
  })
  return (
    <div>
      <MainDetail country1={country} id={id} topBar={topBar} type={type} mainFunc={mainFunc} knowsFor={knowsFor} iden={iden}/>
    </div>
  )
}