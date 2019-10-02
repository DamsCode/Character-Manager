import { Character } from "./Character";

// let c = new Character("damien", "test", "test");
class ControllerCharacters {
  private axios: any;
  constructor(axios: any) {
    this.axios = axios;
    this.axios.defaults.baseURL = "https://character-database.becode.xyz/";
  }

  public async getAllCharacters() {
    try {
      const response = await this.axios.get("/characters");

      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  public async getOneCharacter(id: string) {
    try {
      const response = await this.axios.get(`/characters/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  public async deleteCharacter(id: string) {
    try {
      const response = await this.axios.delete(`/characters/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
export { ControllerCharacters };
