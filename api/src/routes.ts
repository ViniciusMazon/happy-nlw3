import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanageController from './app/controllers/Orphanage';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images'), OrphanageController.create);
routes.get('/orphanages/:id', OrphanageController.show);
routes.get('/orphanages', OrphanageController.index);

export default routes;
