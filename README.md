
# User Address Backend

This is a simple backend application built using **Next.js** and **Prisma** for managing user addresses.

## Features

- Create new users with associated addresses.
- RESTful API endpoint for adding users and addresses.
- Built-in error handling and validation.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- PostgreSQL (or your preferred database)
- Prisma

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/user-address-backend.git
   cd user-address-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up your database:**

   - Update your `.env` file with your database connection string.

4. **Run Prisma migrations:**

   ```bash
   npx prisma migrate dev
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

   Your API will be running on [http://localhost:3000/api/submit](http://localhost:3000/api/submit).

### Usage

To create a new user and address, send a `POST` request to the `/api/submit` endpoint with the following JSON body:

```json
{
  "name": "Vansh Vasishtha",
  "Address": "Thanisandra, Bengaluru"
}
```

### Forking the Repository

1. **Fork the repository:** Click on the "Fork" button at the top right of this page.
2. **Clone your forked repository:**

   ```bash
   git clone https://github.com/yourusername/user-address-backend.git
   ```

   ### Project Screenshot

![User Address Backend Screenshot](https://github.com/ThatRandomGuy09/Smoke-Trees-Assignment)/user-address-backend/main/images/User getting stored.png)


 **Follow the installation instructions** to set up the project locally.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
