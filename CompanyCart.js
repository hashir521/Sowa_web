import React from 'react'
import './CompanyCart.css'
const CompanyCart = ({id,image,par}) => {
  return (
    <div>
          <div className="container">
            <div className="row">
                   <div className="col-sm-4 w-100 ">   
                       <div className="row border">
                           <div className="col-sm-2  "><img src={image} alt="" /></div>
                           <div className="col-sm-10 flex-fill  d-flex align-items-center"><h5>{par}</h5></div> 
                       </div>
                   </div> 
                   
            </div>
        </div>
    </div>
  )
}

export default CompanyCart