import { User } from '../../models/User';

class FindUserByUsername {
  async execute(username: string) {
    return await User.findOne({ username });
  }
}

const findUserByUsername = new FindUserByUsername();

export { findUserByUsername };
