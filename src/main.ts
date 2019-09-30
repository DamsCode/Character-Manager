import { Character } from "./Character";
const axios = require("axios");
let c = new Character("damien", "test", "test");

document.body.innerText = c.name;
