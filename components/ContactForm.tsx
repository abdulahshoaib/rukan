'use client';

import { useState } from 'react';
import { sendContactEmail } from '@/app/actions/contact';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { validateFormData, sanitizeInput } from '@/lib/validation';

interface ContactFormProps {
  onSubmit?: () => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFieldErrors({});

    try {
      const formData = new FormData(e.currentTarget);
      
      const data = {
        Name: sanitizeInput(formData.get('Name') as string),
        Company: sanitizeInput(formData.get('Company') as string),
        Email: sanitizeInput(formData.get('Email') as string),
        Phone: sanitizeInput(formData.get('Phone') as string),
        Location: sanitizeInput(formData.get('Location') as string),
        Type: formData.get('Type') as string,
        Description: sanitizeInput(formData.get('Description') as string),
      };

      // Validate all fields
      const validation = validateFormData(data);
      
      if (!validation.valid) {
        setFieldErrors(validation.errors);
        const firstError = Object.values(validation.errors)[0];
        toast.error(firstError || 'Please check the form for errors');
        setIsLoading(false);
        return;
      }

      const toastId = toast.loading('Sending your message...');

      const result = await sendContactEmail(data);

      if (result.success) {
        toast.dismiss(toastId);
        toast.success('Message sent successfully! Redirecting...');
        setFieldErrors({});
        
        if (onSubmit) {
          onSubmit();
        }
        
        // Redirect to thank you page after a short delay
        setTimeout(() => {
          router.push('/thank-you');
        }, 1500);
      } else {
        toast.dismiss(toastId);
        toast.error(result.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFieldChange = (fieldName: string) => {
    // Clear error for this field when user starts typing
    setFieldErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#F2E9DA] rounded-3xl border border-slate-100 shadow-sm p-6 space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="Name"
            onChange={() => handleFieldChange('Name')}
            className={`w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brandbrown focus:border-brandbrown transition-colors ${
              fieldErrors.Name 
                ? 'border-red-500 bg-red-50' 
                : 'border-slate-200'
            }`}
            required
            disabled={isLoading}
          />
          {fieldErrors.Name && <p className="text-red-500 text-xs mt-1">{fieldErrors.Name}</p>}
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Company or organization</label>
          <input
            type="text"
            name="Company"
            className={`w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brandbrown focus:border-brandbrown transition-colors ${
              'border-slate-200'
            }`}
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="Email"
            onChange={() => handleFieldChange('Email')}
            className={`w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brandbrown focus:border-brandbrown transition-colors ${
              fieldErrors.Email 
                ? 'border-red-500 bg-red-50' 
                : 'border-slate-200'
            }`}
            required
            disabled={isLoading}
          />
          {fieldErrors.Email && <p className="text-red-500 text-xs mt-1">{fieldErrors.Email}</p>}
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Phone</label>
          <input
            type="tel"
            name="Phone"
            onChange={() => handleFieldChange('Phone')}
            className={`w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brandbrown focus:border-brandbrown transition-colors ${
              fieldErrors.Phone 
                ? 'border-red-500 bg-red-50' 
                : 'border-slate-200'
            }`}
            disabled={isLoading}
          />
          {fieldErrors.Phone && <p className="text-red-500 text-xs mt-1">{fieldErrors.Phone}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Project location</label>
          <input
            type="text"
            name="Location"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brandbrown focus:border-brandbrown"
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Project type</label>
          <select
            name="Type"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm bg-brandcream focus:outline-none focus:ring-2 focus:ring-brandbrown focus:border-brandbrown"
            disabled={isLoading}
          >
            <option value="">Select a type</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-600 mb-1">
          Brief description <span className="text-red-500">*</span>
        </label>
        <textarea
          name="Description"
          rows={4}
          onChange={() => handleFieldChange('Description')}
          className={`w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brandbrown focus:border-brandbrown transition-colors ${
            fieldErrors.Description 
              ? 'border-red-500 bg-red-50' 
              : 'border-slate-200'
          }`}
          placeholder="Tell us a little about scope, schedule, and what you need help with."
          required
          disabled={isLoading}
        />
        {fieldErrors.Description && <p className="text-red-500 text-xs mt-1">{fieldErrors.Description}</p>}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-auto px-5 py-3 rounded-full text-sm font-semibold bg-brandbrown text-brandcream hover:bg-black shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Sending...' : 'Send message'}
      </button>

      <p className="text-[11px] text-slate-600 mt-2">
        Submissions from this form are sent to <span className="font-semibold">info@miqconstruct.com</span>.
      </p>
    </form>
  );
}
