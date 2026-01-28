// lib/contact-api.ts - CLEAN PRODUCTION VERSION
import axios from 'axios';

const contactApi = axios.create({
  baseURL: 'https://waitlist-api-kh5c.vercel.app',
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function submitContactForm(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<{
  success: boolean;
  message?: string;
  data?: any;
}> {
  try {
    const response = await contactApi.post('/contact', formData);
    
    return {
      success: true,
      message: 'Your message has been sent successfully!',
      data: response.data,
    };
    
  } catch (error: any) {
    return handleContactError(error);
  }
}

function handleContactError(error: any): {
  success: boolean;
  message: string;
} {
  if (error.response) {
    const status = error.response.status;
    const errorData = error.response.data;
    
    // Handle validation errors
    if (status === 422 || status === 400) {
      return {
        success: false,
        message: errorData?.detail || 'Please check your information and try again.',
      };
    }
    
    // Handle server errors
    if (status >= 500) {
      return {
        success: false,
        message: 'Our server is having an issue. Please try again later.',
      };
    }
    
    // Handle other specific errors
    switch (status) {
      case 409:
        return { success: false, message: 'This email has already submitted a message.' };
      case 429:
        return { success: false, message: 'Too many requests. Please try again later.' };
      default:
        return { success: false, message: `Server error (${status}). Please try again.` };
    }
  }
  
  // Handle network/timeout errors
  if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
    return { success: false, message: 'Request timeout. Please try again.' };
  }
  
  // Generic network error
  return {
    success: false,
    message: 'Network error. Please check your connection.',
  };
}
