# Book Recommendation Frontend

This is the frontend application for the Book Recommendation App, built with React and TypeScript. It interacts with the Flask backend to manage books, display recommendations, and handle user interactions.

## Project Structure

- **public/**: Contains static assets.
  - **index.html**: Main HTML file.
  - **favicon.ico**: Favicon for the application.
- **src/**: Contains the source code for the React application.
  - **components/**: Reusable React components.
    - **AddBookModal.tsx**: Modal for adding a new book.
    - **BookForm.tsx**: Form to add a book.
    - **BookList.tsx**: List of added books.
    - **Recommendation.tsx**: Display recommended books.
  - **services/**: Contains API calls to the Flask backend.
    - **api.ts**: Functions to interact with the backend API.
  - **types/**: TypeScript types and interfaces.
    - **book.d.ts**: TypeScript types for Book.
  - **utils/**: Utility functions.
    - **validators.ts**: Input validation functions.
  - **App.tsx**: Main application component.
  - **index.tsx**: Entry point for the React application.
  - **App.css**: Basic styling for the application.
- **tests/**: Contains frontend tests.
  - **App.test.tsx**: Basic frontend tests using React Testing Library.
- **tsconfig.json**: TypeScript configuration.
- **package.json**: Node.js dependencies and scripts.
- **.eslintrc.js**: ESLint configuration for code linting.

## Setup

1. **Install Dependencies**:
   Make sure you have Yarn installed. If not, you can install it from [Yarn's official website](https://classic.yarnpkg.com/lang/en/docs/install/).
   ```bash
   yarn install
   ```

2. **Run the Application**:
   To start the development server:
   ```bash
   yarn start
   ```
   The application will be available at `http://localhost:3000/`.

3. **Build the Application**:
   To create a production build:
   ```bash
   yarn build
   ```

4. **Run Tests**:
   To run the tests:
   ```bash
   yarn test
   ```

5. **Lint the Code**:
   To check for code quality and consistency:
   ```bash
   yarn lint
   ```

## Scope for Improvement

- **Performance Optimization**: Implement lazy loading for components and use memoization techniques to optimize performance.
- **Error Handling**: Improve error handling and user feedback for API interactions.
- **Accessibility**: Enhance accessibility features to support users with disabilities.
- **UI/UX Enhancements**: Refine the UI/UX to provide a more engaging and intuitive experience.
- **State Management**: Consider using a more robust state management solution like Redux or Zustand if the application grows in complexity.
- **Testing**: Add more comprehensive tests, including integration tests and end-to-end tests, to ensure the application’s stability.
- **Internationalization**: Add support for multiple languages to cater to a global audience.

## Contributing

As this is a hiring assignment, contributions are not expected. However, any feedback or suggestions for improvements are welcome.

## License

This project is for evaluation purposes only and does not include a license.

### Notes
- **Scope for Improvement** sections provide ideas on how the project can be enhanced in various aspects.
- **Linting** command assumes that ESLint is configured in `package.json` or a separate script is defined in the `package.json` file.