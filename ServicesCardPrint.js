import React, { useState } from 'react'
import './ServicesCardPrint.css'
import Services from './Services'
import { OurServices } from './ServicesObj'

const ServicesCardPrint = () => {
   
    const[object4,setObject4] = useState(OurServices);
  return (
    <div className='container cardPrint'>
        {
            object4.map((curobj4) =>{
                return <Services key={curobj4.id} {...curobj4} />
            })
        }
        

    </div>
  )
}

export default ServicesCardPrint