import { rest } from 'msw';
import { students } from 'mocks/data/students';
import { groups } from 'mocks/data/groups';

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups }));
  }),
  rest.get('/students/:groupID?', (req, res, ctx) => {
    if (req.params.groupID) {
      const filteredStudents = students.filter((student) => student.group === req.params.groupID);
      return res(ctx.status(200), ctx.json({ students: filteredStudents }));
    }
    return res(ctx.status(200), ctx.json({ students }));
  }),
  rest.get('/students/name/:name?', (req, res, ctx) => {
    if (req.params.name) {
      const filteredStudents = students.filter((student) => student.name.toLowerCase().includes(req.params.name.toLowerCase()));
      return res(ctx.status(200), ctx.json({ students: filteredStudents }));
    }
    return res(ctx.status(200), ctx.json({ students }));
  }),
];
