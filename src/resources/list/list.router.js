import { Router } from 'express';
import listControllers from './list.controllers';
const router = Router();

router.route('/').get(listControllers.getMany).post(listControllers.createOne);
router
  .route('/:id')
  .get(listControllers.getOne)
  .put(listControllers.updateOne)
  .delete(listControllers.removeOne);

export default router;
