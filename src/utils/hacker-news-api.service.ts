import { Injectable, Logger } from '@nestjs/common';
import { HackerNewsItem } from '../interfaces/hacker-news-item.interface';
import axios from 'axios';

@Injectable()
export class HackerNewsAPI {

  private apiBase = 'https://hacker-news.firebaseio.com/v0';
  private logger = new Logger("HackerNewsAPI");

  async getTopStories(): Promise<number[]> {
    try {
      const response = await axios.get(`${this.apiBase}/topstories.json`);
      return response.data; 
    } catch (error) {
      this.logger.error(`Error fetching top stories: ${error.message}`, error.stack);
      throw new Error('Failed to fetch top stories');
    }
  }

  async getItem(id: number): Promise<HackerNewsItem> {
    try {
      const response = await axios.get(`${this.apiBase}/item/${id}.json`);
      return response.data;
    } catch (error) {
      this.logger.error(`Error fetching item ${id}: ${error.message}`, error.stack);
      throw new Error(`Failed to fetch item ${id}`);
    }
  }
}
