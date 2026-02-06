# 🚀 Quick Start Guide - Frame Falcon Studios Website

## ⚡ Start Development Server
```bash
cd "c:\Users\ruksh\Downloads\frame falcon stuidos\frame-falcon-website"
npm run dev
```
**Access at**: http://localhost:3000

## 📝 Priority Tasks

### 1️⃣ Update Contact Info (15 minutes)
**Files to edit:**
- `components/Contact.tsx` → Lines with email, phone, location
- `components/Footer.tsx` → Lines with social media URLs, WhatsApp number

**What to change:**
- Email: info@framefalcon.com → your-email@domain.com
- Phone: +94 12 345 6789 → your-phone-number
- WhatsApp: +94123456789 → your-whatsapp-number
- Social URLs: https://facebook.com → your actual social media links

### 2️⃣ Add Your Logo (10 minutes)
1. Prepare logo (1:1 ratio, 200x200px min)
2. Save to: `public/logo.png`
3. Edit `components/Navbar.tsx`:
   - Replace the `<div>` with logo with `<Image>` component
   - See IMAGE_GUIDE.md for exact code

### 3️⃣ Add Real Images (30 minutes)
**Portfolio images needed (6 total):**
- `public/portfolio/teledrama.jpg`
- `public/portfolio/commercial.jpg`
- `public/portfolio/music-video.jpg`
- `public/portfolio/color-grading.jpg`
- `public/portfolio/theme-song.jpg`
- `public/portfolio/social-media.jpg`

**Size**: 1280x720px each
**See**: IMAGE_GUIDE.md for implementation

## 🌐 Deploy to Production

### Vercel (Easiest - FREE)
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel
```
Or: Push to GitHub → Import on vercel.com → Deploy

### Build Manually
```bash
npm run build
npm start
```

## 🎨 Customization Quick Reference

| What to Change | File | Line/Section |
|---------------|------|--------------|
| Company name | `app/layout.tsx` | metadata title |
| Services list | `components/Services.tsx` | services array |
| About text | `components/About.tsx` | paragraph content |
| Testimonials | `components/Testimonials.tsx` | testimonials array |
| Portfolio items | `components/Portfolio.tsx` | portfolioItems array |
| Footer links | `components/Footer.tsx` | footerLinks object |
| Colors | `app/globals.css` | :root variables |

## 🛠️ Useful Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint

# Install new package
npm install package-name
```

## 📱 Test Checklist

Before deploying, test:
- [ ] All navigation links work
- [ ] Light/Dark mode switches properly
- [ ] Contact form submits (shows success)
- [ ] WhatsApp button opens WhatsApp
- [ ] Social media links work
- [ ] Mobile responsive (resize browser)
- [ ] All sections visible
- [ ] Images load (after adding them)

## 🎯 Important URLs

- **Local Dev**: http://localhost:3000
- **Documentation**: README.md
- **Image Guide**: IMAGE_GUIDE.md
- **Full Summary**: SUMMARY.md

## 💡 Tips

1. **Always test locally** before deploying
2. **Optimize images** before adding (< 300KB each)
3. **Update meta tags** in `app/layout.tsx` for SEO
4. **Keep backups** before major changes
5. **Use Git** for version control

## 🆘 Quick Fixes

**Site won't start?**
```bash
npm install
npm run dev
```

**Styles broken?**
- Clear browser cache (Ctrl + Shift + R)
- Restart dev server

**Icons missing?**
```bash
npm install lucide-react
```

**Port 3000 in use?**
```bash
# Kill process and restart
npm run dev -- -p 3001
```

## 📞 Contact Form Setup

**Current**: Shows success message only

**To actually send emails**, choose one:

1. **EmailJS** (Easiest)
   - Sign up at emailjs.com
   - Get template ID
   - Add to Contact.tsx

2. **FormSpree**
   - Sign up at formspree.io
   - Get form endpoint
   - Update form action

3. **SendGrid API**
   - More complex, full control
   - Create API route in Next.js

## 🎨 Color Codes (for reference)

```
Navy Blue: #0a1628
Light Blue: #3b82f6
Accent Blue: #60a5fa
White: #ffffff
Dark Background: #0f172a
```

## ✅ What's Already Done

- ✅ Responsive design
- ✅ Light/Dark mode
- ✅ All 8 services listed
- ✅ Contact form (frontend)
- ✅ WhatsApp button
- ✅ Social media links
- ✅ SEO optimization
- ✅ Animations
- ✅ Professional design

## 🚀 Ready to Launch?

1. Complete priority tasks above
2. Test everything
3. Build: `npm run build`
4. Deploy to Vercel
5. Share your new website! 🎉

---

**Need more help?** Check the full documentation in README.md and SUMMARY.md
