# Svelte Form with Zod Validation

This is a simple Svelte form that collects a user's first name and age. It uses Zod for form validation, Tailwind CSS for styling, and Svelte stores to manage form data. The form validates the input data before submission and displays the submitted data upon successful submission.

## Features

- **Form Validation**: Ensures that the first name is not empty and the age is a valid number.
- **Tailwind CSS Styling**: Provides responsive, modern, and clean design for the form.
- **Form Submission Handling**: Disables the submit button while the form is submitting.
- **Form Reset**: Allows the user to reset the form after submission.
- **Display Submitted Data**: Shows the submitted data after a successful form submission.

## Installation

To run this project, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Svelte](https://svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zod](https://zod.dev/) for form validation

### Steps to Set Up

1. Clone this repository or create a new Svelte project.
2. Install dependencies:

    ```bash
    npm install
    ```

3. Make sure Tailwind CSS is properly configured by following the [official Tailwind CSS setup guide for Svelte](https://tailwindcss.com/docs/guides/svelte).
4. Add the `zod` library:

    ```bash
    npm install zod
    ```

5. Start the development server:

    ```bash
    npm run dev
    ```

6. Open the application in your browser at `http://localhost:5000`.

## Code Explanation

### `formData` Store
This Svelte writable store holds the form data, including the `firstName` and `age` fields.

```ts
const formData = writable({ firstName: "", age: "" });
