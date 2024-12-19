import { Link } from "react-router-dom"
import { useLoaderData } from "react-router-dom"
import { getGame } from "../service/games"


export default function Game () {

    const game= useLoaderData()
    console.log( "componete + " , game)

    /*const game = { 
        
        Id: 1,
        Name: "Game 1",
        Description: " Description for game 1", 
    }*/ 

    return ( 

    <div>

     <h1>Game page</h1>

     <ul>
     <li>Id: {game.id} </li>
     <li>Name: {game.name}</li>
     <li>Description:{game.description}</li>
     </ul>

     <Link to = "/games" >Games</Link>
     <Link to = {`/games/${game.id}/edit`} >Edit</Link>

    </div>
    
   )
}

export async function  loader ({params}) {

  const game= await getGame(Number(params.gameId))
  console.log( game )


  return game;
  

}