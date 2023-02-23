import { Schema, model } from 'mongoose';
import { hash } from 'bcrypt';
import { IUser } from '../interfaces/user/IUser';

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

// userSchema.pre('updateOne', async function (this: any, next) {
//   const hashedPassword = await hash(this.getUpdate().password, 10);
//   const update = this._update;

//   if (update.password) {
//     update.password = hashedPassword;
//   }
//   if (update.username) {
//     update.username = update.username.toLowerCase();
//   }
//   if (update.email) {
//     this.email = update.email.ToLowerCase();
//   }

//   next();
// });

const User = model<IUser>('User', userSchema);

export { User };
