import { Request, Response } from 'express';
import { createPostService } from '../../services/posts/CreatePostService';

class CreatePostController {
  async execute(req: Request, res: Response) {
    const data = req.body;
    const userId = req.userId;

    try {
      await createPostService.execute({ ...data, user: userId });
      return res.status(201).json({ message: 'Post criado com sucesso' });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
      }
    }
  }
}

const createPostController = new CreatePostController();

export { createPostController };
