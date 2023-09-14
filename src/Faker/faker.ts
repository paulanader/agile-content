import { Faker, en } from "@faker-js/faker";

const options = {
  locales: {
    en,
  },
  locale: "en",
};

const faker = new Faker(options);

const getImage = () => faker.image.url();
const getType = () => faker.animal.type();
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();

type AnimalType =
  | "dog"
  | "cat"
  | "cow"
  | "bird"
  | "crocodilia"
  | "horse"
  | "bear"
  | "cetacean"
  | "rabbit"
  | "insect"
  | "lion"
  | "snake"
  | "fish";

const animalTypes: Record<AnimalType, string> = {
  dog: faker.animal.dog(),
  cat: faker.animal.cat(),
  cow: faker.animal.cow(),
  bird: faker.animal.bird(),
  crocodilia: faker.animal.crocodilia(),
  horse: faker.animal.horse(),
  bear: faker.animal.bear(),
  cetacean: faker.animal.cetacean(),
  rabbit: faker.animal.rabbit(),
  insect: faker.animal.insect(),
  lion: faker.animal.lion(),
  snake: faker.animal.snake(),
  fish: faker.animal.fish(),
};

export const fakeAnimalList = [...new Array(100)].map((_, index) => {
  const type = getType() as AnimalType;

  return {
    type,
    id: index + 1,
    url: getUrl(),
    title: animalTypes[type],
    description: getText(),
    image: getImage(),
  };
});
