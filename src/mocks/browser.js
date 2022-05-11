import { setupWorker } from 'msw';
import { db } from './db';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

const seed = () => {
  for (let i = 0; i < 25; i++) {
    db.student.create();
  }

  db.student.create({
    name: 'Miriamcia',
  });

  db.teacher.create();
};

seed();
