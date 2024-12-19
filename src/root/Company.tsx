import React from 'react'
import { getCompany } from "../service/companies"
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

export async function loader ({params}) {

    const company= await getCompany (Number(params.companyId))
    return  company;
}

const Company = () => {

    const company= useLoaderData()
  return (
    <div>

     <h1>Company page</h1>

     <ul>
     <li>Id: {company.id} </li>
     <li>Name: {company.name}</li>
     <li>Description:{company.description}</li>
     </ul>

     <Link to = "/companies" >Companies</Link>

    </div>
  )
}

export default Company
