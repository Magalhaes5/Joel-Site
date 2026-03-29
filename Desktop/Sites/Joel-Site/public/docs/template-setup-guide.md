# Template Setup Guide

Thank you for choosing a JM Digital Solutions template! This guide will help you customize and deploy your new website.

## What You Received

- **HTML File**: Your complete website in a single `.html` file
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Modern Design**: Clean, professional styling with inline CSS
- **Ready to Deploy**: Can be hosted immediately on any web server

## Quick Start (5 Minutes)

### 1. Customize Text Content

Open your HTML file in any text editor (Notepad, VS Code, Sublime, etc.) and update:

- **Business Name**: Search for the template name (e.g., "Café Moderne") and replace with your business name
- **Contact Info**: Update email, phone number, address in the contact section
- **About Text**: Replace placeholder text with your own story
- **Menu/Services**: Update items, prices, and descriptions

### 2. Replace Images

All images use Unsplash URLs as placeholders. Replace them with your own:

```html
<!-- Before -->
<img src="https://images.unsplash.com/photo-xxx" alt="...">

<!-- After -->
<img src="your-image.jpg" alt="Your Description">
```

**Tip**: Keep images under 500KB for fast loading. Use tools like TinyPNG to compress.

### 3. Update Colors (Optional)

Find the `:root` section at the top of the `<style>` block:

```css
:root {
    --primary-color: #6F4E37;
    --accent-color: #D4AF37;
    /* Update these hex codes to match your brand */
}
```

Use a color picker tool to find your brand colors.

### 4. Set Up Contact Form

The contact form is ready for EmailJS integration:

1. Sign up at [EmailJS.com](https://www.emailjs.com/) (free for 200 emails/month)
2. Create an email service
3. Create a template with form fields
4. Replace the placeholder code in the `<script>` section:

```javascript
// Replace these with your EmailJS credentials
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', ...)
```

## Deployment Options

### Option 1: Netlify (Recommended - Free)

1. Go to [netlify.com](https://www.netlify.com/)
2. Drag and drop your HTML file
3. Get a free `.netlify.app` domain instantly
4. Optional: Connect your custom domain

### Option 2: Vercel (Free)

1. Go to [vercel.com](https://vercel.com/)
2. Import your project
3. Deploy in one click
4. Free SSL certificate included

### Option 3: GitHub Pages (Free)

1. Create a GitHub repository
2. Upload your HTML file as `index.html`
3. Enable GitHub Pages in Settings
4. Access at `yourusername.github.io/repo-name`

### Option 4: Traditional Web Hosting

Upload via FTP to any hosting provider (Bluehost, SiteGround, etc.)

## Google Maps Integration

Replace the placeholder map embed with your location:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the existing `<iframe>` in your HTML

## SEO Checklist

- [ ] Update `<title>` tag with your business name
- [ ] Fill in `<meta name="description">` with a compelling 150-character description
- [ ] Add relevant keywords to your content
- [ ] Use descriptive alt text for all images
- [ ] Test on mobile devices

## Need Help?

### Template Customization Service

Don't want to do it yourself? We offer customization packages:

- **Basic Customization** (€300): Text, images, colors, contact info
- **Full Customization** (€500): Everything above + custom sections, integrations

Contact: magalhaesjoel5@gmail.com

### Common Issues

**Q: The form doesn't send emails**
A: Make sure you've set up EmailJS and replaced the placeholder credentials.

**Q: Images don't show after uploading**
A: Check that image file paths are correct and files are in the same directory.

**Q: Site looks broken on mobile**
A: Clear your browser cache and test in incognito mode.

**Q: How do I change fonts?**
A: The template uses Google Fonts. You can change the font by updating the `<link>` tag and CSS font-family declarations.

## Advanced Customization

Want to add more features? Consider:

- **Blog Section**: Add a simple blog with static HTML pages
- **Booking System**: Integrate Calendly or similar
- **Live Chat**: Add Tawk.to or Crisp (free options)
- **Analytics**: Add Google Analytics tracking code
- **Social Media Feed**: Embed Instagram or Facebook feeds

## Support

Included with your template:
- **30 days email support**
- **1 revision round** for small adjustments

Email: magalhaesjoel5@gmail.com
Response time: Within 24 hours (Monday-Friday)

---

**Built with care by JM Digital Solutions**
Luxembourg-based web design for restaurants, wellness, and local businesses.

www.jmdigitalsolutions.com
