import { Link } from "react-router-dom"


export default function Router (){

    return (

        <div>
           <h1>Router</h1>
           <p> Prueba ruta-componente</p>
           <ul>
           <li> <Link to = "/login" >Login </Link></li>
           <li> <Link to = "/games" >Games </Link></li>
           <li> <Link to = "/companies" >Companies </Link></li>
           <li> <Link to = "/error" >Invalid Page </Link></li>
           </ul>
        </div>
           
           )
}

