import Post from '../model/Post.js';

class PostController {
  async create(req, res) {
    try {
      const post = await Post.find();
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const posts = await Post.find();
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
      const posts = await Post.findById(id);
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
      const posts = await Post.findByIdAndUpdate(id, req.body, { new: true });
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
      const posts = await Post.findByIdAndDelete(id);
      res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();
