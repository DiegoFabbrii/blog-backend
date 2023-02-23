import { IUpdateUser } from '../../interfaces/user/IUpdateUser';
import { User } from '../../models/User';

class UpdateUserRepository {
  async execute(_id: string, data: IUpdateUser) {
    return await User.updateOne({ _id }, data);
  }
}

const updateUserRepository = new UpdateUserRepository();

export { updateUserRepository };
