import React from 'react'

const AboutUsCard = () => {
  return (
    <div className='container'>
        <div className="row">

            <div className="col-12 col-lg-6">
                <div className="sd-pr-lg-6">
                    {/* <p className='text-secondry-dark p-x-large'>About Us</p> */}
                    <h3 className='h2 sd-mb-lg-1'>We connect people and removal companies</h3>
                    <p className='text-gray sd-mb-1'>With more than 15 years of experience and an international team of experts, it is our mission to take the hassle out of moving.</p>
                    <div className='sd-md-1 sd-mb-lg-1'>
                        <img className='h-2_5 h-lg-auto' src="https://img.skycdn.net/b2c/mover/about-us/avatars.png" />
                    </div>
                    
                    <a href="/about-us/" className='link-secondry large bold'>Learn about us</a>
                </div>

            </div>

            <div className="col-6">
                <div className='bg bg-secondry '>
                    <h3>Are you a moving company?</h3>
                    <p>We'll connect you to potential customers who are moving house and help you promote your business.</p>
                    <button className='btn btn-lg btn-secondry'>Join us</button>
                   
                </div>
                
            </div>
            {/* <div className="col-sm-6">
            <div className="row">
                    <h2>We connect people and removal companies</h2>
                </div>
                <div className="row">
                    <p>With more than 15 years of experience and an international team of experts, it is our mission to take the hassle out of moving.</p>
                </div>
            </div> */}
            
        </div>
        

    </div>
  )
}

export default AboutUsCard