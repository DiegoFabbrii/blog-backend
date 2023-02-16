import express from 'express';
import dotenv from 'dotenv';
import { authRoute } from './routes/auth';
import { categoriesRoute } from './routes/categories';
import { postsRoute } from './routes/posts';
import { usersRoute } from './routes/users';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

const port = 3333;

mongoose.set('strictQuery', false);
mongoose.connect(`${process.env.DB_CONNECTION}`).then(() => {
  app.use(express.json());

  app.use(authRoute);
  app.use(usersRoute);
  app.use(postsRoute);
  app.use(categoriesRoute);

  app.listen(port, () =>
    console.log(`server is running on http://localhost:${port}`)
  );
});
