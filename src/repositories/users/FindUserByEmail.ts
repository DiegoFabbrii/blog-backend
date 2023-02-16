import { User } from '../../models/User';

class FindUserByEmail {
  async execute(email: string) {
    return await User.findOne({ email });
  }
}

const findUserByEmail = new FindUserByEmail();

export { findUserByEmail };
