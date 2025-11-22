import { useState, useEffect } from 'react';
import World from './components/World';

function App() {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events');
        const { events } = await response.json();
        setEventData(events);
        // console.log('Event Data:', events);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
      <World eventData={eventData} />
  );
}

export default App;
