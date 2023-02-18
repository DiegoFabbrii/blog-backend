import { Router } from 'express';
import { createPostController } from '../../controllers/posts/CreatePostController';
import { getAllPostsController } from '../../controllers/posts/GetAllPostsController';
import { authMiddleware } from '../../middlewares/authMiddleware';

const postsRoute = Router();

postsRoute.get('/posts', getAllPostsController.execute);
postsRoute.post('/post', authMiddleware, createPostController.execute);
postsRoute.patch('/post/update/:id');
postsRoute.delete('/post/delete/:id');

export { postsRoute };
