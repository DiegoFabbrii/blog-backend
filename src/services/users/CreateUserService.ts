import { IUser } from '../../interfaces/user/IUser';
import { createUserRepository } from '../../repositories/users/CreateUserRepository';
import { findUserByEmail } from '../../repositories/users/FindUserByEmail';
import { findUserByUsername } from '../../repositories/users/FindUserByUsername';

class CreateUserService {
  async execute(user: IUser) {
    const existedEmail = await findUserByEmail.execute(user.email);
    const existedUsername = await findUserByUsername.execute(user.username);

    if (existedEmail || existedUsername) {
      throw new Error('Email ou usuário já está cadastrado');
    }

    return await createUserRepository.execute(user);
  }
}

const createUserService = new CreateUserService();

export { createUserService };
