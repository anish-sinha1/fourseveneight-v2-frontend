import mongoose from "mongoose";
export default interface IPostItem {
  _id: string;
  title: string;
  content: string;
  publicationDate: Date;
  active: boolean;
  slug: string;
  authors: string[];
  authorNames: string[];
  tags: string[];
  length: string;
  difficulty: string;
  likes?: number;
  comments?: string[];
  commentsActive: boolean;
  summary: string;
}
