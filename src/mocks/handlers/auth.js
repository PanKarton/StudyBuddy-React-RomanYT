import { db } from 'mocks/db';
import { rest } from 'msw';

const sanitizeUser = (user) => {
  const { password, ...rest } = user;
  return rest;
};

export const auth = [
  rest.post('/login', (req, res, ctx) => {
    const user = db.teacher.findFirst({
      where: {
        login: {
          equals: req.body.login,
        },
      },
    });
    if (!user) return res(ctx.status(200), ctx.json({ error: 'No user found' }));
    if (user.password !== req.body.password) return res(ctx.status(200), ctx.json({ error: 'Invalid login data' }));
    const token = btoa(user.login);
    localStorage.setItem('__be_token__', token);
    return res(ctx.status(200), ctx.json({ ...sanitizeUser(user), token }));
  }),

  rest.get('/me', (req, res, ctx) => {
    if (!isAutenticated(req)) return res(ctx.status(401), ctx.json({ error: 'Sorry buddy, you are not who you claim to be ;///' }));
  }),
];
