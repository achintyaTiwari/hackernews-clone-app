# Nest.js Backend Project Setup Guide

## Project Structure

The project has the following structure:

```
src/
|-- main.ts
|-- app.module.ts
|-- database/
|   |-- database.connection.ts
|-- interfaces/
|   |-- hacker-news-item.interface.ts
|-- posts/
|   |-- post.controller.ts
|   |-- post.service.ts
|   |-- schema/
|       |-- post.schema.ts
|-- scraper/
|   |-- scraper.service.ts
|-- utils/
    |-- hacker-news-api.service.ts
```

- **main.ts:** Entry point of the application.
- **app.module.ts:** Root module where other modules and controllers are imported.
- **database:** Directory containing the database connection configuration.
- **interfaces:** Contains interfaces used within the application.
- **posts:** Module related to handling posts, including controllers, services, and schemas.
- **scraper:** Module for scraping functionality.
- **utils:** Utility functions and services.

## Setup Instructions

Follow these steps to set up and run the Nest.js application:

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure MongoDB:**
   - Ensure you have MongoDB installed and running.
   - Update the MongoDB connection details in `src/database/database.connection.ts`.

4. **Run the Application:**
   ```bash
   npm run start
   ```

   The application will start on port 3000 by default. You can change the port in the `main.ts` file if needed.

## Documentation

- **Database Connection:**
  - The MongoDB connection details can be configured in `src/database/database.connection.ts`.

- **Posts Module:**
  - The `posts` module handles posts, including CRUD operations.
  - `post.controller.ts` contains the HTTP route handlers.
  - `post.service.ts` provides the business logic for post-related operations.
  - `post.schema.ts` defines the MongoDB schema for posts.

- **Scraper Module:**
  - The `scraper` module is responsible for scraping functionality.
  - `scraper.service.ts` contains the scraping logic.

- **Utils Module:**
  - The `utils` module contains utility functions.
  - `hacker-news-api.service.ts` provides a service for interacting with the Hacker News API.

## Running the Application

Application using MongoDb as database 

Once the setup is complete, run the application using:

```bash
npm run start
```

Access the application at [http://localhost:3000](http://localhost:3000).