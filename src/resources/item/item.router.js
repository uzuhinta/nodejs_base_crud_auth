import { Router } from 'express';
import itemControllers from './item.controllers';

const router = Router();

router
  .route('/')
  .get(itemControllers.getMany)
  .post(itemControllers.createOne);

router
  .route('/:id')
  .get(itemControllers.getOne)
  .put(itemControllers.updateOne)
  .delete(itemControllers.removeOne);

export default router;
