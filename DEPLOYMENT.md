# Deploy Fabricare.ng - Complete Guide

This guide shows you how to deploy your landing page to **fabricare.ng** for **FREE** with email notifications.

---

## 🚀 Part 1: Deploy to Netlify (FREE)

### Step 1: Create Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up" (use GitHub, email, or Google)
3. Complete registration (100% free plan available)

### Step 2: Deploy Your Site

**Option A: Drag & Drop (Easiest)**
1. Log into Netlify
2. Click "Add new site" → "Deploy manually"
3. Drag your entire project folder to the upload area
4. Wait 30-60 seconds - Done! ✅

**Option B: GitHub (Recommended for updates)**
1. Create GitHub repository
2. Push your code:
```bash
cd /Users/ezinwavictor/WebstormProjects/Fabric-care-landing-page
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fabricare-landing.git
git push -u origin main
```
3. In Netlify: "Add new site" → "Import from Git"
4. Connect GitHub and select your repository
5. Click "Deploy site"

### Step 3: Connect Your Domain (fabricare.ng)

1. In Netlify dashboard, click "Domain settings"
2. Click "Add custom domain"
3. Enter: `fabricare.ng`
4. Click "Verify"

### Step 4: Update DNS Settings

Go to your domain registrar (where you bought fabricare.ng):

**Add these DNS records:**

| Type  | Name | Value (from Netlify)          | TTL  |
|-------|------|-------------------------------|------|
| A     | @    | 75.2.60.5                     | 3600 |
| CNAME | www  | YOUR-SITE.netlify.app         | 3600 |

**Or use Netlify DNS (Easier):**
1. In Netlify → Domain settings → "Set up Netlify DNS"
2. Copy the 4 nameservers provided
3. Go to your domain registrar
4. Replace existing nameservers with Netlify's
5. Wait 24-48 hours for propagation

### Step 5: Enable HTTPS (Free SSL)
1. Once domain is verified, click "Verify DNS configuration"
2. Click "Provision certificate" (automatic)
3. Wait 1-2 minutes - SSL enabled! 🔒

---

## 📧 Part 2: Setup Email Notifications (FREE)

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up (FREE plan: 50 submissions/month)
3. Verify your email

### Step 2: Create Form Endpoints

**For Booking Form:**
1. In Formspree dashboard, click "New Project"
2. Name: "Fabricare Bookings"
3. Click "New Form"
4. Copy the form ID (looks like: `xyzabc123`)

**For Contact Form:**
1. Click "New Form" again
2. Name: "Contact Messages"
3. Copy the second form ID

### Step 3: Update Your index.html

Replace `YOUR_FORM_ID` in two places:

**Line 316 (Booking Form):**
```html
<form class="booking-form" id="bookingForm" action="https://formspree.io/f/xyzabc123" method="POST">
```

**Line 444 (Contact Form):**
```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/xyzabc456" method="POST">
```

### Step 4: Configure Email Settings

In Formspree dashboard:
1. Click on your form
2. Go to "Settings" → "Email"
3. Add your email: `support@fabricarelaundromat.com` (or your preferred email)
4. Enable "Send confirmation email to submitter"
5. Click "Save"

### Step 5: Customize Email Template (Optional)

In Formspree settings:
1. Go to "Email" tab
2. Edit email subject and body template
3. Example subject: "New Booking - {{name}} - {{service}}"

### Step 6: Re-deploy

If using Netlify:
- **Drag & Drop:** Re-upload entire folder
- **GitHub:**
```bash
git add .
git commit -m "Add Formspree integration"
git push
```

Netlify auto-deploys in 30 seconds! ✅

---

## 📱 Part 3: WhatsApp Integration

### Update WhatsApp Number

Find and replace in `index.html`:
- Current: `https://wa.me/2348012345678`
- Replace with: `https://wa.me/YOUR_NUMBER`

Format: `234` (country code) + `8012345678` (phone without leading 0)

Example: For 0801-234-5678, use: `2348012345678`

---

## ✅ Testing Your Setup

### Test Email Forms:
1. Visit your live site: `https://fabricare.ng`
2. Fill out booking form
3. Submit
4. Check email inbox (may take 1-2 minutes)
5. Check Formspree dashboard for submission

### Test WhatsApp:
1. Click "Book via WhatsApp" button
2. Should open WhatsApp with pre-filled message
3. Verify phone number is correct

---

## 🎨 Optional Enhancements

### Add Google Analytics (Free)

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID (GA_MEASUREMENT_ID)
3. Add before `</head>` in index.html:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Add Facebook Pixel (Free)

1. Create business account at [business.facebook.com](https://business.facebook.com)
2. Get Pixel ID
3. Add tracking code before `</head>`

### Add Live Chat Widget

**Free options:**
- **Tawk.to** - 100% free forever
- **Crisp** - Free for 2 agents
- **Tidio** - Free basic plan

---

## 🔧 Troubleshooting

### Domain not working?
- Wait 24-48 hours for DNS propagation
- Check DNS settings in domain registrar
- Use [whatsmydns.net](https://whatsmydns.net) to verify

### Forms not working?
- Verify Formspree form IDs are correct
- Check Formspree dashboard for submissions
- Ensure email is verified in Formspree

### HTTPS not enabled?
- Verify domain DNS is correct
- Wait 1-2 hours after DNS verification
- Click "Provision certificate" again

### Images not showing?
- Ensure images are in `/images/` folder
- Check file names match HTML references
- Re-deploy after adding images

---

## 💰 Cost Breakdown

| Service | Cost |
|---------|------|
| Netlify Hosting | **FREE** (100GB bandwidth) |
| Formspree Emails | **FREE** (50 submissions/month) |
| SSL Certificate | **FREE** (via Let's Encrypt) |
| Domain (fabricare.ng) | ~₦5,000/year (already owned) |
| **Total Monthly Cost** | **₦0** |

---

## 📞 Need Help?

### Netlify Support
- Docs: [docs.netlify.com](https://docs.netlify.com)
- Community: [answers.netlify.com](https://answers.netlify.com)

### Formspree Support
- Docs: [help.formspree.io](https://help.formspree.io)
- Email: support@formspree.io

### Your Current Setup
- **Domain:** fabricare.ng
- **Project:** `/Users/ezinwavictor/WebstormProjects/Fabric-care-landing-page`
- **Files:** index.html, styles.css, script.js, thank-you.html

---

## 🎉 You're All Set!

Once deployed:
1. ✅ Live at fabricare.ng with HTTPS
2. ✅ Email notifications for bookings
3. ✅ WhatsApp integration
4. ✅ Mobile responsive
5. ✅ Professional design
6. ✅ Zero monthly costs

**Next Steps:**
- Add your business images to `/images/` folder
- Share on social media
- Start receiving bookings! 🚀