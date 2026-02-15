# Web3Forms Setup Guide

## Steps to Configure Web3Forms

1. **Get Your Access Key**
   - Visit [https://web3forms.com](https://web3forms.com)
   - Sign up for a free account
   - Create a new form
   - Copy your Access Key

2. **Add Access Key to Contact Component**
   - Open `src/components/Contact.tsx`
   - Find the line: `formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");`
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key

3. **Test the Form**
   - Run your development server: `npm run dev`
   - Navigate to the Contact section
   - Submit a test message
   - Check your email for the form submission

## Features Included

- ✅ Name field
- ✅ Email field (required)
- ✅ Phone field (optional)
- ✅ Subject field
- ✅ Message textarea
- ✅ Form validation
- ✅ Loading state during submission
- ✅ Success/error toast notifications
- ✅ Contact information display with location
- ✅ Mailto links for both founders
- ✅ Phone links for direct calling

## Location Information

The contact form displays:
- **Location**: Chennai, Tamil Nadu, India
- **Google Maps Link**: Opens location in Google Maps

To customize the location:
- Edit the MapPin section in `src/components/Contact.tsx`
- Update the address text and Google Maps URL

## Email Configuration

The form will send submissions to the email address configured in your Web3Forms dashboard.

Founder emails displayed:
- idayavadani@gmail.com
- dhaarini1806@gmail.com
