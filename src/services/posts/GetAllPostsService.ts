import { getAllPostsRepository } from '../../repositories/posts/GetAllPostsRepository';

class GetAllPostsService {
  async execute() {
    const posts = await getAllPostsRepository.execute();

    return posts;
  }
}

const getAllPostsService = new GetAllPostsService();

export { getAllPostsService };
