import { db } from 'mocks/db';
import { rest } from 'msw';

const groupsNames = ['A', 'B', 'C', ' D'];

export const groups = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups: groupsNames }));
  }),

  rest.get('/groups/:id?', (req, res, ctx) => {
    if (req.params.id) {
      const filteredStudents = db.student.findMany({
        where: {
          group: {
            equals: req.params.id,
          },
        },
      });
      if (filteredStudents === 0) return;
      return res(ctx.status(200), ctx.json({ students: filteredStudents }));
    }
    const students = db.student.getAll();
    return res(ctx.status(200), ctx.json({ students }));
  }),
];
