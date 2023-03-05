import Router from 'express';
import Post from '../model/Post.js';
const router = new Router();

// get
router.get('/', async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (e) {
    res.status(500).json(e);
  }
});

export default router;
