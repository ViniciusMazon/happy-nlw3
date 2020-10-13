import { request, response, Router } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './app/models/Orphanage';

const routes = Router();

routes.post('/orphanages', async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  } = request.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  });

  await orphanagesRepository.save(orphanage);
  response.status(201).send(orphanage);
});

export default routes;
