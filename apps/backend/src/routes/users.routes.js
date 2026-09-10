import { Router } from 'express';
import { getUserWithRepositories } from '../services/github.service.js';

export const usersRouter = Router();

usersRouter.get('/:username', async (request, response, next) => {
  const { username } = request.params;

  if (!/^[a-zA-Z0-9-]{1,39}$/.test(username)) {
    return response.status(400).json({ message: 'El usuario de GitHub no es válido.' });
  }

  try {
    const data = await getUserWithRepositories(username);
    return response.json(data);
  } catch (error) {
    if (error.status === 404) {
      return response.status(404).json({ message: 'Usuario de GitHub no encontrado.' });
    }

    return next(error);
  }
});
