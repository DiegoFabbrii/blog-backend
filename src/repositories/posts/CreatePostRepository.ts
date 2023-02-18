import { IPost } from '../../interfaces/post/IPost';
import { Post } from '../../models/Post';

class CreatePostRepository {
  async execute(data: IPost) {
    return await Post.create(data);
  }
}

const createPostRepository = new CreatePostRepository();

export { createPostRepository };
