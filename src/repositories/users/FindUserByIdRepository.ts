import { User } from '../../models/User';

class FindUserByIdRepository {
  async execute(_id: string) {
    return await User.findById(_id);
  }
}

const findUserByIdRepository = new FindUserByIdRepository();

export { findUserByIdRepository };
