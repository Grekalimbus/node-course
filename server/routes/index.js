import Router from 'express';
import post from './post.routes.js';

const router = new Router();

router.use('/post', post);
export default router;
