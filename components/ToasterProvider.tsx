'use client';

import { Toaster } from 'sonner';

export default function ToasterProvider() {
  return (
    <Toaster
      position="bottom-right"
      richColors
      closeButton
      theme="dark"
      style={{
        fontFamily: 'inherit',
      }}
      toastOptions={{
        style: {
          background: '#1f2937',
          color: '#f3f4f6',
          border: '1px solid #374151',
        },
        classNames: {
          toast: 'bg-gray-800 text-gray-100',
          error: 'bg-red-900 text-red-100 border-red-800',
          success: 'bg-green-900 text-green-100 border-green-800',
          warning: 'bg-yellow-900 text-yellow-100 border-yellow-800',
          info: 'bg-blue-900 text-blue-100 border-blue-800',
          loading: 'bg-gray-700 text-gray-100 border-gray-600',
        },
      }}
    />
  );
}
