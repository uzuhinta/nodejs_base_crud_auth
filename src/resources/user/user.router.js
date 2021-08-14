import { Router } from 'express';
const router = Router();

const controllers = (req, res) => {
  res.json({ user: 'hello World' });
};

router.route('/').get(controllers).put(controllers);

export default router;
