
import { Link, useLoaderData} from "react-router-dom"
import { getCompanies } from "../service/companies";

export async function loader() {
    const companies = await getCompanies();
    return { companies };
  }


export default function Companies () {

    const { companies } = useLoaderData();

    return (<div>
           <h1>Companies</h1>
           <p> Prueba ruta-componente</p>
           <Link to = "/" >Home</Link>

           
           <nav>
          {companies.length ? (
            <ul>
              {companies.map((company) => (
                <li key={company.id}>
                  <Link to={`/companies/${company.id}`}>
                    {company.name ? (
                      <>
                        {company.name} 
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                   
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No company</i>
            </p>
          )}
        </nav>

           </div>)
}