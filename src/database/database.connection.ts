import { Injectable } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Injectable()
export class DatabaseConnection {

  constructor() {
    this.connect();
  }

  async connect() {
    try {
      MongooseModule.forRoot('mongodb://localhost/nestjs-demo');
      console.log('Connected to MongoDB');
    } catch (error) {
      console.log('MongoDB Connection Error', error);
      process.exit(1); 
    }
  }

}