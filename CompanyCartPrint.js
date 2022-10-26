import React,{useState} from 'react'
import { commpaniesObj } from './companiesObj'
import CompanyCart from './CompanyCart'
import './CompanyCartPrint.css'

const CompanyCartPrint = () => {
    const[object2,setObject2] = useState(commpaniesObj)
  return (
    <div>
        <div className='container cardPrint'>
            {
             object2.map((curobj2 =>{
               return <CompanyCart key={curobj2.id}  {...curobj2}/>
             }))
           }
         
       </div>
        <div className="button container">
               <div><button type="button1" class="btn btn-outline-primary">All Removals Company</button></div>
                <div><button type="button2" class="btn btn-outline-primary ">All cities</button></div>
               
        </div>

        <div className="container ready p-4">
            <div className="row">
                <div className="col-md-10">
                    <h3>Ready to connect with reliable removal companies?</h3>
                </div>
                <div className="row">
                    <div className="col-md-6"><p>Find out which companies match your move requirements in a matter of minutes.</p></div>
                    <div className="col-lg-3 "><input class="form-control w-100 py-3" placeholder="Enter your postcode"/></div>
                    <div className="col-md-3"><button class="btn btn-success w-100 py-3">Get quotes</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompanyCartPrint