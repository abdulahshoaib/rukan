'use client';

import { useCallback } from 'react';
import { toast } from 'sonner';

interface UseErrorHandlerOptions {
  showToast?: boolean;
  logError?: boolean;
}

export function useErrorHandler(options: UseErrorHandlerOptions = {}) {
  const { showToast = true, logError = true } = options;

  const handleError = useCallback(
    (error: unknown, context?: string) => {
      let errorMessage = 'An unexpected error occurred';

      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }

      if (logError) {
        console.error(`[${context || 'Error'}]`, error);
      }

      if (showToast) {
        toast.error(errorMessage);
      }

      return errorMessage;
    },
    [showToast, logError]
  );

  const handleSuccess = useCallback(
    (message: string) => {
      toast.success(message);
    },
    []
  );

  const handleWarning = useCallback(
    (message: string) => {
      toast.warning(message);
    },
    []
  );

  const handleInfo = useCallback(
    (message: string) => {
      toast.info(message);
    },
    []
  );

  const handleLoading = useCallback(
    (message: string) => {
      return toast.loading(message);
    },
    []
  );

  const dismissToast = useCallback(
    (toastId: string | number) => {
      toast.dismiss(toastId);
    },
    []
  );

  return {
    handleError,
    handleSuccess,
    handleWarning,
    handleInfo,
    handleLoading,
    dismissToast,
  };
}
