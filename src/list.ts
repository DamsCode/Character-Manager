import Axios from "axios";
import { ControllerCharacters } from "./ControllerCharacters";
const ctrl = new ControllerCharacters(Axios);
ctrl.getCharacters().then(data => {
  const myComponent = document.getElementById("test");

  data.forEach((element: any) => {
    if (myComponent) {
      const div = document.createElement("div");
      const shortDescription = document.createElement("h2");
      const image = document.createElement("img");
      const description = document.createElement("p");

      shortDescription.innerText = element.shortDescription;
      description.innerText = element.description;
      image.src = "https://character-database.becode.xyz" + element.image;
      image.alt = "Image broken";
      console.log(image.src);

      div.appendChild(shortDescription);
      div.appendChild(image);
      div.appendChild(description);
      myComponent.append(div);
    }

    // document.body.innerHTML += element.name ;
  });
});

// document.body.innerText = c.name;
