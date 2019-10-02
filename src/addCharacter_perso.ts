import Axios from "axios";
import { ControllerCharacters } from "./ControllerCharacters";
const ctrl = new ControllerCharacters(Axios);
let data: any;
ctrl.getCharacters().then(data => {
  data.forEach((element: any) => {
    const myComponent = document.getElementById("test");
    console.log(element.name);
  });
});

let inputSubmit = <HTMLElement>document.getElementById("submit");

inputSubmit.addEventListener("click", /* async () => { */
  // let inputImage = document.getElementById("image");

  async () => {
    let inputName = (<HTMLInputElement>document.getElementById("name")).value;
    let inputShortDescription = (<HTMLInputElement>(
      document.getElementById("shortDescription")
    )).value;
    let inputDescription = (<HTMLInputElement>(
      document.getElementById("description")
    )).value;
    const rawResponse = await fetch(
      "https://character-database.becode.xyz/characters",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name:  inputName ,
          shortDescription: inputShortDescription,
          description: inputDescription ,
        })
      }
    );
    const content = await rawResponse.json();

    console.log(content);
  };
});

// import { AddCharacter } from "./creation_perso";
/* import { Character } from "./Character";
import axios from "axios";

axios.post("https://character-database.becode.xyz/characters", {
  name: "Guizmo",
  shortDescription: "chachat",
  description: "gros chat",
  image: "chat"
}); */

/* const bd = axios.create({
  baseURL: "https://character-database.becode.xyz/"
});

let add = async () => {
  try {
    const resultAdd = new Character("Guizmo", "chachat", "Gros chat", "chat");
    const reponse = await bd.post(`/characters/{${JSON.stringify(resultAdd)}`);
    console.log(reponse);
    console.log("hello");
  } catch (err) {
    console.error(err);
    console.log("je t'aime!");
  }
};
add(); */
