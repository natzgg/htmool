import { faker } from "@faker-js/faker";
import { Tenant } from "./type";
faker.seed(111);
const range = (len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newTenant = (): Tenant => {
  return {
    name: faker.person.fullName(),
    property: faker.location.secondaryAddress(),
    startDate: faker.date.recent({ days: 60 }),
    monthlyRent: faker.finance.amount({
      min: 300,
      max: 1000,
      symbol: "$",
      dec: 0,
    }),
    status: faker.helpers.shuffle<Tenant["status"]>(["Late", "Paid"])[0]!,
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Tenant[] => {
    const len = lens[depth]!;
    return range(len).map((d): Tenant => {
      return {
        ...newTenant(),
      };
    });
  };

  return makeDataLevel();
}
