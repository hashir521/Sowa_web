import React from 'react'
import './MoveHouse.css'
const MoveHouse = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-sm-6">
                <h1>Move house with a top-rated removal company</h1>
                <h6>Compare up to 6 quotes from trusted moving companies and save.</h6>
                <div className="row bg bg-danger p-3">
                    <div className="col-sm-6">
                        <input type="text" placeholder='Your postcode' />
                       
                    
                    
                    </div>
                   
                    <div className="col-md-3 lg-3"><button class="btn btn-success w-100 py-3">Get quotes</button></div>

                </div>
            </div>
            <div className="col-sm-6">
                <img className='boy icon-circle img' src="https://resources.skycdn.net/images/move/hero-move-redesign.jpg " alt="" />
            </div>
        </div>

    </div>
  )
}

export default MoveHouse