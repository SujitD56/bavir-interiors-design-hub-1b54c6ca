import { useCallback } from 'react';

// IMPORTANT: Replace this with your Google Apps Script Web App URL after deployment
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyn3WijdIu75MrMrbILjbBRCQMf6dBR9uwBEeB2KbpRwwTzUbInNZdhSAsRL1mbNDRn5Q/exec';

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  projectType?: string;
  message?: string;
  source?: string; // e.g., 'Contact Form', 'Start Project Button'
}

export function useLeadTracking() {
  const logLead = useCallback(async (data: LeadData) => {
    // Only attempt to send if a URL is provided
    if (!GOOGLE_SCRIPT_URL) {
      console.warn('Lead Tracking: Google Script URL not set. Data:', data);
      return;
    }

    try {
      // We use 'no-cors' mode for Google Scripts to avoid preflight issues
      // Note: This means we won't get a response body, but the data will be sent.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toLocaleString(),
        }),
      });
      console.log('Lead Tracking: Data sent successfully');
    } catch (error) {
      console.error('Lead Tracking Error:', error);
    }
  }, []);

  return { logLead };
}
