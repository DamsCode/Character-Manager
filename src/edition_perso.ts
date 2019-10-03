import Axios from "axios";
import { ControllerCharacters } from "./ControllerCharacters";
const ctrl = new ControllerCharacters(Axios);

const some = new URLSearchParams(location.search);
console.log(some.get("id"));

// let inputSubmit = <HTMLElement>document.getElementById("submit");

// inputSubmit.addEventListener(
//   "click" /* async () => { */,
//   // let inputImage = document.getElementById("image");

//   async () => {
//     let inputName = (<HTMLInputElement>document.getElementById("name")).value;
//     let inputShortDescription = (<HTMLInputElement>(
//       document.getElementById("shortDescription")
//     )).value;
//     let inputDescription = (<HTMLInputElement>(
//       document.getElementById("description")
//     )).value;

//     const rawResponse = await fetch(
//       "https://character-database.becode.xyz/characters",
//       {
//         method: "PUT",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           name: inputName,
//           shortDescription: inputShortDescription,
//           description: inputDescription
//           //   image: picture
//         })
//       }
//     );
//     const content = await rawResponse.json();

//     console.log(content);
//   }
// );
