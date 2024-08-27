import React from 'react';
import  { useRef } from 'react'

function Scroll() {

   const ScrollTop=useRef();

   const Scrollaction = ()=> {
    if(ScrollTop.current){
       ScrollTop.current.scrollTo
       ({top:0,behavior:'smooth'})

   }

   }

  return (
    <div   ref={ScrollTop} style={{height:'500px',overflowY:'scroll'}}>
        <div style={{height:'1500px'}}>
      <h5>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for <br /> 
      those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by 
      Cicero are also reproduced in their exact original form, accompanied by English versions 
      from the 1914 translation by H. Rackham.</h5>
      </div>
      <button onClick={Scrollaction}>scroll to top</button>
    </div>
  )

}
export default Scroll