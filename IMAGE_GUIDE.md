# Karl Photography Portfolio - Image Guide & Component Structure

## 📁 CURRENT STRUCTURE

**Everything is currently in ONE file**: `src/app/page.tsx` (not separate components)
All sections are built directly in the main page component.

## 🖼️ IMAGE LOCATIONS & DIMENSIONS GUIDE

### 1. **HERO SECTION** (Lines 19-65 in page.tsx)
```
Current Structure:
├── Background Video: `/videos/hero-video.mp4`
├── Poster Image: `/images/cta-image.jpg` (fallback when video loads)
├── Hero Title: "Your Vision. My Craft. Unforgettable Results."
└── Client Showcase: 4 text items (KFC, Sonoma-Cutrer, etc.)
```

**🎯 Images Needed:**
- **Background Video**: `/videos/hero-video.mp4` (current: working)
- **Poster Image**: `/images/cta-image.jpg` (current: 1920x1080px) - shows before video loads

### 2. **CLIENT LOGOS SECTION** (Lines 67-110 in page.tsx)
```
Location: `/public/images/logos/`
Required files:
├── kfc-logo.png
├── mcdonalds-logo.png  
├── jimbeam-logo.png
├── molson-logo.png
├── lge-logo.png
├── avanir-logo.png
├── solventum-logo.png
└── pepco-logo.png
```

**📏 Recommended Dimensions:**
- **Logo Size**: 360x180px (2:1 ratio) - High resolution for crisp display
- **Format**: PNG with transparent background
- **Max Display**: 180x90px (scaled by CSS)
- **File Size**: Keep under 50KB for fast loading

### 3. **STEPPED CTA SECTION** (Lines 113-150 in page.tsx)
```
Current Image: `/images/cta-image.jpg`
```

**📏 Dimensions:**
- **Size**: 1920x1080px (16:9 ratio) 
- **Format**: JPG (high quality)
- **Content**: Should show your photography work/studio

### 4. **SERVICES SECTION** (Lines 152-255 in page.tsx)
```
Service Images Location: `/public/images/services/`
Current files:
├── commercial.jpg (Commercial Production)
├── portrait.jpg (Portrait Photography) 
├── wedding.jpg (Event Photography)
├── event.jpg (PR Asset Development)
├── product.jpg (Creative Consultation)
└── lifestyle.jpg (Social Media Content)
```

**📏 Recommended Dimensions:**
- **Size**: 600x400px (3:2 ratio)
- **Format**: JPG 
- **Content**: Examples of each service type

### 5. **CASE STUDIES SECTION** (Lines 257-312 in page.tsx)
```
Case Study Images: `/public/images/case-studies/`
Current files:
├── case1.jpg (Muscle Milk Campaign)
├── case2.jpg (KFC Campaign)
├── case3.jpg (Behind the Scenes)  
└── case4.jpg (Jim Beam Campaign)
```

**📏 Recommended Dimensions:**
- **Size**: 800x600px (4:3 ratio)
- **Format**: JPG
- **Content**: Final project results/hero shots

### 6. **SOCIAL GALLERY SECTION** (Lines 314-350 in page.tsx)
```
Social Images: `/public/images/social/`
Current files:
├── social1.jpg (Behind the scenes)
├── social2.jpg (Latest work)
├── social3.jpg (Production)
├── social4.jpg (Setup)
└── social5.jpg (Equipment)
```

**📏 Recommended Dimensions:**
- **Size**: 400x400px (1:1 ratio - Instagram style)
- **Format**: JPG
- **Content**: Behind-the-scenes, process shots

## 🔧 HOW TO UPDATE IMAGES

### Option 1: Replace Existing Files
Simply replace the files in `/public/images/` with your images using the same filenames.

### Option 2: Update File References
Edit the `src` attributes in `page.tsx`:

```tsx
// Example: Line 89
<img src="/images/logos/YOUR-NEW-LOGO.png" alt="Your Client" className="client-logo-img" />

// Example: Line 269
<img src="/images/case-studies/YOUR-PROJECT.jpg" alt="Your Project" />
```

## 📐 QUICK REFERENCE - IMAGE SIZES

| Section | Location | Size | Format | Aspect Ratio |
|---------|----------|------|--------|--------------|
| Hero Video | `/videos/` | Any video size | MP4 | 16:9 recommended |
| Hero Poster | `/images/` | 1920x1080px | JPG | 16:9 |
| Client Logos | `/images/logos/` | 360x180px | PNG | 2:1 |
| CTA Background | `/images/` | 1920x1080px | JPG | 16:9 |
| Services | `/images/services/` | 600x400px | JPG | 3:2 |
| Case Studies | `/images/case-studies/` | 800x600px | JPG | 4:3 |
| Social Gallery | `/images/social/` | 400x400px | JPG | 1:1 |

## 🚀 NEXT STEPS

1. **Create folder structure** in `/public/images/`:
   ```
   public/
   ├── images/
   │   ├── logos/
   │   ├── services/
   │   ├── case-studies/
   │   └── social/
   └── videos/
   ```

2. **Prepare your images** in the recommended sizes

3. **Replace the sample images** with your actual photography work

4. **Update text content** in `page.tsx` to match your projects

## 💡 PRO TIPS

- **Optimize images** - Use tools like TinyPNG to reduce file sizes
- **Consistent quality** - All images should have similar lighting/color grading
- **Backup originals** - Keep high-res originals separate from web-optimized versions
- **Test mobile** - Check how images look on different screen sizes

Would you like me to help you create separate components for any of these sections, or help you organize your images in a specific way?
