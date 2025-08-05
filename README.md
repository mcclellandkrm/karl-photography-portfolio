# Karl McClelland Photography Portfolio

A modern, professional photography portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a sleek design with custom mouse cursor effects, smooth animations, and responsive layouts.

## 🌟 Features

- **Modern Design**: Dark theme with elegant typography and professional layout
- **Custom Cursor**: Interactive mouse-following cursor effect with hover animations
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion powered animations and transitions
- **SEO Optimized**: Proper meta tags and structured data
- **Contact Form**: Working contact form with validation
- **Portfolio Sections**: Organized sections for work, case studies, story, and current projects

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React** - Component-based UI library

## 📱 Sections

1. **Hero** - Striking landing section with animated background
2. **My Work** - Filterable portfolio gallery
3. **Case Studies** - Detailed project breakdowns with results
4. **My Story** - Personal journey and skills timeline
5. **Current Project** - Live project updates with progress tracking
6. **Contact** - Contact form and information

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd karlphototgraphy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 🎨 Customization

### Colors
The color scheme is defined in `src/app/globals.css` and can be easily customized:
- Primary: Indigo (`#6366f1`)
- Background: Dark (`#0a0a0a`)
- Text: Light gray (`#f5f5f5`)

### Content
Update the content in the respective component files:
- `src/components/sections/Hero.tsx` - Landing page content
- `src/components/sections/MyWork.tsx` - Portfolio items
- `src/components/sections/CaseStudies.tsx` - Case study data
- `src/components/sections/MyStory.tsx` - Personal information and timeline
- `src/components/sections/CurrentProject.tsx` - Project updates
- `src/components/sections/Contact.tsx` - Contact information

### Images
Replace placeholder images with actual photography:
- Add images to the `public/` directory
- Update image references in components
- Ensure images are optimized for web (WebP format recommended)

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Build command `npm run build`, publish directory `out`
- **Custom Server**: Build with `npm run build` then serve the `.next` folder

## 📧 Contact Integration

The contact form is ready for integration with:
- **Netlify Forms** - Add `netlify` attribute to form
- **Formspree** - Update form action URL
- **Custom API** - Implement in `pages/api/contact.ts`

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific configuration:
```env
NEXT_PUBLIC_SITE_URL=https://karlmcclelland.com
CONTACT_EMAIL=karl@karlmcclelland.com
```

## 📱 Mobile Optimization

- Touch-friendly navigation
- Responsive images
- Optimized cursor effects for touch devices
- Mobile-first responsive design

## 🎯 SEO Features

- Meta tags for social sharing
- Structured data markup
- Sitemap generation
- Optimized performance scores

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 License

This project is for personal use. Please respect copyright for any photography content.

---

**Domain**: karlmcclelland.com  
**Built with**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion  
**Editable in**: VS Code with GitHub Copilot
