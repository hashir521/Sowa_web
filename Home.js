import React from 'react'
import Card from './Card'
import { obj } from './objects'
import {useState} from 'react'
import './Home.css'
const Home = () => {
const [object, setObject] = useState(obj)  
  return (
    <div>
      <div className='container'>
            <div className="col-8">
            <div className='p-2 pt-5'>
                <h3>Check out our verified reviews</h3>
                <p>On average, our moving companies are rated 8,6 out of 10. Below are some of our most recent reviews. Get access to companies by requesting your quote.</p>
                </div>
            </div>
        </div> 
        <div className='card__container container'> 
            {
              object.map((curobj) =>{
                return <Card key={curobj.id} {...curobj}/>
              } )
            }
        </div>
    </div>
  )
}
export default Home
