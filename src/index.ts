import express from 'express';
import dotenv from 'dotenv';
import { authRoute } from './routes/auth';
import { categoriesRoute } from './routes/categories';
import { postsRoute } from './routes/posts';
import { usersRoute } from './routes/users';

dotenv.config();

const app = express();

app.use(express.json());

app.use(authRoute);
app.use(usersRoute);
app.use(postsRoute);
app.use(categoriesRoute);
