import { Document, PopulatedDoc } from 'mongoose';
import { ICategory } from '../category/ICategory';
import { IUser } from '../user/IUser';

interface IPost {
  title: string;
  content: string;
  post_image: string;
  slug: string;
  user: PopulatedDoc<IUser & Document>;
  category: PopulatedDoc<ICategory & Document>;
}

export { IPost };
