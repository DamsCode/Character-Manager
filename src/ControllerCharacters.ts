import { Character } from "./Character";

// let c = new Character("damien", "test", "test");
class ControllerCharacters {
  private Character: Character;
  private axios: any;
  constructor(axios: any) {
    this.axios = axios;
    this.axios.defaults.baseURL = "https://character-database.becode.xyz/";
    this.Character = new Character("dams", "dams", "dams");
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
