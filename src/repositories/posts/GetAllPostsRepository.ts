import { Post } from '../../models/Post';

class GetAllPostsRepository {
  async execute() {
    return await Post.find().sort({ _id: -1 }).populate({
      path: 'user',
      select: '-password',
    });
  }
}

const getAllPostsRepository = new GetAllPostsRepository();

export { getAllPostsRepository };
