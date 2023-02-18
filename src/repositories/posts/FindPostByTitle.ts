import { Post } from '../../models/Post';

class FindPostByTitle {
  async execute(title: string) {
    return await Post.findOne({ title });
  }
}

const findPostByTitle = new FindPostByTitle();

export { findPostByTitle };
