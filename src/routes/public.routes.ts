import { Router } from 'express';

const router = Router();

router.get('/login', (request, response) => {
  return response.json({ message: 'hello world' });
})

export default router;
