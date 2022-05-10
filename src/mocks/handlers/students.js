import { db } from 'mocks/db';
import { rest } from 'msw';

export const students = [
  rest.get('/students/:id?', (req, res, ctx) => {
    if (req.params.id) {
      const filteredStudent = db.student.findFirst({
        where: {
          id: {
            in: req.params.id,
          },
        },
      });
      if (!filteredStudent) return;
      return res(ctx.status(200), ctx.json({ student: filteredStudent }));
    }
    const students = db.student.getAll();
    return res(ctx.status(200), ctx.json({ students }));
  }),

  rest.post('/students/search', (req, res, ctx) => {
    const allStudents = db.student.getAll();
    const matchingStudents = allStudents.filter((student) => student.name.toLowerCase().includes(req.body.searchPhrase.toLowerCase()));
    return res(ctx.status(200), ctx.json({ students: matchingStudents }));
  }),
];
