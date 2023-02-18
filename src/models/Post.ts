import { Schema, model } from 'mongoose';

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    content: {
      type: String,
      required: true,
    },

    post_image: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
    },

    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },

    category_id: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
  },
  { timestamps: true }
);

const Post = model('Post', postSchema);

export { Post };
