# Sculpture: Bridging Artists and Art Enthusiasts

A curated marketplace for small-scale sculptures, designed to connect emerging artists with young collectors. Our platform focuses on making sculptural art more accessible by showcasing carefully sized pieces that balance artistic value with practical considerations. We aim to fill the gap between high-end gallery sculptures and mass-produced decorative objects.

## Why Small Sculptures?

- **Accessibility**: Smaller sculptures are easier to display and maintain
- **Affordability**: Reduced size means more affordable prices without compromising artistic value
- **Practicality**: Perfect for modern living spaces and easy to relocate
- **Uniqueness**: Each piece offers a distinctive alternative to mass-produced decorative items

## Features

- Detailed artwork specifications (height, width, depth)
- Artist attribution and creation year
- Material information
- Modern, user-friendly interface
- Built with T3 Stack (Next.js, Prisma, PostgreSQL)

## Tech Stack

- [Next.js](https://nextjs.org)
- [Prisma](https://prisma.io)
- [PostgreSQL](https://postgresql.org)
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)

## Local Development Setup

### Prerequisites
- Node.js
- pnpm
- PostgreSQL

### Database Setup

1. Install PostgreSQL (if not already installed):
```bash
brew install postgresql@14
brew services start postgresql@14
```

2. Create development database:
```bash
createdb sculpture_dev
```

3. Configure environment:
- Copy `.env.example` to `.env`
- Update DATABASE_URL in `.env`:
```
DATABASE_URL="postgresql://<your-username>@localhost:5432/sculpture_dev"
```
Replace `<your-username>` with your system username.

4. If you encounter database access issues, grant necessary permissions:
```bash
psql -d sculpture_dev -c "ALTER USER <your-username> WITH SUPERUSER;"
```

### Install Dependencies and Start Development Server

1. Install project dependencies:
```bash
pnpm install
```

2. Generate Prisma client and run migrations:
```bash
pnpm prisma generate
pnpm prisma migrate dev
```

3. Seed the database with initial data:
```bash
prisma db seed
```

4. Start the development server:
```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Getting Started

First, run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Commit Convention

|Commit Type|Explain|Example|
|---|---|---|
|feat|Add new features|feat: add user authentication|
|fix|Fix a bug|fix: resolve login error|
|refactor|Code refactoring (no functional changes)|refactor: optimize database indexing|
|docs|Documentation changes|docs: update API documentation|
|chore|Build process or auxiliary tool changes|chore: configure build settings|

## Project Goal

Our mission is to revitalize the sculpture market by:

- Supporting emerging artists (20-30s) fresh from art school
- Creating a sustainable platform where sculptors can focus on their craft
- Offering unique, collectible pieces that resonate with young art enthusiasts
- Bridging the gap between traditional gallery sculptures and mass-produced decorative items
- Building a community that appreciates and collects small-scale sculptural art

We believe in making sculptural art more accessible while maintaining its artistic integrity. By focusing on smaller, carefully crafted pieces, we're creating a new market that serves both artists' creative expression and collectors' practical needs.
