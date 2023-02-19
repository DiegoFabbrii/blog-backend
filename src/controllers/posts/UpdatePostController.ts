import { Request, Response } from 'express';
import { updatePostService } from '../../services/posts/UpdatePostService';

class UpdatePostController {
  async execute(req: Request, res: Response) {
    const id = req.params.id;

    try {
      await updatePostService.execute(req.body, id);
      return res.status(200).json({ message: 'Post atualizado com sucesso' });
    } catch (error) {
      if (error instanceof Error)
        return res.status(500).json({ error: error.message });
    }
  }
}

const updatePostController = new UpdatePostController();

export { updatePostController };
