import { Router } from 'express';

const router = Router();

router
  .route('/')
  .get((req, res) => {
    res.send('Test route');
  })
  .post((req, res) => {
    res.send('Test route');
  });

router
  .route('/:id')
  .get((req, res) => {
    res.send('Test route');
  })
  .put((req, res) => {
    res.send('Test route');
  })
  .delete((req, res) => {
    res.send('Test route');
  });

export default router;
