import Post from '../model/Post.js';

class PostService {
  async create(data) {
    const createdPost = await Post.create(data);
    return createdPost;
  }
  async getAll() {
    const postsAll = await Post.find();
    return postsAll;
  }
  async getOne(id) {
    const postsOne = await Post.findById(id);
    return postsOne;
  }
  async upDate(id) {
    const postsUpdate = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return postsUpdate;
  }
  async remove(id) {
    const postsRemove = await Post.findByIdAndDelete(id);
    return postsRemove;
  }
}

export default new PostService();
