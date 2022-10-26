import React from 'react'
import { Link} from 'react-router-dom';
import './Services.css'
const Services = ({id,heading, paragrapgh1, paragrapgh2, paragrapgh3, paragrapgh4}) => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-sm-10 link">
           <h6>{heading}</h6>
             <p><a href="/">{paragrapgh1}</a></p>
             <p><a href="/">{paragrapgh2}</a></p>
             <p><a href="/"> {paragrapgh3} </a></p>
             <p><a href="/"> {paragrapgh4} </a></p> 
           

            </div>
            
        </div>

    </div>
  )
}

export default Services