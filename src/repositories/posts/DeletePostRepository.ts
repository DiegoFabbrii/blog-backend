import { Post } from '../../models/Post';

class DeletePostRepository {
  async execute(id: string) {
    return await Post.findByIdAndDelete(id);
  }
}

const deletePostRepository = new DeletePostRepository();

export { deletePostRepository };
