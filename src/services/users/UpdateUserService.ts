import { compare, hash } from 'bcrypt';
import { IUpdateUser } from '../../interfaces/user/IUpdateUser';
import { findUserByEmail } from '../../repositories/users/FindUserByEmail';
import { findUserByIdRepository } from '../../repositories/users/FindUserByIdRepository';
import { findUserByUsername } from '../../repositories/users/FindUserByUsername';
import { updateUserRepository } from '../../repositories/users/UpdateUserRepository';

class UpdateUserService {
  async execute(data: IUpdateUser, userId: string) {
    const logedUser = await findUserByIdRepository.execute(userId);

    let newData: IUpdateUser = {
      ...data,
    };

    //VALIDATIONS MESSAGES
    if (data.password) {
      const userHashedPassword = logedUser
        ? await compare(data.password as string, logedUser.password)
        : false;

      const newHashedPassword = await hash(data.password, 10);
      newData = {
        ...data,
        password: newHashedPassword,
      };

      if (userHashedPassword)
        throw new Error('Atualize sua senha para uma senha diferente da atual');
    }

    if (data.username?.length === 0)
      throw new Error('Novo nome de usuário não pode estar vazio');

    if (data.email?.length === 0)
      throw new Error('Seu novo email não pode estar vazio');

    if (data.password?.length === 0)
      throw new Error('Sua nova senha não pode estar vazia');

    if (logedUser?.username === data.username)
      throw new Error(
        'Atualize seu nome de usuário para um nome diferente do atual'
      );

    if (logedUser?.email === data.email)
      throw new Error('Atualize seu email para um email diferente do atual');

    if (data.username) {
      const existedUsername = await findUserByUsername.execute(data.username);

      if (data.username === existedUsername?.username)
        throw new Error('Nome de usuário já está em uso');
    }

    if (data.email) {
      const existedEmail = await findUserByEmail.execute(data.email);

      if (data.email === existedEmail?.email)
        throw new Error('Email informado já está em uso');
    }

    return await updateUserRepository.execute(userId, newData);
  }
}

const updateUserService = new UpdateUserService();

export { updateUserService };
