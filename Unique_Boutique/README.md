# Unique Boutique - Next.js Professional Website

A modern, professional Next.js website for Unique Boutique, featuring smooth animations, responsive design, and enhanced user experience.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth scroll animations using Framer Motion
- **Performance**: Optimized for fast loading and smooth interactions
- **SEO Ready**: Proper meta tags and structured data
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **Google Fonts** - Playfair Display & Poppins

## 📦 Installation

1. **Clone or download the project files**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
unique-boutique-nextjs/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Products.tsx         # Products grid
│   ├── Team.tsx             # Team members
│   └── Footer.tsx           # Footer section
├── public/                  # Static assets
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary: Blue gradient (`#667eea` to `#764ba2`)
- Secondary: Purple gradient
- Accent: Gold (`#f59e0b`)

### Content
- Update product information in `components/Products.tsx`
- Modify team members in `components/Team.tsx`
- Change contact details in `components/Footer.tsx`

### Images
Add your product images to the `public/` directory and update the image paths in the components.

## 🌟 Key Improvements Over Original

1. **Performance**: Next.js provides automatic code splitting and optimization
2. **SEO**: Better meta tags and structured data
3. **Animations**: Smooth scroll animations and hover effects
4. **Responsive**: Mobile-first design approach
5. **Accessibility**: Better keyboard navigation and screen reader support
6. **Type Safety**: TypeScript prevents runtime errors
7. **Modern UI**: Contemporary design with gradients and shadows
8. **Interactive Elements**: Hover effects and micro-interactions

## 📱 Responsive Design

The website is fully responsive and works perfectly on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Development

### Adding New Pages
1. Create a new file in `app/` directory
2. Export a default React component
3. The route will be automatically available

### Adding New Components
1. Create a new file in `components/` directory
2. Import and use in your pages

### Styling
- Use Tailwind CSS classes for styling
- Custom styles can be added to `app/globals.css`
- Component-specific styles can be added using CSS modules

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect to GitHub and deploy
- **Railway**: Upload your code and deploy
- **AWS Amplify**: Connect repository and deploy

## 📞 Support

For any questions or issues:
- Email: info@uniqueboutique.com
- Phone: +92 312-6710602

## 📄 License

This project is created for Unique Boutique. All rights reserved.

---

**Made with ❤️ for fashion enthusiasts**
