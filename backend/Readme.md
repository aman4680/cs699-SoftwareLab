# Backend Setup Guide

This guide will help you set up and run the backend server for the project.

## Prerequisites

Before you start, make sure you have the following installed:

- Python 3.10 or higher
- `pip` (Python package installer)

## Setup Instructions

### 1. Navigate to the Backend Directory

Open a terminal or command prompt and change to the backend directory where the project files are located:

```bash
cd path/to/your/backend/directory
```

### 2. Create a Virtual Environment

Create a virtual environment to isolate the project's dependencies:

```bash
python -m venv cmp
```

### 3. Activate the Virtual Environment

Activate the virtual environment to ensure you're working within the isolated environment:

- On **Windows**:

  ```bash
  cmp\Scripts\Activate
  ```

- On **macOS/Linux**:

  ```bash
  source cmp/bin/activate
  ```

### 4. Install Project Dependencies

Install all the required Python dependencies listed in the `requirements.txt` file:

```bash
pip install -r requirements.txt
```

### 5. Verify Python Version

Make sure you are using a Python version above 3.10. You can check your Python version by running:

```bash
python --version
```

If you're not using the correct version, you may need to install a newer version of Python.

### 6. Run the Backend Server

Once the environment is set up, you can start the backend server using the following command:

```bash
python manage.py runserver
```

The server will start running, and you can access it in your browser at `http://127.0.0.1:8000/`.

## Additional Notes

- Ensure that all dependencies are installed correctly before running the server.
- If you encounter any issues, check the Python version or virtual environment activation.

---

Happy coding! 🚀
