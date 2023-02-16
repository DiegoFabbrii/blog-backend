import { Request, Response } from 'express';
import { createUserService } from '../../services/users/CreateUserService';

class CreateUserController {
  async create(req: Request, res: Response) {
    const { username, email, password, avatar_image } = req.body;

    try {
      await createUserService.execute({
        username,
        email,
        password,
        avatar_image,
      });

      return res.status(201).json({ message: 'Usuário criado com sucesso' });
    } catch (error: unknown) {
      if (error instanceof Error)
        return res.status(500).json({ error: error.message });
    }
  }
}

const createUserController = new CreateUserController();

export { createUserController };
