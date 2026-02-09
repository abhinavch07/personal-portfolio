# Coming Soon Landing Page

A beautiful, fully customizable "Coming Soon" landing page with animated gradients, countdown timer, and email signup. Perfect for launching new projects, products, or services!

## 🌟 Features

- **Hero Section** with animated gradient background and floating blobs
- **Live Countdown Timer** to your launch date
- **Feature Cards** with hover effects
- **Image Gallery** with hover overlays
- **Email Signup Form** for collecting leads
- **Social Media Links** section
- **Fully Responsive** design (mobile, tablet, desktop)
- **No Dependencies** - Single HTML file with inline CSS and JavaScript
- **Easy Customization** - Clear comments marking all customization points

## 🚀 Quick Start

### Option 1: Use as Standalone Page

1. Simply open `coming-soon.html` in your browser
2. No build process required!

### Option 2: Deploy to GitHub Pages

1. Rename `coming-soon.html` to `index.html` (backup your original if needed)
2. Push to GitHub
3. Go to repository Settings → Pages
4. Select your branch (usually `main`) and root directory
5. Click Save
6. Your site will be live at `https://yourusername.github.io/your-repo-name/`

### Option 3: Deploy to Netlify

#### Method A: Drag & Drop
1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop your `coming-soon.html` file
3. Get instant live URL!

#### Method B: Git Integration
1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Configure build settings:
   - Build command: (leave empty)
   - Publish directory: `/` (root)
6. Click "Deploy site"

### Option 4: Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts
4. Your site is live!

## ✏️ Customization Guide

The HTML file has clear `<!-- CUSTOMIZE: ... -->` comments marking all areas you should personalize. Here's what you can customize:

### 1. Page Title & Metadata
```html
<!-- Line ~6-7 -->
<title>Coming Soon | Your Brand Name</title>
<meta name="description" content="Something amazing is coming soon. Stay tuned!">
```

### 2. Hero Section
```html
<!-- Line ~276-279 -->
<h1>Coming Soon</h1>
<p class="hero-tagline">Something amazing is on the way...</p>
```

### 3. Launch Date (Countdown Timer)
```javascript
// Line ~559-562 - Change the number of days or set a specific date
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 90); // 90 days from now

// OR set a specific date:
const launchDate = new Date('2026-12-31 23:59:59');
```

### 4. What's Coming Section
```html
<!-- Line ~302-306 -->
<h2>What's Coming?</h2>
<p>We're building something special...</p>
```

### 5. Feature Cards
```html
<!-- Line ~309-316 - Repeat for each card -->
<span class="feature-icon">🚀</span>
<h3>Lightning Fast</h3>
<p>Experience blazing-fast performance...</p>
```
Change the emoji, title, and description for each of the 3 feature cards.

### 6. Image Gallery
```html
<!-- Line ~345-351 - Repeat for each image -->
<img src="https://placehold.co/600x400/3b82f6/ffffff?text=Preview+1" alt="Preview 1">
<div class="gallery-caption">Amazing Feature Preview</div>
```
Replace `src` with your actual image URLs. You can use:
- Local images: `src="./images/preview1.jpg"`
- External URLs: `src="https://yourdomain.com/image.jpg"`
- Image services: `src="https://placehold.co/600x400?text=Your+Text"`

### 7. Newsletter Form

#### For Netlify Forms:
```html
<!-- Line ~383 -->
<form class="newsletter-form" action="#" method="POST" netlify name="newsletter">
```

#### For Formspree:
1. Sign up at [Formspree](https://formspree.io)
2. Create a new form and get your form ID
3. Update the form:
```html
<form class="newsletter-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

#### For MailChimp:
1. Go to your MailChimp audience
2. Create embedded form
3. Copy the form action URL
4. Update the form action and add hidden fields as needed

### 8. Social Media Links
```html
<!-- Line ~413-450 -->
<!-- Twitter/X -->
<a href="#" class="social-link">...</a>

<!-- Instagram -->
<a href="#" class="social-link">...</a>

<!-- LinkedIn -->
<a href="#" class="social-link">...</a>

<!-- Email -->
<a href="mailto:hello@example.com" class="social-link">...</a>
```
Replace `#` with your actual social media URLs:
- Twitter: `https://twitter.com/yourusername`
- Instagram: `https://instagram.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourusername`
- Email: `mailto:your.email@example.com`

### 9. Footer
```html
<!-- Line ~461 -->
<p>&copy; <span id="year"></span> Your Brand Name. All rights reserved.</p>
```

## 🎨 Color Customization

Want to change the color scheme? Update these CSS variables at the top of the `<style>` section:

```css
:root {
    --primary-blue: #1e3a8a;      /* Dark blue */
    --secondary-blue: #3b82f6;    /* Medium blue */
    --accent-purple: #8b5cf6;     /* Purple accent */
    --dark-bg: #0f172a;           /* Dark background */
    --light-gray: #f8fafc;        /* Light gray */
    --text-dark: #1e293b;         /* Dark text */
    --text-light: #64748b;        /* Light text */
}
```

You can use tools like [Coolors](https://coolors.co/) to generate color palettes.

## 📱 Responsive Design

The page is fully responsive and tested on:
- ✅ Mobile phones (320px and up)
- ✅ Tablets (768px and up)
- ✅ Laptops (1024px and up)
- ✅ Desktops (1440px and up)

## 🔧 Advanced Customization

### Add Favicon
Add this in the `<head>` section:
```html
<link rel="icon" type="image/png" href="favicon.png">
```

### Add Open Graph Meta Tags (for social sharing)
```html
<meta property="og:title" content="Your Brand - Coming Soon">
<meta property="og:description" content="Something amazing is coming soon!">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">
<meta property="og:url" content="https://yourdomain.com">
```

### Google Analytics
Add before the closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🌐 Custom Domain Setup

### GitHub Pages
1. Add a `CNAME` file to your repository with your domain name
2. In your domain registrar, add these DNS records:
   - Type: A, Name: @, Value: 185.199.108.153
   - Type: A, Name: @, Value: 185.199.109.153
   - Type: A, Name: @, Value: 185.199.110.153
   - Type: A, Name: @, Value: 185.199.111.153
3. In GitHub repo settings, enter your custom domain

### Netlify
1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow Netlify's instructions to configure DNS
4. Netlify automatically provisions SSL certificate

## 📊 Email Services Comparison

| Service | Free Tier | Setup Difficulty | Best For |
|---------|-----------|------------------|----------|
| [Netlify Forms](https://www.netlify.com/products/forms/) | 100 submissions/month | Easy | Static sites on Netlify |
| [Formspree](https://formspree.io) | 50 submissions/month | Very Easy | Quick setup, any host |
| [MailChimp](https://mailchimp.com) | 500 contacts | Medium | Email marketing campaigns |
| [ConvertKit](https://convertkit.com) | 1000 subscribers | Medium | Content creators |

## 🎯 Best Practices

1. **Test Before Launch**
   - Open the HTML file in multiple browsers
   - Test on different devices and screen sizes
   - Check all links and form submissions

2. **Optimize Images**
   - Compress images using [TinyPNG](https://tinypng.com)
   - Use appropriate dimensions (max 1200px width for web)
   - Use WebP format for better performance

3. **SEO Tips**
   - Update meta description with relevant keywords
   - Add descriptive alt text to images
   - Use semantic HTML (already done!)
   - Submit sitemap to Google Search Console

4. **Performance**
   - The page is already optimized with inline styles
   - Uses Google Fonts with font-display: swap
   - No external dependencies means fast loading

## 🐛 Troubleshooting

**Countdown timer not working?**
- Check that JavaScript is enabled in your browser
- Verify the launch date is set correctly
- Open browser console (F12) to check for errors

**Form submissions not working?**
- Make sure you've connected a form service (Netlify Forms, Formspree, etc.)
- Check that the form action URL is correct
- Verify your email service is properly configured

**Images not loading?**
- Check that image URLs are correct
- For local images, ensure they're in the same directory or correct relative path
- Verify image files exist and are accessible

**Styles look broken?**
- Make sure the HTML file hasn't been modified incorrectly
- Check that the `<style>` tag is intact in the `<head>` section
- Clear browser cache and refresh

## 📝 License

This landing page template is free to use for personal and commercial projects.

## 🤝 Support

If you encounter any issues or have questions:
1. Check this README for solutions
2. Open an issue in the repository
3. Search for similar issues in the repo

## ⭐ Show Your Support

If you found this helpful, please give the project a star!

---

Made with ❤️ for developers who want to launch fast!
