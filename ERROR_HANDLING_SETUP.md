# Rukan Construction Website - Error Handling & Email Setup

## Overview
This Next.js application includes comprehensive error handling with Sonner toast notifications and email functionality for the contact form.

## Features Implemented

### 1. **Error Handling with Sonner**
- Toast notifications for success, error, warning, and info messages
- Loading states with dismissible toasts
- Field-level error display in contact form
- Automatic error dismissal after 5 seconds

### 2. **Contact Form Email Functionality**
- Server-side email sending with Nodemailer
- Validation of form data with detailed error messages
- Separate emails sent to admin and user
- HTML-formatted emails with styling

### 3. **Form Validation**
- Email validation using regex pattern
- Phone number validation (basic)
- Name validation (minimum 2 characters)
- Description validation (minimum 10 characters)
- Real-time field error clearing on user input
- XSS protection with input sanitization

### 4. **User Experience**
- Loading states during form submission
- Redirect to thank you page after successful submission
- Auto-complete contact information in confirmation email
- Field error highlighting
- Disabled form inputs during submission

## Environment Setup

### Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@rukanconstruction.com
SMTP_SECURE=false

# Contact Email
CONTACT_EMAIL=info@miqconstruct.com
```

### Gmail Setup Instructions

1. **Enable 2-Factor Authentication**
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Copy the 16-character password
   - Use this as `SMTP_PASSWORD` in `.env.local`

### Alternative Email Providers

#### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=SG.xxxxxxxxxxxxx
SMTP_FROM=noreply@rukanconstruction.com
```

#### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-email@your-domain.com
SMTP_PASSWORD=your-mailgun-password
SMTP_FROM=noreply@rukanconstruction.com
```

## Installation

### Install Dependencies

Using pnpm (recommended):

```bash
pnpm install
```

The following packages have been installed:
- `sonner` - Toast notifications
- `nodemailer` - Email sending
- `@types/nodemailer` - TypeScript types

## Project Structure

```
├── components/
│   ├── ContactForm.tsx      # Contact form with validation and error handling
│   ├── Footer.tsx           # Footer with links
│   ├── Header.tsx           # Navigation header
│   └── ToasterProvider.tsx  # Sonner toaster setup
├── app/
│   ├── layout.tsx           # Root layout with Toaster
│   ├── page.tsx             # Home page
│   ├── actions/
│   │   └── contact.ts       # Server action for email sending
│   ├── portfolio/
│   │   └── page.tsx         # Portfolio page
│   ├── terms/
│   │   └── page.tsx         # Terms page
│   ├── privacy/
│   │   └── page.tsx         # Privacy page
│   └── thank-you/
│       └── page.tsx         # Thank you page
├── hooks/
│   └── useErrorHandler.ts   # Error handling hook
├── lib/
│   └── validation.ts        # Form validation utilities
└── .env.example             # Example environment variables
```

## Usage

### Contact Form Submission

The contact form at the bottom of the homepage handles:

1. **Form Validation**
   - Real-time validation of required fields
   - Email format validation
   - Phone number validation
   - Description length validation

2. **Error Handling**
   - Individual field error messages
   - Toast notifications for errors
   - Loading state during submission
   - Disabled form inputs during processing

3. **Email Sending**
   - Admin receives detailed project information
   - User receives confirmation email
   - Both emails are HTML-formatted
   - Reply-to address is set to user's email

### Error Handler Hook

Use the `useErrorHandler` hook in client components:

```tsx
import { useErrorHandler } from '@/hooks/useErrorHandler';

export function MyComponent() {
  const { handleError, handleSuccess, handleLoading, dismissToast } = useErrorHandler();

  const handleSubmit = async () => {
    const toastId = handleLoading('Processing...');
    try {
      // Your async operation
      handleSuccess('Operation successful!');
    } catch (error) {
      handleError(error, 'Operation failed');
    } finally {
      dismissToast(toastId);
    }
  };

  return (
    <button onClick={handleSubmit}>Submit</button>
  );
}
```

### Validation Utilities

Use validation functions from `@/lib/validation`:

```tsx
import { validateFormData, validateEmail, validatePhone } from '@/lib/validation';

const validation = validateFormData({
  Name: 'John Doe',
  Email: 'john@example.com',
  Phone: '555-1234',
  Description: 'My project description'
});

if (!validation.valid) {
  console.error(validation.errors);
}
```

## Error Messages

### Form Validation Errors

- **Name**: "Name is required" or "Name must be at least 2 characters"
- **Email**: "Email is required" or "Please enter a valid email address"
- **Phone**: "Please enter a valid phone number"
- **Description**: "Project description is required" or "Description must be at least 10 characters"

### Email Sending Errors

- Network errors are caught and displayed as toast notifications
- Server-side validation errors are returned with descriptive messages
- SMTP configuration errors are logged to console

## Development

### Start Development Server

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
pnpm build
```

### Run Production Build

```bash
pnpm start
```

## Testing

### Test Form Submission

1. Fill out all required fields in the contact form
2. Submit the form
3. Watch for the loading toast
4. Check for success/error toast
5. Verify redirect to thank you page or error message

### Test Email Functionality

1. Set up SMTP environment variables
2. Fill and submit the contact form
3. Check admin email for submission details
4. Check user email for confirmation message

## Troubleshooting

### Email Not Sending

1. **Verify SMTP credentials**
   ```bash
   # Check if credentials are set
   echo $SMTP_HOST
   echo $SMTP_USER
   ```

2. **Check Gmail App Password**
   - Ensure 2FA is enabled
   - Regenerate app password
   - Use the correct 16-character password

3. **Check Server Logs**
   - Look for error messages in terminal
   - Check `console.error` output

4. **Test SMTP Connection**
   - Use an online SMTP tester
   - Verify host, port, and credentials

### Form Validation Not Working

1. Check browser console for validation errors
2. Ensure all required fields are filled
3. Check email format (must contain @)
4. Description must be at least 10 characters

### Toasts Not Appearing

1. Ensure `ToasterProvider` is in layout
2. Check Sonner CSS is loaded
3. Verify `useErrorHandler` hook is used correctly

## Dependencies

- **sonner** ^2.0.7 - Toast notifications
- **nodemailer** - Email sending library
- **@types/nodemailer** ^7.0.4 - TypeScript types
- **next** ^16.1.0 - React framework
- **react** ^19.2.3 - UI library
- **tailwindcss** ^4 - Styling

## Security Considerations

1. **Input Sanitization**: All user inputs are sanitized to remove HTML tags
2. **Email Validation**: Regex pattern validates email format
3. **Rate Limiting**: Consider adding rate limiting for production
4. **SMTP Credentials**: Never commit `.env.local` to version control
5. **XSS Protection**: HTML entities are escaped in email templates

## Future Improvements

- [ ] Add rate limiting to prevent spam
- [ ] Add CAPTCHA verification
- [ ] Add file upload capability
- [ ] Add email queue system for reliability
- [ ] Add retry logic for failed emails
- [ ] Add admin notification panel
- [ ] Add form analytics tracking

## Support

For issues or questions, contact: info@miqconstruct.com
