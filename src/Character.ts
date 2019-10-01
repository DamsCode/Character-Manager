class Character {
  name: string;
  shortDescription: string;
  image: any;
  // image: File;
  description: string;
  constructor(
    name: string,
    shortDescription: string,
    description: string,
    image: any
  ) {
    this.name = name;
    this.shortDescription = shortDescription;
    this.description = description;
    this.image = image;
  }
}
export { Character };
