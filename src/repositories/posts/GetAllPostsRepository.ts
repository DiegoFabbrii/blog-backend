import { Post } from '../../models/Post';

class GetAllPostsRepository {
  async execute() {
    return await Post.find();
  }
}

const getAllPostsRepository = new GetAllPostsRepository();

export { getAllPostsRepository };
