import axios from 'axios';

const waitlistApi = axios.create({
  baseURL: 'https://waitlist-api-kh5c.vercel.app',
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

export async function joinWaitlist(formData: {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}): Promise<{ 
  success: boolean; 
  message?: string;
  data?: any;
}> {
  try {
    let formattedPhone = formData.phone.trim();
    
    formattedPhone = formattedPhone.replace(/[^\d+]/g, '');
    
    if (formattedPhone.startsWith('0')) {
      formattedPhone = '+234' + formattedPhone.substring(1);
    }
    else if (/^[789]\d{9}$/.test(formattedPhone)) {
      formattedPhone = '+234' + formattedPhone;
    }
    
    const payload = {
      ...formData,
      phone: formattedPhone
    };
    
    const response = await waitlistApi.post('/waitlist', payload);
    
    return {
      success: true,
      message: 'Thank you! You have been added to our waitlist.',
      data: response.data
    };
    
  } catch (error: any) {
    // Handle timeout
    if (error.message.includes('timeout') || error.message.includes('Request timeout')) {
      return {
        success: false,
        message: 'Server is taking too long to respond. Please try again in a moment.'
      };
    }
    
    if (error.response) {
      // Server responded with error status
      switch (error.response.status) {
        case 409:
          const errorMessage = error.response.data?.detail || 'Already on waitlist';
          if (errorMessage.includes('Phone number')) {
            return {
              success: false,
              message: 'This phone number is already on our waitlist.'
            };
          } else if (errorMessage.includes('email') || errorMessage.includes('Email')) {
            return {
              success: false,
              message: 'This email is already on our waitlist.'
            };
          } else {
            return {
              success: false,
              message: errorMessage
            };
          }
        case 400:
        case 422:
          const errorData = error.response.data;
          let errorMsg = 'Please check your information and try again.';
          
          if (errorData?.detail) {
            if (Array.isArray(errorData.detail) && errorData.detail.length > 0) {
              const firstError = errorData.detail[0];
              errorMsg = firstError.msg || errorMsg;
              
              if (firstError.loc && Array.isArray(firstError.loc)) {
                const field = firstError.loc[firstError.loc.length - 1];
                if (field === 'phone') {
                  errorMsg = 'Please enter a valid Nigerian phone number (e.g., 08012345678 or +2348012345678).';
                } else if (field === 'email') {
                  errorMsg = 'Please enter a valid email address.';
                }
              }
            } else if (typeof errorData.detail === 'string') {
              errorMsg = errorData.detail;
            }
          }
          
          return {
            success: false,
            message: errorMsg
          };
        default:
          return {
            success: false,
            message: `Server error (${error.response.status}). Please try again later.`
          };
      }
    }
    
    // Network error
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.'
    };
  }
}