import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import { db } from 'mocks/db';

const server = setupServer(...handlers);

beforeAll(() => {
  for (let i = 0; i < 25; i++) {
    db.student.create();
  }

  db.student.create({
    name: 'Miriamcia',
  });

  db.teacher.create();

  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
