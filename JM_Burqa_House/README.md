# JM Burqa House - Next.js Professional Website

A modern, professional Next.js website for JM Burqa House, featuring elegant design, smooth animations, and enhanced user experience for modest fashion.

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

1. **Navigate to the project directory:**
   ```bash
   cd JM_Burqa_House
   ```

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
jm-burqa-house-nextjs/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Products.tsx         # Products grid
│   ├── About.tsx            # About section
│   ├── Contact.tsx          # Contact section
│   └── Footer.tsx           # Footer section
├── lib/
│   └── products.ts          # Product data
├── public/                  # Static assets
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary: Red gradient (for burqa house branding)
- Secondary: Gray gradient
- Accent: Gold (`#f59e0b`)

### Content
- Update product information in `lib/products.ts`
- Modify business details in `components/Contact.tsx`
- Change company information in `components/About.tsx`

### Images
Add your product images to the `public/` directory and update the image paths in the product data.

## 🌟 Key Features

1. **Professional Design**: Elegant and modern design suitable for a burqa house
2. **Product Showcase**: Beautiful product grid with hover effects
3. **Contact Form**: Functional contact form for customer inquiries
4. **Responsive Layout**: Works perfectly on all devices
5. **Smooth Animations**: Engaging animations using Framer Motion
6. **SEO Optimized**: Proper meta tags and structured data
7. **Type Safety**: Full TypeScript support
8. **Performance**: Optimized for fast loading

## 📱 Responsive Design

The website is fully responsive and works perfectly on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Development

### Adding New Products
1. Update the `products` array in `lib/products.ts`
2. Add product images to the `public/` directory
3. Update image paths in the product data

### Adding New Pages
1. Create a new file in `app/` directory
2. Export a default React component
3. The route will be automatically available

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
- Email: info@jmburqahouse.com
- Phone: +91 98765 43210

## 📄 License

This project is created for JM Burqa House. All rights reserved.

---

**Made with ❤️ for modest fashion enthusiasts**
