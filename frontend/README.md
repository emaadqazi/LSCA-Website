# LSCA Website Frontend

A modern, responsive website for the Laurier Supply Chain Association built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional homepage with blue theme
- **Responsive Layout**: Mobile-first design that works on all devices
- **Component-Based**: Reusable React components for maintainability
- **Routing**: Client-side routing with React Router
- **Loading Animation**: 10-second delay with animated text reveal for "Laurier Supply Chain Association"

## Project Structure

```
src/
├── components/           # Reusable UI components
│   └── layout/          # Layout components (Header, Footer)
├── pages/               # Page components
│   ├── HomePage.tsx     # Main homepage with hero section
│   ├── AboutPage.tsx    # About page
│   ├── ContactPage.tsx  # Contact page
│   ├── Title3Page.tsx   # Title 3 page
│   └── Title4Page.tsx   # Title 4 page
├── App.tsx              # Main app component with routing
├── main.tsx            # Entry point
└── index.css           # Global styles with Tailwind
```

## Components

### Header Component
- Navigation menu with About, Contact, Title3, Title4
- LSCA logo with blue theme
- Call-to-action button
- Mobile-responsive design

### HomePage Component
- Hero section with gradient background
- 10-second loading delay for main title
- Animated text reveal
- 3D-style circular graphic with LSCA branding
- Call-to-action button

### Reusable Components
- **Button**: Customizable buttons with hover effects
- **Layout**: Responsive container and grid systems
- **Typography**: Consistent text styling

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Customization

### Colors
The blue theme can be customized in `tailwind.config.js` under the `primary` color palette.

### Components
All components are modular and can be easily modified. The Header component contains the navigation structure, and the HomePage component contains the main hero section.

### Styling
Uses Tailwind CSS for utility-first styling. Custom styles can be added in `src/index.css` using Tailwind's `@layer` directives.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement for older browsers
