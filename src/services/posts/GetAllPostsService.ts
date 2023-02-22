import { IUser } from '../../interfaces/user/IUser';
import { getAllPostsRepository } from '../../repositories/posts/GetAllPostsRepository';

class GetAllPostsService {
  async execute() {
    const posts = await getAllPostsRepository.execute();

    const data = posts.map((post) => ({
      id: post._id,
      title: post.title,
      content: post.content,
      post_image: post.post_image,
      slug: post.slug,
      user: {
        username: post.user.username,
        avatar_image: post.user.avatar_image,
      },
      category: {
        name: post.category.name,
      },
    }));

    return data;
  }

  private _isUser(obj: IUser) {
    const username = obj.username;
    const avatar_image = obj.avatar_image;

    return typeof username === 'string' && typeof avatar_image === 'string';
  }
}

const getAllPostsService = new GetAllPostsService();

export { getAllPostsService };
