import React,{useState} from 'react'
import './Card.css'

const Card = ({heading,id,date,paragraph,image,heading2,rating}) => {

  return (
    <div className='container'>
            <div class="row">
                {/* 1st col */}
                <div class="col-sm-4 w-100">
                    <div class="p-3 border ">
                        <h6>{heading}</h6>
                         <span>{date}</span>
                        <p> {paragraph} </p> 

                         <div className='row'>
                            <div className="col-md-2 border "><img src={image} alt="image" /></div>
                            <div className="col-md-8 ">{ heading2}</div>
                            <div className="col-md-2">{  rating}</div>
                        </div> 
                    </div>
                </div>
            </div>
    </div>

  )
}

export default Card