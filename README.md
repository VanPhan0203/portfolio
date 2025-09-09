# Vue 3 + TypeScript + Vite + Tailwind CSS Portfolio

## Project Overview

This is a modern portfolio website built with Vue 3, TypeScript, Vite, and Tailwind CSS. The project features a responsive design, interactive components, and is automatically deployed to Vercel.

## Features

- Vue 3 with Composition API
- TypeScript for type safety
- Tailwind CSS for styling
- Vue Router for navigation
- Responsive design
- Dark mode support

## CI/CD Setup

This project uses Vercel for continuous deployment:

- Automatic deployments are triggered when pushing to the `main` branch
- Preview deployments are created for pull requests
- Production environment is updated only from the `main` branch

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

- `/src/components` - Reusable Vue components
- `/src/views` - Page components
- `/src/router` - Vue Router configuration
- `/src/assets` - Static assets like images
- `/src/style.css` - Global styles with Tailwind directives
