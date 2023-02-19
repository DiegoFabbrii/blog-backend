import { Post } from '../../models/Post';

class FindPostFromUserRepository {
  async execute(id: string) {
    return await Post.find().where({ user: { _id: id } });
  }
}

const findPostFromUserRepository = new FindPostFromUserRepository();

export { findPostFromUserRepository };
