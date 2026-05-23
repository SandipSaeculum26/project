# Sandeep Yadav - Developer Portfolio

A modern, high-end developer portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Features smooth animations, glassmorphism effects, and a fully responsive design.

## 🌟 Features

- **Modern Design**: Clean, minimal UI inspired by Vercel, Linear, and Stripe
- **Dark Theme**: Sophisticated dark theme with subtle gradients and glassmorphism
- **Smooth Animations**: Framer Motion-style transitions and hover effects
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **Component-Based**: Reusable, maintainable component architecture
- **Performance Optimized**: Fast loading times with optimized images
- **SEO Optimized**: Proper metadata and semantic HTML
- **Accessibility**: WCAG compliant with keyboard navigation

## 📋 Sections Included

1. **Hero Section**: Eye-catching introduction with animated background
2. **About Me**: Personal story and key highlights
3. **Skills**: Categorized tech stack with progress bars
4. **Projects**: Featured projects with live demos and GitHub links
5. **Experience**: Professional experience and achievements
6. **Contact**: Contact form and social links
7. **Navigation**: Sticky navbar with smooth scroll navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + PostCSS
- **Runtime**: React 19.2.4
- **Animations**: CSS-in-JS animations
- **Image Optimization**: Next.js Image component

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## 📝 Customization

### 1. Update Personal Information

Edit `lib/constants.ts` to update all portfolio information:

```typescript
export const portfolioData = {
  personal: {
    name: "Your Name",
    role: "Your Role",
    email: "your.email@example.com",
    phone: "+91 XXXXXXXXXX",
    // ... other personal details
  },
  // ... rest of the data
};
```

### 2. Update Skills

Modify the `skills` array in `lib/constants.ts`:

```typescript
skills: [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      // ...
    ],
  },
  // ...
],
```

### 3. Add/Update Projects

Edit the `projects` array in `lib/constants.ts`:

```typescript
projects: [
  {
    id: 1,
    title: "Project Title",
    description: "Project description",
    image: "image-url",
    tech: ["React", "TypeScript"],
    liveUrl: "https://...",
    githubUrl: "https://...",
    featured: true,
  },
  // ...
],
```

### 4. Update Social Links

Modify the `social` array in `lib/constants.ts`:

```typescript
social: [
  {
    name: "GitHub",
    url: "https://github.com/yourprofile",
    icon: "github",
  },
  // ...
],
```

### 5. Configure Contact Form

To make the contact form functional, integrate with an email service:

**Option 1: Using Resend (Recommended)**

```bash
npm install resend
```

Update `app/api/contact/route.ts`:

```typescript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "your-email@example.com",
    subject: `New message from ${name}`,
    html: `<p>${message}</p><p>From: ${email}</p>`,
  });

  return Response.json({ message: "Email sent successfully" });
}
```

**Option 2: Using SendGrid**

```bash
npm install @sendgrid/mail
```

**Option 3: Using Nodemailer**

```bash
npm install nodemailer
```

### 6. Customize Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary: #3b82f6; /* Change blue to your color */
  --accent: #06b6d4; /* Change cyan to your color */
}
```

### 7. Update Navbar Branding

The "SY" initials in the navbar come from the first letters of your name. Update in `components/Navbar.tsx`:

```typescript
<div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
  YN {/* Your initials */}
</div>
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All spacing uses Tailwind's padding and gap utilities for consistent, responsive layouts.

## 🎨 Design Features

- **Glassmorphism**: Frosted glass effect backgrounds
- **Gradient Text**: Modern gradient heading text
- **Smooth Transitions**: Hover effects and animations
- **Skeleton Loaders**: Loading states for images
- **Custom Scrollbar**: Styled scrollbar for better UX
- **Focus States**: Accessible keyboard navigation

## 📦 Project Structure

```
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── hooks/
│   └── useInView.ts
├── lib/
│   └── constants.ts
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.mjs
├── next.config.ts
└── postcss.config.mjs
```

## 🚀 Deployment

### Deploy on Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy on Netlify

```bash
npm run build
```

Then connect your Git repository to Netlify.

## 🔒 Environment Variables

Create a `.env.local` file for any API keys:

```env
RESEND_API_KEY=your_api_key
SENDGRID_API_KEY=your_api_key
# ... other keys
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or issues, feel free to:
- Open an issue on GitHub
- Contact via email
- Check the Next.js documentation: https://nextjs.org/docs

## ✨ Tips for Best Results

1. **Update all personal information** in `lib/constants.ts`
2. **Add real project images** with high quality
3. **Keep descriptions concise** but descriptive
4. **Update social links** to your profiles
5. **Test on mobile devices** before deployment
6. **Enable contact form** with your preferred email service
7. **Add analytics** with Google Analytics or Vercel Analytics
8. **Customize the color scheme** to match your brand

## 🎯 Next Steps

1. Update `lib/constants.ts` with your information
2. Add your projects with images and links
3. Configure the contact form
4. Deploy to Vercel or your hosting platform
5. Set up a custom domain
6. Add analytics tracking

---

Made with ❤️ by Sandeep Yadav
