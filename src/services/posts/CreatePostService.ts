import { IPost } from '../../interfaces/post/IPost';
import { createPostRepository } from '../../repositories/posts/CreatePostRepository';
import { findPostByTitle } from '../../repositories/posts/FindPostByTitle';

class CreatePostService {
  async execute(post: IPost) {
    const existedPost = await findPostByTitle.execute(post.title);

    if (existedPost)
      throw new Error(
        'Título escolhido já existe, por favor, escolha um diferente'
      );

    const slug = post.title.replaceAll(' ', '-').toLowerCase();

    return await createPostRepository.execute({ ...post, slug });
  }
}

const createPostService = new CreatePostService();

export { createPostService };
