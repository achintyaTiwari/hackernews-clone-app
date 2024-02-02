import { Controller, Get, Logger } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts') 
export class PostsController {
  private readonly logger = new Logger(PostsController.name);

  constructor(private postService: PostService) {}

  @Get()
  async getRecentPosts() {
    try {
      const recentPosts = await this.postService.getRecentPosts();
      return recentPosts;
    } catch (error) {
      this.logger.error(`Error while fetching recent posts: ${error.message}`, error.stack);
      throw new Error('Internal Server Error');
    }
  }
}
