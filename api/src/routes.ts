import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanageController from './app/controllers/Orphanage';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images'), OrphanageController.create);
routes.put('/orphanages/:id', upload.array('images'), OrphanageController.edit);
routes.get('/orphanages/:id', OrphanageController.show);
routes.delete('/orphanages/:id', OrphanageController.delete);
routes.get('/orphanages', OrphanageController.index);

export default routes;
