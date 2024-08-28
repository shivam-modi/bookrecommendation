Here is an updated `README.md` for the Flask backend, including information about ports, lint commands, and other useful commands.

**backend/README.md**
```markdown
# Book Recommendation Backend

This is the backend service for the Book Recommendation App, built with Flask. It provides endpoints for managing books, including adding, retrieving, and deleting books, as well as recommending books based on genres.

## Project Structure

- **app/**: Contains the core application code.
  - **controllers/**: Handles HTTP requests and responses.
    - **book_controller.py**: Controller for book-related operations.
  - **models/**: Defines database models and schemas.
    - **book_model.py**: Book model and database setup.
  - **routes/**: Defines API routes.
    - **book_routes.py**: Routes for book management.
  - **services/**: Contains business logic.
    - **book_service.py**: Business logic related to books.
  - **middlewares/**: Contains middleware functions, such as validators.
    - **validators.py**: Input validation.
  - **utils/**: Utility functions and database setup.
    - **db.py**: Database initialization and connection.
  - **config.py**: Configuration settings for the application.
- **tests/**: Contains unit tests for the application.
  - **test_book_routes.py**: Tests for book routes.
  - **test_book_service.py**: Tests for book service logic.
- **venv/**: Python virtual environment.
- **run.py**: Entry point to run the Flask application.
- **requirements.txt**: List of Python dependencies.
- **.pylintrc**: Configuration file for Pylint.

## Setup

1. **Create a Virtual Environment**:
   ```bash
   python -m venv venv
   ```

2. **Activate the Virtual Environment**:
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Application**:
   By default, the application runs on port 2000. You can start the server using:
   ```bash
   python run.py
   ```
   You can access the API at `http://localhost:2000/`.

## Linting

To ensure code quality and consistency, you can run Pylint on the codebase:

1. **Run Pylint**:
   ```bash
   pylint app/
   ```

   This command checks the code in the `app/` directory for linting issues.

## Running Tests

To run the tests, use:
```bash
pytest
```

## License

This project is just for learning purpose and a hiring assignment.

### Scope of Improvments
- Add more endpoints
- Add tests
- Add advanced database

### Notes
- Make sure to adapt the Pylint settings to your project's specific needs.
- If you have additional configurations or rules, you can modify the `.pylintrc` file accordingly.
