import { Character } from "./Character";

// let c = new Character("damien", "test", "test");

/* génere  un code qui permet d'afficher l'ensemble des élément de la BD, utilisation globale et facile = 
generates a code that allows to display the BD element, the global and easy use */

class ControllerCharacters {
  private Character: Character;
  private axios: any;
  constructor(axios: any) {
    this.axios = axios;
    this.axios.defaults.baseURL = "https://character-database.becode.xyz/";
    this.Character = new Character("dams", "dams", "dams", "jess");
  }

  public async getCharacters() {
    try {
      const response = await this.axios.get("/characters");
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
export { ControllerCharacters };
