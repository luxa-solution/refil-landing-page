export async function joinWaitlist(email: string): Promise<{ 
  success: boolean; 
  message?: string;
}> {
  try {
    const response = await fetch('https://waitlist-api-j29t.onrender.com/waitlist', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    
    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        message: 'Thank you! You have been added to our waitlist.'
      };
    }
    
    const errorData = await response.json().catch(() => ({}));
    
    switch (response.status) {
      case 400:
        return {
          success: false,
          message: 'Please enter a valid email address.'
        };
      case 409:
        return {
          success: false,
          message: 'This email is already on our waitlist.'
        };
      case 422:
        return {
          success: false,
          message: 'Please enter a valid email address.'
        };
      default:
        return {
          success: false,
          message: 'Unable to process your request. Please try again.'
        };
    }
    
  } catch (error: any) {
    // Check if it's a CORS error
    if (error.message.includes('Failed to fetch') || error.message.includes('CORS')) {
      return {
        success: false,
        message: 'Unable to connect to the server. Please try again later.'
      };
    }
    
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.'
    };
  }
}