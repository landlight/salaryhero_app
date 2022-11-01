## Getting start

- [Prerequisites](#prerequisites)
- [Setup](#setup)

### Prerequisites

Make sure you have these tools installed

- Docker
- Node.js
- Node package manager

### Setup
This is the instruction to setup this project and run in your local machine. Note that this instruction uses `npm` as a package manager. You may replace these commands corresponding to your package manager.

1. Copy `.env.example` file and rename it to `.env`.
2. Install dependencies.
3. Run `docker compose up -d` to start docker containers in background.
4. Run `npm run start` to start the project.
5. Go to `http://localhost:8080` or `http://localhost:8080/api-docs` to see the api documentations in swagger.