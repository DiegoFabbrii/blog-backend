import { User } from '../../models/User';

class DeleteUserRepository {
  async execute(id: string) {
    return await User.findByIdAndDelete(id);
  }
}

const deleteUserRepository = new DeleteUserRepository();

export { deleteUserRepository };
