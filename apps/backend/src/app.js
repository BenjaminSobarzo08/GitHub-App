import cors from 'cors';
import express from 'express';
import { env } from './config/env.js';
import { usersRouter } from './routes/users.routes.js';

export const app = express();

app.use(cors({ origin: env.frontendUrl }));
app.use(express.json());

app.get('/api/health', (_request, response) => response.json({ status: 'ok' }));
app.use('/api/users', usersRouter);

app.use((error, _request, response, _next) => {
  console.error(error);
  const status = error.status === 401 || error.status === 403 ? 502 : 500;
  response.status(status).json({
    message: 'No se pudo consultar GitHub. Verificá el token e intentá nuevamente.',
  });
});
