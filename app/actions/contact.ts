'use server';

interface ContactFormData {
  Name: string;
  Company: string;
  Email: string;
  Phone: string;
  Location: string;
  Type: string;
  Description: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Validate form data
    if (!formData.Name || !formData.Email) {
      return {
        success: false,
        message: 'Name and email are required',
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.Email)) {
      return {
        success: false,
        message: 'Please enter a valid email address',
      };
    }

    // Format the email body
    const emailBody = `
Contact Form Submission from Rukan Construction Website

Name: ${formData.Name}
Company/Organization: ${formData.Company || 'Not provided'}
Email: ${formData.Email}
Phone: ${formData.Phone || 'Not provided'}
Project Location: ${formData.Location || 'Not provided'}
Project Type: ${formData.Type || 'Not selected'}

Project Description:
${formData.Description || 'No description provided'}

---
This message was submitted through rukanconstruction.com
    `;

    // Send via Nodemailer (configured with environment variables)
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
      const nodemailer = require('nodemailer');

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL || 'info@miqconstruct.com',
        replyTo: formData.Email,
        subject: `New Contact Form Submission from ${formData.Name}`,
        text: emailBody,
        html: `
          <h2>Contact Form Submission from Rukan Construction Website</h2>
          <p><strong>Name:</strong> ${formData.Name}</p>
          <p><strong>Company/Organization:</strong> ${formData.Company || 'Not provided'}</p>
          <p><strong>Email:</strong> ${formData.Email}</p>
          <p><strong>Phone:</strong> ${formData.Phone || 'Not provided'}</p>
          <p><strong>Project Location:</strong> ${formData.Location || 'Not provided'}</p>
          <p><strong>Project Type:</strong> ${formData.Type || 'Not selected'}</p>
          <h3>Project Description:</h3>
          <p>${(formData.Description || 'No description provided').replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>This message was submitted through rukanconstruction.com</em></p>
        `,
      });
    } else {
      // Fallback: Log to console if email service not configured
      console.log('Email configuration not found. Form data:', formData);
    }

    return {
      success: true,
      message: 'Message sent successfully! We will get back to you soon.',
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again later.',
    };
  }
}
