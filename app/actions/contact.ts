'use server';

import nodemailer from 'nodemailer';

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
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      // Send email to admin
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL || 'info@miqconstruct.com',
        replyTo: formData.Email,
        subject: `New Contact Form Submission from ${formData.Name}`,
        text: emailBody,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3D2B1F;">Contact Form Submission from Rukan Construction Website</h2>
            <div style="background-color: #F9F4EC; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${formData.Name}</p>
              <p><strong>Company/Organization:</strong> ${formData.Company || 'Not provided'}</p>
              <p><strong>Email:</strong> ${formData.Email}</p>
              <p><strong>Phone:</strong> ${formData.Phone || 'Not provided'}</p>
              <p><strong>Project Location:</strong> ${formData.Location || 'Not provided'}</p>
              <p><strong>Project Type:</strong> ${formData.Type || 'Not selected'}</p>
              <h3 style="margin-top: 15px;">Project Description:</h3>
              <p style="white-space: pre-wrap;">${(formData.Description || 'No description provided').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            </div>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px;">
              <em>This message was submitted through rukanconstruction.com</em>
            </p>
          </div>
        `,
      });

      // Send confirmation email to user
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: formData.Email,
        subject: 'We received your message - Rukan Construction',
        text: `Hi ${formData.Name},\n\nThank you for contacting Rukan Construction. We've received your message and our team will review your project details and follow up with you shortly.\n\nBest regards,\nThe Rukan Construction Team`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3D2B1F;">Thank you for contacting Rukan Construction</h2>
            <p>Hi ${formData.Name},</p>
            <p>We've received your message and appreciate you reaching out. Our team will review your project details and follow up with you shortly.</p>
            <div style="background-color: #F9F4EC; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Project Details:</strong></p>
              <p style="white-space: pre-wrap;">${(formData.Description || 'No description provided').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            </div>
            <div style="margin: 20px 0; padding: 20px; background-color: #3D2B1F; color: #F9F4EC; border-radius: 8px;">
              <p><strong>Contact Information</strong></p>
              <p>Rukan Construction<br/>
              13330 Noel Rd, Apt 625<br/>
              Dallas, Texas 75240</p>
              <p>Phone: 972 342 3789<br/>
              Email: info@miqconstruct.com</p>
            </div>
            <p style="color: #666; font-size: 12px;">
              Best regards,<br/>
              The Rukan Construction Team
            </p>
          </div>
        `,
      });
    } else {
      // Fallback: Log to console if email service not configured
      console.warn('Email configuration not found. Please set SMTP environment variables.');
      console.log('Form data:', formData);
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
