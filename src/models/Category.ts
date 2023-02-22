import { Schema, model } from 'mongoose';
import { ICategory } from '../interfaces/category/ICategory';

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Category = model<ICategory>('Category', categorySchema);

export { Category };
