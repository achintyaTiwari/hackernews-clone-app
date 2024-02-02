import { Schema } from 'mongoose';

export const PostSchema = new Schema({
  by: String,
  id: Number,
  time: Number,
  title: String,
  url: String
})