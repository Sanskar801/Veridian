# Veridian - Modern React Architecture Website

A sleek, modern web application built with React, featuring smooth animations and a video-hero landing page. This project showcases a contemporary architecture firm's portfolio with an emphasis on visual storytelling and user experience.

## 🚀 Tech Stack

- **React 19.2.0** - Latest React with modern hooks and features
- **Vite 7.1.9** - Lightning-fast build tool and dev server
- **React Router 7.9.4** - Client-side routing
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **GSAP 3.13.0** - Professional-grade animation library
- **ESLint** - Code quality and consistency

## 📁 Project Structure

```
veridian/
├── src/
│   ├── components/
│   │   └── home/
│   │       ├── Video.jsx          # Background video component
│   │       ├── HomeHeroText.jsx   # Hero section text
│   │       └── HomeBottomText.jsx # Bottom section text
│   ├── pages/
│   │   ├── Home.jsx               # Landing page
│   │   ├── Projects.jsx           # Projects showcase
│   │   ├── Agence.jsx            # Agency information
│   │   ├── Blogs.jsx             # Blog section
│   │   └── AdminPanel.jsx        # Admin dashboard
│   ├── App.jsx                    # Main app component with routing
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Global styles
├── public/
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md
```

## 🎯 Features

- **Video Hero Section** - Immersive full-screen video background on homepage
- **Smooth Animations** - GSAP-powered transitions and effects
- **Modern Routing** - React Router v7 with clean URL structure
- **Responsive Design** - Tailwind CSS for mobile-first responsive layouts
- **Admin Panel** - Dedicated admin section for content management
- **Multiple Pages**:
  - Home - Hero landing page with video background
  - Projects - Portfolio showcase
  - Agence - Agency/about information
  - Blogs - Content and articles
  - Admin - Administrative panel

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd veridian
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts Vite development server with HMR |
| `npm run build` | Creates optimized production build |
| `npm run lint` | Runs ESLint for code quality checks |
| `npm run preview` | Previews production build locally |

## 🎨 Styling

The project uses Tailwind CSS 4.1.14 with the new Vite plugin integration:

```javascript
// vite.config.js
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()]
})
```

Styles are imported in `index.css`:
```css
@import "tailwindcss";
```

## 🎬 Animation

GSAP is integrated for professional animations:

```javascript
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
```

Use the `useGSAP` hook for React-friendly GSAP animations with automatic cleanup.

## 🧭 Routing Structure

```
/ - Home page with video hero
/projects - Projects showcase
/agence - Agency information
/blogs - Blog articles
/admin - Admin panel
```

## ⚙️ Configuration

### ESLint Configuration
The project uses modern ESLint flat config with React-specific rules:
- React Hooks recommended rules
- React Refresh for HMR
- Unused variable exceptions for components

### Vite Configuration
Optimized for React with Tailwind CSS integration and fast refresh.

## 🚧 Development Notes

- **React Version**: Using React 19 with latest features
- **No localStorage**: Browser storage APIs are not used (follows best practices)
- **State Management**: Uses React hooks (useState, useReducer) for state
- **Styling**: Tailwind utility classes only (no custom CSS compilation needed)

## 📦 Key Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.1.1",
  "react-router": "^7.9.4",
  "gsap": "^3.13.0",
  "@gsap/react": "^2.1.2",
  "tailwindcss": "^4.1.14",
  "@tailwindcss/vite": "^4.1.14"
}
```

## 🔧 Browser Support

- Modern browsers with ES6+ support
- Chrome, Firefox, Safari, Edge (latest versions)
- Node.js >= 20.19.0 || >= 22.12.0


**Built with ❤️ using React + Vite + Tailwind CSS**
