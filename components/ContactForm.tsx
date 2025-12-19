'use client';

import { useState } from 'react';
import { sendContactEmail } from '@/app/actions/contact';
import { useRouter } from 'next/navigation';

interface ContactFormProps {
  onSubmit?: () => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        Name: formData.get('Name') as string,
        Company: formData.get('Company') as string,
        Email: formData.get('Email') as string,
        Phone: formData.get('Phone') as string,
        Location: formData.get('Location') as string,
        Type: formData.get('Type') as string,
        Description: formData.get('Description') as string,
      };

      const result = await sendContactEmail(data);

      if (result.success) {
        setSuccess(true);
        if (onSubmit) {
          onSubmit();
        }

        // Redirect to thank you page after a short delay
        setTimeout(() => {
          router.push('/thank-you');
        }, 1000);
      } else {
        setError(result.message || 'Failed to send message');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#F2E9DA] rounded-3xl border border-slate-100 shadow-sm p-6 space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          Message sent successfully! Redirecting...
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Name</label>
          <input
            type="text"
            name="Name"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brandbrown focus:border-brandbrown"
            required
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Company or organization</label>
          <input
            type="text"
            name="Company"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brandbrown focus:border-brandbrown"
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Email</label>
          <input
            type="email"
            name="Email"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brandbrown focus:border-brandbrown"
            required
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Phone</label>
          <input
            type="tel"
            name="Phone"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brandbrown focus:border-brandbrown"
            disabled={isLoading}
          />
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
        <label className="block text-xs font-medium text-slate-600 mb-1">Brief description</label>
        <textarea
          name="Description"
          rows={4}
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brandbrown focus:border-brandbrown"
          placeholder="Tell us a little about scope, schedule, and what you need help with."
          disabled={isLoading}
        />
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
