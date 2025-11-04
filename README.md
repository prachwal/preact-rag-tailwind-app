# Preact RAG Tailwind App

A modern web application built with Preact, TypeScript, Tailwind CSS, and Vite. This project demonstrates best practices for building scalable React applications with comprehensive testing and documentation.

## 🚀 Features

- **Preact**: Lightweight React alternative with the same API
- **TypeScript**: Full type safety and excellent developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Vite**: Fast build tool with HMR (Hot Module Replacement)
- **Vitest**: Modern testing framework with Jest compatibility
- **Testing Library**: User-centric testing utilities
- **TypeDoc**: Automated API documentation generation
- **ESLint + Prettier**: Code quality and formatting tools

## 📦 Tech Stack

- **Framework**: Preact 10.27.2
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.1.12
- **Styling**: Tailwind CSS (via PostCSS)
- **Testing**: Vitest 4.0.7 + Testing Library
- **Documentation**: TypeDoc

## 🛠️ Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd preact-rag-tailwind-app

# Install dependencies
npm install
```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Run tests once
npm run test:run

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui

# Generate documentation
npm run docs

# Lint code
npm run lint

# Format code
npm run format
```

### Project Structure

```text
src/
├── components/          # Reusable UI components
├── pages/              # Page-level components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── styles/             # Global styles and themes
├── assets/             # Static assets (images, icons)
├── test/               # Test configuration
├── __tests__/          # Test files
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.ts            # Barrel exports
```

## 🧪 Testing

This project uses Vitest with Testing Library for comprehensive testing:

### Test Structure

- **Unit Tests**: Pure function testing (e.g., `utils/math.test.ts`)
- **Component Tests**: User interaction testing (e.g., `App.test.tsx`)
- **Integration Tests**: Cross-component behavior testing

### Writing Tests

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/preact'

describe('ComponentName', () => {
  it('should render correctly', () => {
    render(<ComponentName />)
    expect(screen.getByText('Expected text')).toBeInTheDocument()
  })
})
```

### Test Coverage

Run `npm run test:coverage` to generate a coverage report. Aim for high coverage while focusing on meaningful tests.

## 📚 Documentation

### API Documentation

This project uses TypeDoc to generate comprehensive API documentation from TSDoc comments.

```bash
# Generate documentation
npm run docs
```

The generated documentation will be available in the `docs/` directory.

### Code Documentation Standards

All public APIs should include TSDoc comments:

```typescript
/**
 * Description of the function/class
 *
 * @param paramName - Description of parameter
 * @returns Description of return value
 */
export function exampleFunction(paramName: string): string {
  return `Hello ${paramName}`
}
```

## 🎨 Styling

This project uses Tailwind CSS with a custom design system:

### Design Principles

- **Mobile-First**: Responsive design starting from mobile
- **Utility-First**: Use Tailwind utilities for rapid development
- **Component-Based**: Create reusable component styles
- **Dark Mode Ready**: Support for light/dark theme switching

### Custom Classes

The project includes universal CSS classes for common patterns:

```css
/* Grid system */
.gridAutoFit { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }

/* Cards */
.card { border: 1px solid var(--color-neutral-200); border-radius: var(--border-radius); }
.cardPadded { padding: var(--spacing-2xl); }

/* Typography */
.heading { font-size: var(--font-size-2xl); font-weight: 700; }
```

## 🚀 Deployment

### Build Process

```bash
# Create production build
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options

- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Deploy static files
- **Docker**: Containerize the application

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Preact](https://preactjs.com/) - The React alternative
- [Vite](https://vitejs.dev/) - Fast build tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Vitest](https://vitest.dev/) - Modern testing framework
- [TypeDoc](https://typedoc.org/) - Documentation generator

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using Preact, TypeScript, and modern web technologies.
