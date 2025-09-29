# Fabricare Laundromat - Landing Page

An awesome, modern landing page for Fabricare Laundromat in Enugu, Nigeria.

## Features

✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
✅ **Modern UI/UX** - Clean, professional design with smooth animations
✅ **Service Showcase** - Display all laundry services with pricing
✅ **Online Booking** - Integrated booking form with validation
✅ **Customer Reviews** - Testimonials section to build trust
✅ **FAQ Section** - Interactive accordion for common questions
✅ **Contact Form** - Easy way for customers to get in touch
✅ **WhatsApp Integration** - Quick booking via WhatsApp
✅ **Google Maps** - Embedded map for easy location finding
✅ **SEO Optimized** - Proper meta tags and semantic HTML

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid & Flexbox
- **JavaScript (Vanilla)** - Interactive features
- **Google Fonts** - Poppins & Inter typography
- **SVG Icons** - Scalable vector graphics

## Pages & Sections

1. **Hero Section** - Eye-catching header with CTAs
2. **Features** - Why choose Fabricare
3. **Services** - Detailed service offerings
4. **Pricing** - Transparent pricing plans
5. **About** - Company information and stats
6. **Reviews** - Customer testimonials
7. **Booking** - Online booking form
8. **FAQ** - Frequently asked questions
9. **Contact** - Contact form and location map
10. **Footer** - Links and social media

## Setup Instructions

### 1. Clone or Download

```bash
cd Fabric-care-landing-page
```

### 2. Add Images

Place your laundromat photos in the `images/` directory. See `images/README.md` for required images and specifications.

### 3. Customize Content

Edit `index.html` to update:
- Business name and contact information
- Operating hours
- Services and pricing
- Customer reviews
- FAQ content

### 4. Update Links

- Replace WhatsApp link with your business number
- Update Google Maps embed URL
- Add your social media links in the footer

### 5. Launch

Open `index.html` in a web browser or deploy to your hosting platform.

## Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Access via `https://yourusername.github.io/repo-name`

### Option 2: Netlify (Free)
1. Create account at [Netlify](https://netlify.com)
2. Drag and drop your project folder
3. Get instant deployment with custom domain support

### Option 3: Traditional Hosting
1. Upload files via FTP to your web host
2. Place in public_html or www directory
3. Access via your domain

## Integration Guides

### Paystack Payment Integration

To enable card payments:

1. Sign up at [Paystack](https://paystack.com)
2. Get your public key
3. Add Paystack Inline JS to `index.html`:

```html
<script src="https://js.paystack.co/v1/inline.js"></script>
```

4. Update booking form submission in `script.js` to process payments

### Email Form Integration

To receive form submissions via email:

**Option 1: Formspree (Easy)**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: EmailJS (Free)**
1. Sign up at [EmailJS](https://emailjs.com)
2. Follow their integration guide
3. Update form submission handlers in `script.js`

**Option 3: Backend API**
- Create your own backend (Node.js, PHP, Python)
- Send emails via SMTP or email service
- Update API endpoints in `script.js`

### Google Analytics

Add tracking code before closing `</head>` tag:

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

### Facebook Pixel

Add before closing `</head>` tag for ad tracking and analytics.

## Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #3B82F6;  /* Main brand color */
    --secondary-color: #10B981; /* Accent color */
    --dark-color: #111827;      /* Text color */
}
```

### Fonts

Update Google Fonts link in `index.html` to change typography.

### Content

All content can be edited directly in `index.html`. Look for sections marked with HTML comments.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lazy loading for images
- Optimized CSS and JavaScript
- Minimal external dependencies
- Fast load times (<3 seconds)

## SEO Best Practices

✅ Semantic HTML structure
✅ Meta description and keywords
✅ Open Graph tags for social sharing
✅ Alt text for all images
✅ Mobile-friendly design
✅ Fast loading speed

## Contact & Support

For questions or support:
- **Email**: support@fabricarelaundromat.com
- **Phone**: +234 801 234 5678
- **WhatsApp**: [Click here](https://wa.me/2348012345678)

## License

© 2025 Fabricare Laundromat. All rights reserved.

---

**Need help customizing or deploying this landing page?** Contact us for professional web development services!