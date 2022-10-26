import React from 'react'
const WhyGetaMoverCard = ({id,image,heading,paragraph}) => {
  return (
    <div className='container why'>
        <div className="row">
                <div className="col-sm-4 icon-circle w-100">
                    <img className='getaimage' src={image} />
                    <div className="row">
                        <div className="col-sm-10"> 
                                <h5>{heading}</h5>           
                        </div>

                   </div>

                   <div className="row">
                         <p>{paragraph}</p>          
                    </div>

                </div>

         </div>
    
</div>
  )
}

export default WhyGetaMoverCard