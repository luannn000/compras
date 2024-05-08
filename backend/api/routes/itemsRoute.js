import { Router } from 'express';
import ItemsController from '../controllers/ItemsController.js';

const itemsRoutes = Router();

itemsRoutes.post('/', ItemsController.create);

itemsRoutes.get('/', ItemsController.findAll);

itemsRoutes.get('/:id', ItemsController.findByID);

itemsRoutes.put('/:id', ItemsController.update);

itemsRoutes.delete('/:id', ItemsController.delete);

export default itemsRoutes;
