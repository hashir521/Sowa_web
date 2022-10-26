import React,{useState} from 'react'
import WhyGetamover from './WhyGetamover';
import WhyGetaMoverCard from './WhyGetaMoverCard';
import { WhyGetamoverObj } from './WhyGetamoverObj'
import './WhyGetamoverPrint.css'
const WhyGetamoverPrint = () => {
const[object3,setObject3] = useState(WhyGetamoverObj);
  return (
    <div className='container cardPrint'>
        {
            object3.map((curObj3) => {
                return <WhyGetaMoverCard key={curObj3.id} {...curObj3} />
            })
        }
    </div>
  )
}

export default WhyGetamoverPrint