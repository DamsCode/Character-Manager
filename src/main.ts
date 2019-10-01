import Axios from "axios";
import { ControllerCharacters } from "./ControllerCharacters";
const ctrl = new ControllerCharacters(Axios);
let data: any;
ctrl.getCharacters().then(data => {
  data.forEach((element: any) => {
    const myComponent = document.getElementById("test");
    if (myComponent) {
      myComponent.innerHTML += element.name;
      console.log(element.name);
    }
    // document.body.innerHTML += element.name ;
  });
});

// document.body.innerText = c.name;
