import { setupWorker } from 'msw';
import { db } from './db';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

const createStudents = (number) => {
  for (let i = 0; i < number; i++) {
    db.student.create();
  }
};

createStudents(25);
db.student.create({
  name: 'Miriamcia',
});

db.teacher.create();
