import React, { useEffect, useState } from 'react';
import { InlineWidget } from 'react-calendly';
import { getEvents } from './CalendlyService';

const CalendlyComponent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data.collection);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <InlineWidget url="https://calendly.com/your_scheduling_page" />
      <h2>Upcoming Events:</h2>
      <ul>
        {events.map(event => (
          <li key={event.uri}>{event.name} - {new Date(event.start_time).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default CalendlyComponent;