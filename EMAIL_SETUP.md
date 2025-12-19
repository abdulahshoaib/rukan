# Email Configuration Guide

The contact form in this Rukan Construction website is now fully functional with email support.

## Setup Instructions

### 1. Configure Email Provider

The email system supports any SMTP provider. Here are popular options:

#### Option A: Gmail (Free, Recommended for Testing)
1. Enable 2-Factor Authentication on your Google account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Generate an app password for "Mail" and "Windows Computer"
4. Copy the generated 16-character password

#### Option B: SendGrid
1. Create a SendGrid account
2. Verify your email address
3. Create an API key from Settings > API Keys
4. Use the API key as your password

#### Option C: Other SMTP Services
- Mailgun, AWS SES, Postmark, etc. (use their SMTP credentials)

### 2. Update Environment Variables

Edit `.env.local` in the project root:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@rukanconstruction.com
CONTACT_EMAIL=info@miqconstruct.com
```

### 3. Test the Form

1. Start the development server: `npm run dev`
2. Navigate to http://localhost:3000
3. Scroll to the Contact section
4. Fill out and submit the form
5. Check your email for the submission

## Form Features

✅ **Real-time Validation**
- Email format validation
- Required field checking
- Visual error messages

✅ **Success Feedback**
- Success message display
- Auto-redirect to thank you page
- Reply-to field for easy responses

✅ **User Experience**
- Disabled form during submission
- Loading state on submit button
- Error handling with user-friendly messages

## Technical Details

- **Framework**: Next.js Server Actions (secure, no API route exposure)
- **Email Library**: Nodemailer (industry standard)
- **Validation**: Client-side + Server-side
- **Redirect**: Auto-redirects to `/thank-you` page after successful submission

## Troubleshooting

### "Failed to send message" Error
- Check that environment variables are correctly set in `.env.local`
- Verify SMTP credentials are correct
- For Gmail, ensure you generated an app password (not your main password)
- Check that 2FA is enabled on your Google account

### Email Not Received
- Check spam/junk folder
- Verify the CONTACT_EMAIL is set correctly
- Try sending from a different email client to test SMTP settings

### Form Submission Hangs
- Check browser console for errors
- Verify network connection
- Check server logs for SMTP connection errors

## File Structure

```
app/
  actions/
    contact.ts        # Server action for email sending
  page.tsx           # Updated with ContactForm component

components/
  ContactForm.tsx    # Form component with client-side logic
  Header.tsx
  Footer.tsx

.env.local          # Environment variables (git ignored)
.env.example        # Template for environment variables
```

## Security Notes

✅ **Email credentials are kept private** - Only stored in `.env.local` which is git-ignored
✅ **Server-side validation** - Form data is validated on the backend
✅ **No exposed API keys** - Using Next.js Server Actions (not public APIs)
✅ **Reply-to set to user email** - Easy for support team to respond

## Support

For issues or questions, contact the development team.
