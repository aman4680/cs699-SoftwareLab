# Frontend Setup Guide (React + Vite)

This template provides a minimal setup to get **React** working in **Vite** with **Hot Module Replacement (HMR)** and some ESLint rules.

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Recommended version: 16.8 or higher)
- [npm](https://npmjs.com) (Node package manager)

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone <repository-url>
cd path/to/your/frontend/directory
```

### 2. Install Frontend Dependencies

Install the required dependencies using `npm`:

```bash
npm install
```

### 3. Run the Development Server

Start the development server with **Hot Module Replacement (HMR)** enabled:

```bash
npm run dev
```

This will start the Vite server and the React app will be accessible at `http://localhost:3000/` (or another port, which will be shown in the terminal).

## React + Vite Plugins

This project uses Vite to build and serve the React application. Currently, two official plugins are available for handling React:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)** uses **[Babel](https://babeljs.io/)** for Fast Refresh.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)** uses **[SWC](https://swc.rs/)** for Fast Refresh.

Both plugins enable fast refresh in development, with SWC being a faster alternative for some setups.

## Additional Notes

- Ensure that all dependencies are installed correctly before running the development server.
- If you encounter any issues, try deleting the `node_modules` folder and running `npm install` again.

---

Happy coding! 🚀
