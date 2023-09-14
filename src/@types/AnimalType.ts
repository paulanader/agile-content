export enum AnimalOptions {
  DOG = "Dog",
  CAT = "Cat",
  COW = "Cow",
  BIRD = "Bird",
  CROCODILIA = "Crocodilia",
  HORSE = "Horse",
  BEAR = "Bear",
  CETACEAN = "Cetacean",
  RABBIT = "Rabbit",
  INSECT = "Insect",
  LION = "Lion",
  SNAKE = "Snake",
  FISH = "Fish",
}

export type AnimalType = {
  id: number;
  description: string;
  image: string;
  type: string;
  url: string;
  title: string;
};
