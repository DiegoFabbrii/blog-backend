import { IUpdatedPost } from '../../interfaces/post/IUpdatedPost';
import { Post } from '../../models/Post';

class UpdatePostRepository {
  async execute(updatedData: IUpdatedPost, _id: string) {
    return await Post.findByIdAndUpdate(_id, updatedData);
  }
}

const updatePostRepository = new UpdatePostRepository();

export { updatePostRepository };
