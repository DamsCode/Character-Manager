import Axios from "axios";
import { ControllerCharacters } from "./ControllerCharacters";
const ctrl = new ControllerCharacters(Axios);
let data: any;
ctrl.getCharacters().then(data => {
  data.forEach((element: any) => {
    const myComponent = document.getElementById("test");
    if (myComponent) {
      const name = myComponent.querySelector("h1");
      const shortDescription = myComponent.querySelector("h2");
      const image = myComponent.querySelector("img");
      const description = myComponent.querySelector("p");
      if (name && shortDescription && image && description) {
        name.innerText = element.name;
        shortDescription.innerText = element.shortDescription;
        description.innerText = element.description;
        image.src = element.image;
      }
    }
    // document.body.innerHTML += element.name ;
  });
});

// document.body.innerText = c.name;
