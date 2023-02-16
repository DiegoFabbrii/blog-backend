import { Request, Response } from 'express';
import { authUserService } from '../../services/users/AuthUserService';

class AuthUserController {
  async execute(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const user = await authUserService.execute(email, password);
      return res.status(200).json(user);
    } catch (error) {
      if (error instanceof Error)
        return res.status(500).json({ error: error.message });
    }
  }
}

const authUserController = new AuthUserController();

export { authUserController };
