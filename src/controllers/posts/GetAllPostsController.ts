import { Request, Response } from 'express';
import { getAllPostsService } from '../../services/posts/GetAllPostsService';

class GetAllPostsController {
  async execute(req: Request, res: Response) {
    try {
      const posts = await getAllPostsService.execute();
      return res.status(200).json(posts);
    } catch (error) {
      if (error instanceof Error)
        return res.status(500).json({ error: error.message });
    }
  }
}

const getAllPostsController = new GetAllPostsController();

export { getAllPostsController };
