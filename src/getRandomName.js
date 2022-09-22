import { faker } from "@faker-js/faker";
faker.setLocale("de");

export function getRandomName() {
  return faker.vehicle.bicycle();
}
