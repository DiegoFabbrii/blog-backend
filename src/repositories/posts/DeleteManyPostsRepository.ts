import { Post } from '../../models/Post';

class DeleteManyPostsRepository {
  async execute(_id: string) {
    return await Post.deleteMany({ user: { _id } });
  }
}

const deleteManyPostsRepository = new DeleteManyPostsRepository();

export { deleteManyPostsRepository };
