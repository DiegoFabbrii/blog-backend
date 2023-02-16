import { IUser } from '../../interfaces/user/IUser';
import { User } from '../../models/User';

class CreateUserRepository {
  async execute(user: IUser) {
    return await User.create(user);
  }
}

const createUserRepository = new CreateUserRepository();

export { createUserRepository };
