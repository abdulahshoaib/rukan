'use server';

import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  location?: string;
  type?: string;
  description?: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Validate required fields
    if (!data.name || !data.email || !data.description) {
      return {
        success: false,
        error: 'Please fill in all required fields',
      };
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to admin
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3D2B1F;">New Contact Form Submission - Rukan Construction</h2>
        <div style="background-color: #F9F4EC; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${data.name}</p>
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
          ${data.location ? `<p><strong>Project Location:</strong> ${data.location}</p>` : ''}
          ${data.type ? `<p><strong>Project Type:</strong> ${data.type}</p>` : ''}
          <p><strong>Description:</strong></p>
          <p style="white-space: pre-wrap;">${data.description}</p>
        </div>
        <p style="color: #666; font-size: 12px;">
          This email was sent from the Rukan Construction website contact form.
        </p>
      </div>
    `;

    // Email to user
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3D2B1F;">Thank you for contacting Rukan Construction</h2>
        <p>Hi ${data.name},</p>
        <p>We've received your message and appreciate you reaching out. Our team will review your project details and follow up with you shortly.</p>
        <div style="background-color: #F9F4EC; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Project Details:</strong></p>
          <p>${data.description}</p>
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
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${data.name}`,
      html: adminEmailHtml,
      replyTo: data.email,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: data.email,
      subject: 'We received your message - Rukan Construction',
      html: userEmailHtml,
    });

    return {
      success: true,
      message: 'Your message has been sent successfully',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      error: 'Failed to send email. Please try again later.',
    };
  }
}
