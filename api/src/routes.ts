import {request, response, Router} from 'express'

const routes = Router();

routes.get('/', (request, response) => {response.json({ok: true})});

export default routes;
