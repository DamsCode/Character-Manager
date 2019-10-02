import Axios from "axios";
import { ControllerCharacters } from "./ControllerCharacters";
const ctrl = new ControllerCharacters(Axios);

let inputSubmit = <HTMLElement>document.getElementById("submit");

inputSubmit.addEventListener(
  "click" /* async () => { */,
  // let inputImage = document.getElementById("image");

  async () => {
    let inputName = (<HTMLInputElement>document.getElementById("name")).value;
    let inputShortDescription = (<HTMLInputElement>(
      document.getElementById("shortDescription")
    )).value;
    let inputDescription = (<HTMLInputElement>(
      document.getElementById("description")
    )).value;
    let picture = (<HTMLInputElement>document.getElementById("pic")).files;
    let preview: any;
    let reader = new FileReader();
    reader.addEventListener(
      "load",
      async function() {
        preview = reader.result;
        preview = preview.split(",");

        const rawResponse = await fetch(
          "https://character-database.becode.xyz/characters",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: inputName,
              shortDescription: inputShortDescription,
              description: inputDescription,
              image: preview[1]
            })
          }
        );
        const content = await rawResponse.json();
      },
      false
    );

    if (picture) {
      reader.readAsDataURL(picture[0]);
    }
  }
);

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
