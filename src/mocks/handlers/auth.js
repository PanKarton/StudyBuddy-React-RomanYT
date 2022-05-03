import { db } from 'mocks/db';
import { rest } from 'msw';

const sanitizeUser = (user) => {
  const { password, ...rest } = user;
  return rest;
};

export const auth = [
  rest.post('/login', (req, res, ctx) => {
    const user = db.findFirst({
      where: {
        login: {
          equals: req.body.login,
        },
      },
    });
    if (user.password !== req.body.password) return res(ctx.status(200), ctx.json({ error: 'Invalid login data' }));
    const token = btoa(user.login);
    localStorage.setItem('__be_token__', token);
    return res(ctx.status(200), ctx.json({ ...sanitizeUser(user) }));
  }),
];
