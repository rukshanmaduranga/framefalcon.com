# Frame Falcon Studios - Image Guide

This guide will help you add real images to your website to replace the current gradient placeholders.

## Required Images

### 1. Logo (1:1 ratio)
- **Location**: `public/logo.png` or `public/logo.svg`
- **Size**: 200x200px minimum (SVG preferred for scalability)
- **Usage**: Navigation bar
- **Update in**: `components/Navbar.tsx`

### 2. Hero Section Image/Video
- **Location**: `public/hero-video.mp4` or `public/hero-image.jpg`
- **Size**: 1920x1080px (16:9 ratio)
- **Usage**: Main hero section visual
- **Update in**: `components/Hero.tsx`

### 3. Portfolio Images (6 images)
- **Location**: `public/portfolio/`
- **Naming**: 
  - `teledrama.jpg` - Teledrama editing project
  - `commercial.jpg` - TV commercial project
  - `music-video.jpg` - Music video project
  - `color-grading.jpg` - Color grading showcase
  - `theme-song.jpg` - Theme song production
  - `social-media.jpg` - Social media content
- **Size**: 1280x720px (16:9 ratio)
- **Update in**: `components/Portfolio.tsx`

### 4. Service Icons (Optional)
If you want custom icons instead of Lucide icons:
- **Location**: `public/icons/`
- **Size**: 64x64px (SVG preferred)
- **Update in**: `components/Services.tsx`

## How to Add Images

### Step 1: Prepare Your Images
1. Optimize images for web (use tools like TinyPNG or Squoosh)
2. Ensure proper dimensions as specified above
3. Use descriptive file names
4. Recommended formats:
   - Photos: JPG or WebP
   - Graphics/Logos: PNG or SVG
   - Videos: MP4 (H.264 codec)

### Step 2: Add Images to Public Folder
```
public/
├── logo.png
├── hero-image.jpg
└── portfolio/
    ├── teledrama.jpg
    ├── commercial.jpg
    ├── music-video.jpg
    ├── color-grading.jpg
    ├── theme-song.jpg
    └── social-media.jpg
```

### Step 3: Update Components

#### Update Logo in Navbar
In `components/Navbar.tsx`, replace the logo div with:
```tsx
<Image 
  src="/logo.png" 
  alt="Frame Falcon Studios" 
  width={56} 
  height={56}
  className="rounded-lg"
/>
```

#### Update Hero Image
In `components/Hero.tsx`, replace the gradient placeholder with:
```tsx
<Image
  src="/hero-image.jpg"
  alt="Frame Falcon Studios Production"
  width={1920}
  height={1080}
  className="rounded-2xl shadow-2xl"
/>
```

#### Update Portfolio Images
In `components/Portfolio.tsx`, update the portfolioItems array:
```tsx
const portfolioItems = [
  {
    id: 1,
    title: 'Epic Teledrama Series',
    category: 'Teledrama Editing',
    description: '...',
    image: '/portfolio/teledrama.jpg', // Add this
    color: 'from-purple-500 to-pink-500',
  },
  // ... repeat for other items
];
```

Then in the JSX, replace the gradient div with:
```tsx
<Image
  src={item.image}
  alt={item.title}
  width={1280}
  height={720}
  className="object-cover w-full h-full"
/>
```

## Image Optimization Tips

1. **Compress Images**: Use tools like:
   - [TinyPNG](https://tinypng.com/) - PNG/JPG compression
   - [Squoosh](https://squoosh.app/) - Advanced image optimization
   - [ImageOptim](https://imageoptim.com/) - Mac app for optimization

2. **Use Next.js Image Component**: 
   - Automatically optimizes images
   - Lazy loads images
   - Serves WebP when supported
   - Responsive images

3. **Recommended Sizes**:
   - Logo: < 50KB
   - Hero: < 500KB
   - Portfolio: < 300KB each
   - Icons: < 10KB each

4. **Use WebP Format**: 
   - Better compression than JPG/PNG
   - Supported by all modern browsers
   - Next.js automatically converts

## Adding Background Videos

For a more dynamic hero section, you can add a background video:

1. **Prepare Video**:
   - Format: MP4 (H.264)
   - Size: 1920x1080px
   - Duration: 10-30 seconds (looped)
   - File size: < 5MB

2. **Add to Public Folder**: `public/hero-video.mp4`

3. **Update Hero Component**:
```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/hero-video.mp4" type="video/mp4" />
</video>
```

## Stock Image Resources

If you need placeholder images while preparing real content:

- [Unsplash](https://unsplash.com/) - Free high-quality photos
- [Pexels](https://pexels.com/) - Free stock photos and videos
- [Pixabay](https://pixabay.com/) - Free images and videos
- [Coverr](https://coverr.co/) - Free stock videos

Search terms:
- "video production"
- "audio studio"
- "film editing"
- "music production"
- "color grading"

## Need Help?

If you need assistance adding images or have questions:
1. Check the Next.js Image documentation
2. Review the component files for current implementation
3. Test images locally before deploying

---

**Remember**: Always optimize images before adding them to ensure fast loading times!
