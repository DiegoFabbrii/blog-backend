import { Router } from 'express';
import { getAllPostsController } from '../../controllers/posts/GetAllPostsController';

const postsRoute = Router();

postsRoute.get('/posts', getAllPostsController.execute);
postsRoute.patch('/post/update/:id');
postsRoute.delete('/post/delete/:id');

export { postsRoute };
