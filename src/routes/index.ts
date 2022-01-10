import { Router } from 'express';
import publicRoutes from './public.routes';

const routes = Router();

routes.use(publicRoutes);

export { routes };
