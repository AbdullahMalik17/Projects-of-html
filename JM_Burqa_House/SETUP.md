# JM Burqa House - Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Open Command Prompt or PowerShell as Administrator**
   - Right-click on Command Prompt/PowerShell
   - Select "Run as administrator"

2. **Enable Script Execution (if needed)**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. **Navigate to the project directory**
   ```bash
   cd "F:\Projects-of-html\JM_Burqa_House"
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser and visit**
   ```
   http://localhost:3000
   ```

## 🎨 Customization

### Adding Product Images
1. Replace the placeholder files in the `public/` directory:
   - `burqa1.jpg` - Traditional Black Burqa
   - `burqa2.jpg` - Embroidered Navy Burqa
   - `burqa3.jpg` - Designer Maroon Burqa
   - `burqa4.jpg` - Casual Gray Burqa
   - `burqa5.jpg` - Premium Silk Burqa
   - `burqa6.jpg` - Floral Print Burqa
   - `burqa7.jpg` - Bridal Burqa Set
   - `burqa8.jpg` - Cotton Comfort Burqa

### Updating Business Information
1. **Contact Details**: Edit `components/Contact.tsx`
2. **Company Info**: Edit `components/About.tsx`
3. **Header**: Edit `components/Header.tsx`
4. **Footer**: Edit `components/Footer.tsx`

### Adding New Products
1. Edit `lib/products.ts`
2. Add new product objects to the `products` array
3. Add corresponding images to the `public/` directory

## 🎯 Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Features

- ✅ Responsive design for all devices
- ✅ Smooth animations and transitions
- ✅ Professional color scheme
- ✅ Contact form functionality
- ✅ Product showcase with categories
- ✅ SEO optimized
- ✅ TypeScript support
- ✅ Modern UI/UX design

## 🎨 Color Scheme

- **Primary**: Red gradient (brand colors)
- **Secondary**: Gray gradient
- **Accent**: Gold (#f59e0b)

## 📞 Support

If you encounter any issues:
1. Check that Node.js is installed
2. Ensure you're running commands as administrator
3. Try clearing npm cache: `npm cache clean --force`
4. Delete `node_modules` folder and run `npm install` again

---

**Your professional JM Burqa House website is ready! 🎉**
