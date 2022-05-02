import { rest } from 'msw';
import { students } from 'mocks/data/students';
import { groups } from 'mocks/data/groups';
import { db } from 'mocks/db';

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups }));
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
    return res(ctx.status(200), ctx.json({ students }));
  }),

  rest.get('/students/:id?', (req, res, ctx) => {
    if (req.params.id) {
      const filteredStudent = db.student.findFirst({
        where: {
          id: {
            equals: req.params.id,
          },
        },
      });
      if (!filteredStudent) return;
      return res(ctx.status(200), ctx.json({ student: filteredStudent }));
    }
    return res(ctx.status(200), ctx.json({ students }));
  }),

  rest.post('/students/search', (req, res, ctx) => {
    const matchingStudents = req.body.searchPhrase ? students.filter((student) => student.name.toLowerCase().includes(req.body.searchPhrase.toLowerCase())) : [];
    return res(ctx.status(200), ctx.json({ students: matchingStudents }));
  }),
];
