import { Request, Response } from 'express';
import { findPostFromUserService } from '../../services/posts/FindPostsFromUserService';

class FindPostFromUserController {
  async execute(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const posts = await findPostFromUserService.execute(id);
      return res.status(200).json(posts);
    } catch (error) {
      if (error instanceof Error)
        return res.status(500).json({ error: error.message });
    }
  }
}

const findPostFromUserController = new FindPostFromUserController();

export { findPostFromUserController };
