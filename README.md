# Bookstore Frontend

This is a React-based frontend application for managing a bookstore. It demonstrates CRUD operations for books, authors, and stores using API stubs.

## Folder Structure

-   **src/components**: Reusable components
-   **src/pages**: Page components
-   **src/redux**: State management with Redux Toolkit
-   **src/services**: API services
-   **src/styles**: Global styles
-   **src/utils**: Utility functions

## Prerequisites

-   Node.js (>= 16.x)
-   npm or yarn

## Installation

1. Clone the repository:
    ```bash
    git clone <repo-url>
    cd bookstore-frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the development server:
    ```bash
    npm start
    ```

## Optional: Run JSON Server

If you want to use JSON Server as a backend:

```bash
json-server --watch data/db.json --port 3001
```

## Docker Setup

1. Build the Docker image:
    ```bash
    docker build -t bookstore-frontend .
    ```
2. Run the container:
    ```bash
    docker run -p 3000:3000 bookstore-frontend
    ```
