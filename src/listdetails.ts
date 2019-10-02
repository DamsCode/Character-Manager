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
    let id = target.parentElement.getAttribute("data-ids");
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

const delet = async ({ target }: any) => {
  let id = target.parentElement.id;
  if (confirm("Are you sure do you want to delete this character ?")) {
    await ctrl.deleteCharacter(id);
    const elem = <HTMLElement>document.getElementById(id);
    elem.style.display = "none";
  }
};

ctrl.getAllCharacters().then(data => {
  const myComponent = document.getElementById("list");
  data.forEach((element: any) => {
    if (myComponent) {
      const div = document.createElement("div");
      const name = document.createElement("h2");
      const image = document.createElement("img");
      const shortDescription = document.createElement("h3");
      const btndetails = document.createElement("button");
      const btndelete = document.createElement("button");
      btndetails.innerText = "Details";
      btndelete.innerText = "Delete";
      div.className = "list";
      div.id = element.id;
      btndetails.addEventListener("click", details);
      btndelete.addEventListener("click", delet);

      name.innerText = element.name;
      image.src = "data:image/jpeg;base64," + element.image;
      image.alt = "Image broken";
      shortDescription.innerText = element.shortDescription;
      div.appendChild(name);
      div.appendChild(image);
      div.appendChild(shortDescription);
      div.appendChild(btndetails);
      div.appendChild(btndelete);
      myComponent.append(div);
    }
  });
});

close.addEventListener("click", closemodal);

// document.body.innerText = c.name;
