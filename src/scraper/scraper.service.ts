import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HackerNewsItem } from '../interfaces/hacker-news-item.interface';
import { HackerNewsAPI } from '../utils/hacker-news-api.service';

@Injectable()
export class ScraperService implements OnModuleInit {

  constructor(
    private hackerNewsAPI: HackerNewsAPI,
    @InjectModel('Post') private postModel: Model<HackerNewsItem>,
  ) {}

  private readonly logger = new Logger('ScraperService');

  async onModuleInit() {
    await this.scrapePosts();
  }

  @Cron('0 0 * * *')
  async scrapePosts() {
    try {
      const storyIds = await this.hackerNewsAPI.getTopStories();

      const stories: HackerNewsItem[] = [];

      for (let i = 0; i < 30; i++) {
        try {
          const story: HackerNewsItem = await this.hackerNewsAPI.getItem(storyIds[i]);
          stories.push(story);
        } catch (error) {
          this.logger.error(`Failed to fetch story with ID ${storyIds[i]}: ${error}`);
        }
      }

      await this.storePosts(stories);

    } catch (error) {
      this.logger.error(`Scrape failed: ${error}`);
    }
  }

  private async storePosts(posts: HackerNewsItem[]) {
    try {
      await this.postModel.insertMany(posts);
      this.logger.log(`Successfully stored ${posts.length} posts`);
    } catch (error) {
      this.logger.error(`Failed to store posts: ${error}`);
    }
  }
}
