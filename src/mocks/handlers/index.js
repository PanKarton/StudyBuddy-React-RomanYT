import { groups } from './groups';
import { auth } from './auth';
import { students } from './students';

export const handlers = [...groups, ...auth, ...students];
