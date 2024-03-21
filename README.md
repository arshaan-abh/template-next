# Next.js / TypeScript Boilerplate with Tailwind CSS

## Overview

This project is a template for kickstarting Next.js applications with TypeScript for type safety and Tailwind CSS for a utility-first CSS framework. It also includes Prettier for code formatting, PostCSS for transforming styles and prettier-plugin-tailwindcss for sorting Tailwind classes.

## Features

- **Next.js**: A open-source web development framework for building full-stack Web applications.
- **TypeScript**: A superset of JavaScript that adds static types to the language.
- **Tailwind CSS**: A utility-first CSS framework that makes it easy to create responsive and visually consistent designs.
- **Shadcn/ui**: Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
- **Iconify**: All popular icon sets, one framework. Over 200,000 open source vector icons.
- **Prettier**: An opinionated code formatter that enforces a consistent coding style.
- **PostCSS**: A tool for transforming styles with JavaScript plugins.
- **prettier-plugin-tailwindcss**: A Prettier plugin for sorting Tailwind CSS classes.
- **Linting**: Integrated ESLint for JavaScript/TypeScript linting.
- **Husky/lint-staged**: Automatically runs eslint and prettier before every commit.

## How to use Github templates

![Github templates](https://github.blog/wp-content/uploads/2019/06/repository-template.gif)

For a more detailed guide on using templates, [Read More](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/).

## Clone

1. Clone this repository:

   ```bash
   git clone https://github.com/arshaan-abh/template-next.git
   ```

2. Navigate to the project directory:

   ```bash
   cd template-next
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Available Scripts

In the project directory, you can run:

- **Development Server:**

  ```bash
  npm run dev
  ```

  Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- **Build for Production:**

  ```bash
  npm run build
  ```

  Builds the app for production to the `.next` folder.

- **Linting:**

  ```bash
  npm run lint
  ```

  Lints JavaScript/TypeScript files using ESLint.

- **Formatting with Prettier:**

  ```bash
  npm run format
  ```

  Formats the code using Prettier.

## Pre-Commit Hooks

This project is configured with pre-commit hooks using [Husky](https://github.com/typicode/husky) to run linting and formatting before each commit. This ensures consistent code quality throughout the development process.

## Customize Configuration

- **Tailwind CSS Configuration:**

  Tailwind CSS configuration is located in the `tailwind.config.js` file. Customize this file to tailor Tailwind to your project's specific needs.

- **PostCSS Configuration:**

  PostCSS configuration is in the `postcss.config.js` file. Add or modify plugins here to enhance or modify your styles.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.

## Acknowledgments

- Thanks to the creators and maintainers of React, Next.js, TypeScript, Tailwind CSS, Prettier, PostCSS, ESLint, and stylelint for their amazing tools and contributions to the development community.
