import { Request, Response } from 'express';
import { deleteUserService } from '../../services/users/DeleteUserService';

class DeleteUserController {
  async execute(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await deleteUserService.execute(id);
      return res.status(200).json({ message: 'Usuário apagado com sucesso' });
    } catch (error) {
      if (error instanceof Error)
        return res.status(500).json({ error: error.message });
    }
  }
}

const deleteUserController = new DeleteUserController();

export { deleteUserController };
