# Retro Portfolio

A retro-style portfolio website inspired by 90s/early 2000s software interfaces, featuring draggable project windows and a vintage music player.

## 🚀 Quick Setup

### 1. Create Project Structure

Create a new folder and set up this structure:

```
retro-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── MusicPlayer.tsx
│   ├── ProjectWindow.tsx
│   └── RetroPortfolio.tsx
├── data/
│   └── index.ts
├── types/
│   └── index.ts
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md
```

### 2. Install Dependencies

```bash
cd retro-portfolio
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Update Your Projects

Edit `data/index.ts` to add your actual projects:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Name",
    preview: "🚀", // Can be emoji or image
    description: "Brief description",
    url: "https://your-project.vercel.app",
    tech: ["React", "TypeScript", "Next.js"]
  },
  // Add more projects...
]
```

### Update Social Links

Also in `data/index.ts`, update your social media links:

```typescript
export const socialLinks: SocialLink[] = [
  { icon: Github, url: "https://github.com/YOUR_USERNAME", color: "#333" },
  { icon: Twitter, url: "https://twitter.com/YOUR_USERNAME", color: "#1DA1F2" },
  // Update with your actual URLs...
]
```

### Customize Styling

- Edit `app/globals.css` for global styles
- Modify colors in `tailwind.config.js`
- Update the gradient background in `components/RetroPortfolio.tsx`

## 🚀 Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings (Vercel auto-detects Next.js)

### Deploy Command:
```bash
npm run build
```

## 📁 Project Structure Explained

- **`app/`** - Next.js 13+ app directory
- **`components/`** - Reusable React components
- **`data/`** - Static data (projects, social links)
- **`types/`** - TypeScript type definitions
- **Configuration files** - Next.js, Tailwind, TypeScript setup

## ✨ Features

- 🖱️ Draggable project windows
- 🎵 Retro music player interface
- 📱 Responsive design
- 🎨 Authentic retro styling
- ⚡ Fast Next.js performance
- 🔗 Social media integration

## 🎯 Next Steps

1. Replace placeholder project URLs with your actual deployments
2. Add your real social media links
3. Customize the color scheme to match your brand
4. Add real music tracks to the player (optional)
5. Add more projects to showcase

## 💡 Tips

- Each project should be deployed separately on Vercel for best performance
- Use meaningful emojis or small images for project previews
- Keep project descriptions concise
- Test dragging functionality on different screen sizes

Happy coding! 🚀