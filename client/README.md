Veridian - Modern Architecture Agency Website
A cutting-edge web application for an architecture agency, featuring immersive video backgrounds, smooth animations, and a clean, modern interface built with the latest React technologies.
🌟 Overview
Veridian is a full-featured architecture agency website showcasing projects, agency information, and blog content through a visually stunning interface. The application leverages modern web technologies to deliver a premium user experience with smooth animations and responsive design.
✨ Features

🎥 Video Hero Section - Full-screen immersive video background on the homepage
🎨 Smooth Animations - Professional animations powered by GSAP
📱 Fully Responsive - Mobile-first design using Tailwind CSS 4
🚀 Lightning Fast - Built with Vite for optimal performance
🧭 Modern Routing - Clean URL structure with React Router v7
👨‍💼 Admin Panel - Content management interface
🎯 SEO Ready - Optimized structure for search engines

🛠️ Tech Stack

Frontend Framework: React 19.2.0
Build Tool: Vite 7.1.9
Routing: React Router 7.9.4
Styling: Tailwind CSS 4.1.14
Animations: GSAP 3.13.0 with React hooks
Code Quality: ESLint with React plugins

📋 Prerequisites
Before you begin, ensure you have the following installed:

Node.js: >= 20.19.0 or >= 22.12.0
npm: >= 8.0.0

🚀 Getting Started
Installation

Clone the repository

bash   git clone <repository-url>
   cd veridian

Install dependencies

bash   npm install

Start the development server

bash   npm run dev
The application will open at http://localhost:5173

Build for production

bash   npm run build

Preview production build

bash   npm run preview
📂 Project Structure
veridian/
├── src/
│   ├── components/
│   │   └── home/
│   │       ├── Video.jsx          # Background video component
│   │       ├── HomeHeroText.jsx   # Hero text animation
│   │       └── HomeBottomText.jsx # Bottom section content
│   ├── pages/
│   │   ├── Home.jsx               # Main landing page
│   │   ├── Projects.jsx           # Project portfolio
│   │   ├── Agence.jsx            # About the agency
│   │   ├── Blogs.jsx             # Blog articles
│   │   └── AdminPanel.jsx        # Admin dashboard
│   ├── App.jsx                    # Root component with routes
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Global styles
├── public/                        # Static assets
├── index.html                     # HTML template
├── vite.config.js                 # Vite configuration
├── eslint.config.js               # ESLint configuration
└── package.json                   # Project dependencies
🧭 Routes
RouteDescription/Home page with video hero section/projectsPortfolio of architecture projects/agenceAgency information and team/blogsBlog posts and articles/adminAdministrative panel (protected)
📜 Available Scripts
CommandDescriptionnpm run devStart development server with hot reloadnpm run buildBuild optimized production bundlenpm run lintRun ESLint to check code qualitynpm run previewPreview production build locally
🎨 Styling Guide
The project uses Tailwind CSS 4 with the new Vite plugin integration:
javascript// Example usage in components
<div className="h-screen w-screen fixed">
  <div className="text-white bg-black/50">
    {/* Your content */}
  </div>
</div>
Tailwind Configuration
Tailwind is configured through the Vite plugin:
javascript// vite.config.js
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()]
})
Import Tailwind in your CSS:
css/* index.css */
@import "tailwindcss";
🎬 Animation with GSAP
GSAP is integrated with React-specific hooks for smooth animations:
javascriptimport { useGSAP } from '@gsap/react'
import gsap from 'gsap'

// Example usage
useGSAP(() => {
  gsap.from('.hero-text', {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: 'power3.out'
  })
}, [])
⚙️ Configuration
Vite Configuration
javascriptimport { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()]
})
ESLint Configuration
The project uses ESLint 9 with flat config:

React Hooks rules (recommended-latest)
React Refresh for HMR
Unused variables ignored for uppercase/constant names

📦 Dependencies
Core Dependencies
json{
  "react": "^19.2.0",
  "react-dom": "^19.1.1",
  "react-router": "^7.9.4",
  "gsap": "^3.13.0",
  "@gsap/react": "^2.1.2",
  "tailwindcss": "^4.1.14"
}
Dev Dependencies
json{
  "@vitejs/plugin-react": "^5.0.4",
  "@tailwindcss/vite": "^4.1.14",
  "eslint": "^9.36.0",
  "vite": "^7.1.7"
}
🌐 Browser Support

Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)

Note: ES6+ features are used throughout the application.
🚀 Deployment
Build for Production
bashnpm run build
This creates an optimized build in the dist folder.
Deployment Platforms
The application can be deployed to:

Vercel (recommended for Vite projects)
Netlify
GitHub Pages
Any static hosting service

📝 Best Practices

✅ Use functional components with hooks
✅ Keep components small and focused
✅ Use GSAP's useGSAP hook for animations
✅ Follow Tailwind's utility-first approach
✅ Implement proper error boundaries
✅ Use React.StrictMode in development

🤝 Contributing

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

📄 License
This project is licensed under the MIT License.
👥 Authors
Your Name/Team - Your Website
🙏 Acknowledgments

React Team for React 19
Vite Team for the amazing build tool
GSAP for professional animations
Tailwind CSS for the utility-first framework

📞 Support
For support, email support@veridian.com or open an issue in the repository.

Built with ❤️ using React + Vite + Tailwind CSS