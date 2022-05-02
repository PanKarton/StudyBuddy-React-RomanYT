import { factory, primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';

const groups = ['A', 'B', 'C', 'D'];

const getRandomAverage = () => `${faker.datatype.number({ min: 2, max: 6, precision: 0.1 })}`;
const getRandomGroup = () => groups[faker.datatype.number({ min: 0, max: groups.length - 1 })];

faker.seed(123);

export const db = factory({
  student: {
    id: primaryKey(faker.datatype.uuid),
    name: () => faker.name.findName(),
    attendance: () => `${faker.datatype.number({ min: 0, max: 100 })}%`,
    average: () => getRandomAverage(),
    group: () => getRandomGroup(),
    course: () => 'Czarodziej magiczny w 30 dni',
    subjectsGrades: () => [
      {
        subject: 'Atrologia',
        grade: getRandomAverage(),
      },
      {
        subject: 'Historia magii',
        grade: getRandomAverage(),
      },
      {
        subject: 'Transmutacja',
        grade: getRandomAverage(),
      },
    ],
  },
});
