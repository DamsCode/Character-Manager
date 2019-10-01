import Axios from "axios";
import { ControllerCharacters } from "./ControllerCharacters";
const ctrl = new ControllerCharacters(Axios);
const modal = document.getElementById("myModal");
const close = document.getElementsByClassName("close")[0];

const closemodal = () => {
  if (modal) {
    modal.style.display = "none";
  }
};

const details = async ({ target }: any) => {
  const mydiv = document.getElementById("details");

  if (mydiv && modal) {
    let id = target.getAttribute("data-ids");
    let chara = await ctrl.getOneCharacter(id);
    mydiv.innerHTML = "";
    const name = document.createElement("h2");
    const shortDescription = document.createElement("h3");
    const image = document.createElement("img");
    const description = document.createElement("p");
    name.innerText = chara.name;
    shortDescription.innerText = chara.shortDescription;
    description.innerText = chara.description;
    image.src = "data:image/jpeg;base64," + chara.image;
    image.alt = "Image broken";
    mydiv.appendChild(name);
    mydiv.appendChild(image);
    mydiv.appendChild(description);
    modal.style.display = "block";
  }
};

ctrl.getAllCharacters().then(data => {
  const myComponent = document.getElementById("test");
  data.forEach((element: any) => {
    if (myComponent) {
      const div = document.createElement("div");
      const name = document.createElement("h2");

      const shortDescription = document.createElement("h3");
      const btndetails = document.createElement("button");
      btndetails.innerText = "Details";
      btndetails.setAttribute("data-ids", element.id);
      btndetails.addEventListener("click", details);
      name.innerText = element.name;

      shortDescription.innerText = element.shortDescription;
      div.appendChild(name);
      div.appendChild(shortDescription);
      div.appendChild(btndetails);
      myComponent.append(div);
    }
  });
});

close.addEventListener("click", closemodal);

// document.body.innerText = c.name;
