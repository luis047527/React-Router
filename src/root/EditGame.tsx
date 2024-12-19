import { Form, useLoaderData, redirect } from "react-router-dom";
import { updateGame } from "../service/games";

export default function EditGame() {

  const game = useLoaderData();
  console.log("game useLoader ", game);

  return (
    <Form method="post" id="contact-form">
     <h1> Game Edit Page </h1>
     <span>Name:</span>
     <input
         
          type="text"
          name="name"
          defaultValue={game.name}
      />

      <span> Description: </span>
      <textarea
      
        name="description"
        defaultValue={game.description}>

      </textarea>



     <button type="submit">Edit</button>
     </Form>
  )
}

export async function action ({request, params}) {
  console.log("que sale request"+ request);
  console.log("que sale params"+  params);

  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateGame (Number(params.gameId), updates);
  return redirect (`/games/${params.gameId}`);
}


  

