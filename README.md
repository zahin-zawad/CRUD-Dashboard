Here’s a well-structured `README.md` for your **Category CRUD Dashboard** project. It explains the project, its setup, features, and technical considerations:

---

# Category CRUD Dashboard

This project is a **Category CRUD Dashboard** built with **React** and **Tailwind CSS**. It allows users to manage product categories, including the ability to add, edit, and delete categories. The UI is designed to be simple and clean, resembling a typical admin dashboard. The application uses React's state management to handle CRUD operations without any backend.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Bonus](#bonus)
- [License](#license)

## Features

- **Add New Category**: Users can add new categories through a right-side drawer, which contains a form with fields for category name, slug, and order count.
- **Edit Category**: Users can edit existing categories. Clicking "Edit" opens the drawer with the current data pre-filled.
- **Delete Category**: Users can delete a category with a confirmation prompt.
- **Drawer**: The right-side drawer is hidden by default and slides out when needed.
- **Responsive UI**: The layout adjusts for various screen sizes and devices.

### Functionalities:
- Add, Edit, and Delete Product Categories.
- Form validation (Category Name and Slug are required fields).
- Modal and drawer UI components for adding and editing categories.
- Confirmation prompt before deleting a category.

## Technologies

- **React**: For building the user interface and handling component logic.
- **Tailwind CSS**: For designing a clean, responsive, and modern UI using utility-first CSS classes.
- **React Hooks**: For managing state within functional components.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/category-crud-dashboard.git
   cd category-crud-dashboard
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open the app in your browser:**

   Open your browser and navigate to `http://localhost:3000`. The dashboard should now be running.

## Project Structure

Here's a quick overview of the project structure:

```
src/
│
├── components/
│   ├── CategoryDrawer.jsx   // Component for the add/edit form
│   ├── CategoryTable.jsx    // Component for displaying categories
│
├── App.jsx                  // Main application component
├── index.css                // TailwindCSS styling
├── main.jsx                 // React entry point
└── index.html               // Main HTML file
```

### Key Components

- **App.jsx**: The main layout that includes the sidebar, category table, and drawer. It manages state for category data and the drawer's visibility.
- **CategoryTable.jsx**: Displays the list of categories in a table with edit and delete options.
- **CategoryDrawer.jsx**: A form inside a right-side drawer for adding and editing categories.

## How It Works

- **State Management**: The application uses React's `useState` hook to manage the list of categories and track the state of the drawer (open/closed). It also manages the editing state when a user clicks on "Edit" for a category.
- **Add Category**: When the user clicks the "Add Category" button, the drawer opens, allowing the user to input category details. Upon form submission, the new category is added to the list.
- **Edit Category**: Clicking "Edit" pre-fills the drawer with the category's current data. Once the user submits the form, the category is updated in the state.
- **Delete Category**: Clicking "Delete" prompts the user with a confirmation before removing the category from the list.

## Bonus

- **Git Commits**: Followed best practices for Git commits, ensuring that each commit is meaningful and represents a distinct update or fix.
- **README**: Documented project setup and functionality clearly.
- **UI Responsiveness**: Ensured that the dashboard layout adapts well to different screen sizes using Tailwind's responsive utilities.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize the **repository URL** and other project-specific details before publishing this `README.md`. Let me know if you need further adjustments!
