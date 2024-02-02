import { Injectable, Logger, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HackerNewsItem } from '../interfaces/hacker-news-item.interface';

@Injectable()
export class PostService {
  private readonly logger = new Logger(PostService.name);

  constructor(@InjectModel('Post') private postModel: Model<HackerNewsItem>) {}

  async getRecentPosts(): Promise<HackerNewsItem[]> {
    try {
      return await this.postModel
        .find()
        .sort({ createdAt: -1 })
        .limit(30);
    } catch (error) {
      this.logger.error(`Error while fetching recent posts: ${error.message}`, error.stack);
      throw new InternalServerErrorException('Unable to fetch recent posts');
    }
  }
}
