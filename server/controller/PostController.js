import postService from '../services/post.service.js';

class PostController {
  async create(req, res) {
    try {
      const post = await postService.create(req.body);
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const posts = await postService.getAll();
      res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(500).json('Айди не указан');
      }
      const posts = await postService.getOne(id);
      res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async upDate(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(500).json('Айди не указан');
      }
      const posts = await postService.upDate(id);
      res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async remove(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(500).json('Айди не указан');
      }
      const posts = await postService.remove(id);
      res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();
