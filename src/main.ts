import Axios from "axios";
import { ControllerCharacters } from "./ControllerCharacters";
const ctrl = new ControllerCharacters(Axios);
let data: any;
ctrl.getCharacters().then(data => {
  data.forEach((element: any) => {
    const myComponent = document.getElementById("test");
    if (myComponent) {
      myComponent.innerHTML += element.name + "<br />";
      console.log(element.name);
    }
    // document.body.innerHTML += element.name ;
  });
});

/* Axios.post("https://character-database.becode.xyz/characters", {
  name: "Guizmo",
  shortDescription: "chachat",
  description: "gros chat",
  image: "chat"
}); */
// document.body.innerText = c.name;
