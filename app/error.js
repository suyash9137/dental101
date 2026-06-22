'use client';

import { useEffect, useState } from 'react';

export default function Error({ error, resetError }) {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Log error for debugging (in production, you might send to error tracking service)
    console.error('Application Error:', error);

    // Extract a user-friendly message
    const message = error.message || 'An unexpected error occurred';
    setErrorMessage(message);
  }, [error, resetError]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-surface-bright">
      <div className="text-center p-8">
        <span className="material-symbols-outlined text-6xl text-primary/20 block mb-6">
          error
        </span>

        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
          Something went wrong
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          {errorMessage}
        </p>

        <button
          onClick={() => {
            resetError();
          }}
          className="font-label-bold text-label-bold bg-primary text-on-primary rounded-full px-8 py-4 hover:bg-primary-container transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          Try Again
        </button>

        <p className="font-body-md text-body-md text-on-surface-variant/60 mt-6">
          If the problem persists, please contact us directly at <a href="tel:+15551234567" className="text-primary underline">(555) 123-4567</a>
        </p>
      </div>
    </div>
  );
}