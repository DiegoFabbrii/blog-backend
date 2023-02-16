import { Schema, model } from 'mongoose';
import { hash } from 'bcrypt';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  avatar_image: {
    type: String,
    default: '',
  },
});

userSchema.pre('save', async function (next) {
  this.password = await hash(this.password, 10);
  next();
});

const User = model('User', userSchema);

export { User };
