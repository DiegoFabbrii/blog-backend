import { Router } from 'express';
import { createPostController } from '../../controllers/posts/CreatePostController';
import { deletePostController } from '../../controllers/posts/DeletePostController';
import { findPostFromUserController } from '../../controllers/posts/FindPostsFromUser';
import { getAllPostsController } from '../../controllers/posts/GetAllPostsController';
import { updatePostController } from '../../controllers/posts/UpdatePostController';
import { authMiddleware } from '../../middlewares/authMiddleware';

const postsRoute = Router();

postsRoute.get('/posts', getAllPostsController.execute);
postsRoute.get('/posts/user/:id', findPostFromUserController.execute);

postsRoute.post('/post', authMiddleware, createPostController.execute);

postsRoute.patch(
  '/post/update/:id',
  authMiddleware,
  updatePostController.execute
);

postsRoute.delete('/post/delete/:id', deletePostController.execute);

export { postsRoute };
