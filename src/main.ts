import Axios from "axios";
import { ControllerCharacters } from "./ControllerCharacters";
const ctrl = new ControllerCharacters(Axios);
ctrl.getCharacters();
// document.body.innerText = c.name;
