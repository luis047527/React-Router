import { Outlet,Link, useLoaderData, } from "react-router-dom"

import { getGames } from "../service/games";

export async function loader() {
  const games = await getGames();
  return { games };
}


export default function Games (){
    const { games } = useLoaderData();
    return (<div>
           <h1>Games </h1>
           <p> Prueba ruta-componente</p>
           <Link to = "/" >Home</Link>


           <nav>
          {games.length ? (
            <ul>
              {games.map((game) => (
                <li key={game.id}>
                  <Link to={`/games/${game.id}`}>
                    {game.name ? (
                      <>
                        {game.name} 
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
              <i>No games</i>
            </p>
          )}
        </nav>
    
       <Outlet/>

           </div>)
}


