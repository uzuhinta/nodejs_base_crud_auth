import { Router } from 'express';
import { me, updateMe } from './user.controllers';
const router = Router();

router.route('/').get(me).put(updateMe);

export default router;
