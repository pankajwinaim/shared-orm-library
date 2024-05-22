# shared-orm-library

- Backend: Node.js with Express framework
- Frontend: React.js with Next.js
- Shared ORM Library: Sequelize ORM for database models and connection

## Prerequisites

- Node.js
- npm
- MySQL

## Project Structure

```
root/
├── backend/
├── frontend/
└── shared-orm-library/
```

## Setup Instructions

### 1. Shared ORM Library

The shared ORM library defines the database models and handles the database connection using Sequelize.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pankajwinaim/shared-orm-library.git
   cd shared-orm-library
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory with your MySQL database credentials:
   ```
   DB_NAME=My-account
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_HOST=localhost
   DB_DIALECT=mysql
   ```

4. **Run database migrations:**
   ```bash
   npm run migrate
   ```

