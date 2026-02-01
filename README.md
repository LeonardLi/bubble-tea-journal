# 她的100杯奶茶 (Her 100 Cups of Bubble Tea)

This is a Next.js project designed to track the journey of making 100 different bubble teas.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker Deployment (Recommended for NAS)

This project is containerized for easy deployment on NAS or any server with Docker.

### 1. Build and Start the Application

To build the image and start the containers in the background:

```bash
docker-compose up -d --build
```

The application will be available at `http://YOUR_NAS_IP:3000`.

### 2. Update to Latest Version

When you push new code to GitHub and want to update your NAS deployment:

```bash
git pull origin main
docker-compose up -d --build
```

### 3. Data Persistence

The following directories are mapped to your host machine to ensure data is preserved during updates:
- `./db`: Stores the SQLite database.
- `./uploads`: Stores user-uploaded photos.

### 4. Stopping the Application

```bash
docker-compose down
```

## Localization

The project supports Simplified Chinese (default) and English. 
- UI text is managed in `messages/`.
- Routing is handled via `[locale]` segments.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Prisma Documentation](https://www.prisma.io/docs) - Database ORM documentation.