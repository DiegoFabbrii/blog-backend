import { Request, Response } from 'express';
import { updateUserService } from '../../services/users/UpdateUserService';

class UpdateUserController {
  async execute(req: Request, res: Response) {
    const data = req.body;
    const { id } = req.params;
    try {
      await updateUserService.execute(data, id);
      return res
        .status(200)
        .json({ message: 'Dados do usuário atualizado com sucesso' });
    } catch (error) {
      if (error instanceof Error)
        return res.status(500).json({ error: error.message });
    }
  }
}

const updateUserController = new UpdateUserController();

export { updateUserController };
