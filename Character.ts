class Character {
  name: string;
  shortDescription: string;
  image: File;
  description: string;
  constructor(
    name: string,
    shortDescription: string,
    image: File,
    description: string
  ) {
    this.name = name;
    this.shortDescription = shortDescription;
    this.image = image;
    this.description = description;
  }
}
