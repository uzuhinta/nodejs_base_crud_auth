import { Router } from 'express';
const router = Router();

const controllers = (req, res) => {
  res.json({ hello: 'world' });
};

router.route('/').get(controllers).post(controllers);
router.route('/:id').get(controllers).put(controllers).delete(controllers);

export default router;