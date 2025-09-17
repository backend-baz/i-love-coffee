**I Love Coffee, NestJs REST API**

This app provides information about coffee. It was created by [**Nest**](https://nestjs.com) framework.

# Prerequisites

- **[Node.js 22](https://nodejs.org/en)**
- **[Docker](https://www.docker.com)**

# Project Setup

1. Install all dependencies:
   ```bash
   npm install
   ```
2. Start the PostgreSQL development database in a local container:
   ```bash
   docker-compose up -d
   ```

# Compile and run the project

```bash
# development:
npm run start

# watch mode:
npm run start:dev

# production mode:
npm run start:prod
```
The API will be available at http://localhost:3000

# Run tests

```bash
# unit tests:
npm run test

# e2e tests:
npm run test:e2e

# test coverage:
npm run test:cov
```
