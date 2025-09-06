# Mohammed Owaish Khumar - Portfolio Website

A modern, responsive portfolio website built with React.js, showcasing my skills as a Software Developer specializing in backend technologies, APIs, and data-driven applications.

![Portfolio Preview](https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop)

## ✨ Features

- **Modern Design**: Clean, minimalist UI with professional aesthetics
- **Responsive Layout**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Subtle Animations**: Clean CSS transitions and hover effects  
- **Dynamic Content**: All data loaded from JSON file for easy updates
- **Fast Performance**: Optimized React components and Vite build system
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🚀 Tech Stack

- **Frontend**: React.js 18 (Functional Components + Hooks)
- **Styling**: TailwindCSS for modern, responsive design
- **Animations**: CSS transitions for clean effects
- **Routing**: React Router DOM for client-side navigation
- **Icons**: Lucide React for beautiful, consistent icons
- **Build Tool**: Vite for fast development and optimized builds
- **Package Manager**: npm

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── vite.svg
│   └── Owaish-Resume.pdf
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── data.json
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

### Step 1: Clone or Download

```bash
# If using Git (optional)
git clone <repository-url>
cd portfolio

# Or simply extract the provided files to a folder
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Step 4: Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 📝 Customizing Content

All portfolio content is stored in `src/data.json`. You can easily update your information by editing this file:

### Personal Information
```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Job Title",
    "subtitle": "Your Specialization",
    "email": "your@email.com",
    "phone": "+1234567890",
    "location": "Your Location",
    "socialLinks": {
      "linkedin": "https://linkedin.com/in/yourprofile",
      "github": "https://github.com/yourusername",
      "email": "mailto:your@email.com"
    }
  }
}
```

### Experience Section
```json
{
  "experience": [
    {
      "id": 1,
      "title": "Job Title",
      "company": "Company Name",
      "location": "Location",
      "duration": "Start - End Date",
      "type": "Full-time | Internship",
      "description": "Brief description",
      "responsibilities": [
        "Responsibility 1",
        "Responsibility 2"
      ]
    }
  ]
}
```

### Skills Section
```json
{
  "skills": {
    "programmingLanguages": ["Language1", "Language2"],
    "backendTechnologies": ["Tech1", "Tech2"],
    "databases": ["DB1", "DB2"],
    "cloudServices": ["Service1", "Service2"]
  }
}
```

### Projects Section
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Project description",
      "technologies": ["Tech1", "Tech2"],
      "githubUrl": "https://github.com/username/repo",
      "liveUrl": "https://project-demo.com",
      "features": ["Feature 1", "Feature 2"]
    }
  ]
}
```

## 🎨 Customizing Styles

### Colors
Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',   // Lightest
        500: '#0ea5e9',  // Main brand color
        900: '#0c4a6e',  // Darkest
      }
    }
  }
}
```

### Typography
Modify fonts in `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

### Custom CSS
Add custom styles in `src/index.css` under the `@layer utilities` section.

## 🌙 Theme System

The portfolio includes a built-in dark/light mode toggle:

- **Automatic Detection**: Respects system preference
- **Persistent**: Remembers user choice in localStorage
- **Smooth Transitions**: Animated theme switching
- **Consistent**: All components support both themes

## 📱 Responsive Design

The portfolio is built with mobile-first approach:

- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🚀 Deployment

### Option 1: Netlify (Recommended)
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Option 2: Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect Vite and configure build settings

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## 📄 Adding Your Resume

1. Replace `public/Owaish-Resume.pdf` with your resume file
2. Update the filename in `src/components/Home.jsx`:
   ```jsx
   href="/your-resume-filename.pdf"
   download="your-resume-filename.pdf"
   ```

## 🎯 Performance Tips

- **Images**: Use WebP format for better compression
- **Fonts**: Preload important fonts in `index.html`
- **Icons**: Lucide React icons are tree-shaken automatically
- **Code Splitting**: React.lazy() for larger components if needed

## 🐛 Troubleshooting

### Common Issues

1. **White screen after build**: Check if all imports are correct
2. **Styles not loading**: Ensure TailwindCSS is properly configured
3. **Icons not displaying**: Verify Lucide React import syntax
4. **Dark mode not working**: Check if 'dark' class is applied to html element

### Debug Mode

Add to `vite.config.js` for debugging:
```javascript
export default defineConfig({
  plugins: [react()],
  define: {
    __DEV__: true
  }
})
```

## 📞 Support

If you encounter any issues or need help customizing the portfolio:

1. Check the troubleshooting section above
2. Review the customization examples
3. Ensure all dependencies are properly installed
4. Contact: khumarowaish@gmail.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **TailwindCSS** for the utility-first CSS framework and clean animations
- **Lucide** for beautiful icons
- **Vite** for fast build tooling

---

**Built with ❤️ by Mohammed Owaish Khumar**

*Backend Developer | .NET | APIs | Data-driven Applications*
