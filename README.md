# Book Recommendation App

This project includes a React frontend and a Flask backend for managing book recommendations. The application allows users to view and add books, as well as receive recommendations.

## Getting Started

Follow the steps below to set up and run the project.

### Prerequisites

- **React** (for the frontend)
- **Python** (for the backend)
- **Yarn** (for managing frontend dependencies)
- **Pip** (for managing Python dependencies)

### Cloning the Repository

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/book-recommendation-app.git
   ```

2. **Navigate into the Project Directory**:
   ```bash
   cd book-recommendation-app
   ```

3. **Open the Project in Your Preferred Code Editor**:
   - **Visual Studio Code**:
     ```bash
     code .
     ```
   - **Other Editors**: Open the project folder manually.

### Backend Setup

1. **Navigate to the Backend Directory**:
   ```bash
   cd backend
   ```

2. **Create and Activate a Virtual Environment**:
   ```bash
   python -m venv venv
   # On Windows
   venv\Scripts\activate
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask Application**:
   ```bash
   python run.py
   ```
   The backend will be available at `http://localhost:2000`.

5. **Lint the Code**:
   To ensure code quality:
   ```bash
   pylint app
   ```

### Frontend Setup

1. **Navigate to the Frontend Directory**:
   ```bash
   cd frontend
   ```

2. **Install Dependencies**:
   Ensure Yarn is installed. If not, visit [Yarn's official website](https://classic.yarnpkg.com/lang/en/docs/install/) for installation instructions.
   ```bash
   yarn install
   ```

3. **Run the React Application**:
   ```bash
   yarn start
   ```
   The frontend will be available at `http://localhost:3000`.

4. **Build the Application for Production**:
   ```bash
   yarn build
   ```

5. **Run Tests**:
   To run the frontend tests:
   ```bash
   yarn test
   ```

6. **Lint the Code**:
   To check for code quality:
   ```bash
   yarn lint
   ```

## Accessing the Application

- **Frontend**: Visit `http://localhost:3000` to use the web interface.
- **Backend**: Access API endpoints at `http://localhost:2000`.

## Scope for Improvement

- **Frontend**:
  - Performance optimizations
  - Enhanced error handling and user feedback
  - Accessibility improvements
  - UI/UX enhancements
  - State management with Redux or Zustand
  - Increased test coverage
  - Using NextJs for better code structure, performance, server side rendering, and scalability

- **Backend**:
  - Improved error handling
  - Advanced data validation
  - Security enhancements
  - Enhanced testing coverage
  - Adding user login and authentication
  - Optimized performance

## License

This project is intended for evaluation purposes and does not include a license.

## Contributing

As this is a hiring assignment, contributions are not anticipated. Feedback and suggestions for improvement are welcome.
```

### Key Additions:
- Added instructions for cloning the repository.
- Added instructions to open the project in a code editor.
