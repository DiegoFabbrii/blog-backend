import { Router } from 'express';

const postsRoute = Router();

postsRoute.get('/posts');
postsRoute.patch('/post/update/:id');
postsRoute.delete('/post/delete/:id');

export { postsRoute };
