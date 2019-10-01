class Character {
  name: string;
  shortDescription: string;
  image: any;
  description: string;
  constructor(
    name: string,
    shortDescription: string,
    image: any,
    description: string
  ) {
    this.name = name;
    this.image = image;
    this.shortDescription = shortDescription;
    this.description = description;
  }
}
export { Character };
