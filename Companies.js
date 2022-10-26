import React,{useState} from 'react'
import CompanyCart from './CompanyCart'
import { commpaniesObj } from './companiesObj'
const Companies = () => {
    const[object2,setObject2] = useState(commpaniesObj)
  return (
    <div>
        <div className='container '>
            <div className="col-8">
            <div className='p-2 pt-5'>
                <h2>Find all companies in the Getamover network</h2>
                <p>Don’t look any further, we match you with the most suitable removal partners from our network of 862 companies in the UK.</p>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default Companies