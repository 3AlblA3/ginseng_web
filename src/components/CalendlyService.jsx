import axios from 'axios';

// Import de calendly

const calendlyApi = axios.create({
  baseURL: 'https://api.calendly.com',
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_CALENDLY_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

export const getEvents = async () => {
  try {
    const response = await calendlyApi.get('/scheduled_events');
    return response.data;
  } catch (error) {
    console.error('Error fetching Calendly events:', error);
    throw error;
  }
};