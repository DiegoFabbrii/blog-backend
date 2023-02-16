import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { findUserByEmail } from '../../repositories/users/FindUserByEmail';

class AuthUserService {
  async execute(email: string, password: string) {
    const user = await findUserByEmail.execute(email);
    const userPassowrd = user ? await compare(password, user.password) : false;

    if (!user || !userPassowrd) {
      throw new Error('Email ou senha incorreta');
    }

    const token = sign({ id: user._id }, `${process.env.SECRET_KEY}`, {
      expiresIn: '1d',
    });

    return {
      id: user._id,
      username: user.username,
      email: user.email,
      avatar_image: user.avatar_image,
      token,
    };
  }
}

const authUserService = new AuthUserService();

export { authUserService };
