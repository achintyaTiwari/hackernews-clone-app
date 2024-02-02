import { Module } from '@nestjs/common';
import { PostsController } from './posts/post.controller';
import { PostService } from './posts/post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './posts/schema/post.schema';
import { DatabaseConnection } from './database/database.connection';
import { ScraperService } from './scraper/scraper.service';
import { HackerNewsAPI } from './utils/hacker-news-api.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-demo'),
    MongooseModule.forFeature([{ 
      name: 'Post', schema: PostSchema 
    }])
  ],
  controllers: [PostsController],
  providers: [HackerNewsAPI ,PostService,DatabaseConnection,ScraperService]
})
export class AppModule {}