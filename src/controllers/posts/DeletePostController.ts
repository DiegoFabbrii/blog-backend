import { Request, Response } from 'express';
import { deletePostService } from '../../services/posts/DeletePostService';

class DeletePostController {
  async execute(req: Request, res: Response) {
    const id = req.params.id;

    try {
      await deletePostService.execute(id);
      return res.status(200).json({ message: 'Post deletado com sucesso' });
    } catch (error) {
      if (error instanceof Error)
        return res.status(500).json({ error: error.message });
    }
  }
}

const deletePostController = new DeletePostController();

export { deletePostController };
