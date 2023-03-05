import Post from '../model/Post.js';
import filesServices from './files.services.js';

class PostService {
  async create(data, picture) {
    const fielName = filesServices.saveFile(picture);
    const createdPost = await Post.create({ ...data, picture: fielName });
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
