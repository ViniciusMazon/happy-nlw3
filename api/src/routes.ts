import { Request, Response, Router } from 'express';
import OrphanageController from './app/controllers/Orphanage';

const routes = Router();

routes.post('/orphanages', OrphanageController.create);
routes.get('/orphanages', OrphanageController.index);

export default routes;
