import axios from 'axios';

const waitlistApi = axios.create({
  baseURL: 'https://waitlist-api-j29t.onrender.com',
  timeout: 8000, 
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

waitlistApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout. The server is taking too long to respond.');
    }
    if (error.message.includes('Network Error')) {
      throw new Error('Network error. Please check your connection.');
    }
    throw error;
  }
);

export async function joinWaitlist(email: string): Promise<{ 
  success: boolean; 
  message?: string;
}> {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: 'Please enter a valid email address.'
      };
    }

    const response = await waitlistApi.post('/waitlist', { email });
    
    return {
      success: true,
      message: 'Thank you! You have been added to our waitlist.'
    };
    
  } catch (error: any) {
    if (error.message.includes('timeout') || error.message.includes('Request timeout')) {
      return {
        success: false,
        message: 'Server is taking too long to respond. Please try again in a moment.'
      };
    }
    
    if (error.response) {
      switch (error.response.status) {
        case 409:
          return {
            success: false,
            message: 'This email is already on our waitlist.'
          };
        case 400:
        case 422:
          return {
            success: false,
            message: 'Please enter a valid email address.'
          };
        default:
          return {
            success: false,
            message: 'Server error. Please try again later.'
          };
      }
    }
    
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.'
    };
  }
}