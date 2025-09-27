# Juspay Assignment

## Tech Stack

### Frontend Framework
- **React 19.1.1** - Latest React with modern features
- **Vite 7.1.6** - Fast build tool and dev server

### UI & Styling
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **shadcn/ui** - Modern component library built on Radix UI
- **Radix UI** - Low-level UI primitives for accessibility
  - Dialog, Dropdown Menu, Scroll Area, Separator, Slot components
- **Lucide React** - Beautiful & consistent icon library
- **Framer Motion 12.23.22** - Smooth animations and transitions


## 🛠️ Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 18 or higher)
- **npm**, **yarn**, **pnpm**, or **bun** package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd juspay-assignment
```

### 2. Install Dependencies

Choose your preferred package manager:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

### 3. Start Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun dev
```

The application will be available at `http://localhost:5173`

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── MainLayout.jsx   # Main layout component
│   ├── Menu.jsx         # Menu component
│   ├── MenuItem.jsx     # Individual menu item
│   ├── MenuSheet.jsx    # Mobile menu sheet
│   ├── Theme/           # Theme-related components
│   └── ui/              # shadcn/ui components
├── data/                # Static data and constants
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── assets/              # Static assets
├── App.jsx              # Root App component
├── main.jsx             # Application entry point
└── index.css            # Global styles
```

## 🎨 Theme System

The application supports both light and dark themes:
- Theme preference is stored in localStorage
- Smooth transitions between theme changes
- System theme detection available