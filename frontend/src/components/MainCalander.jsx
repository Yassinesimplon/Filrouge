import React from 'react';
import CalanderEvent from './CalanderEvent';
import importantDates from '../Data/ImportantDates'



function CalandarPage() {
    return (
      <div className='cal' >
        <h1 >Calendar</h1>
        <p>Click on an event to view more details.</p>
        {importantDates.map((event, index) => (
          <CalanderEvent key={index} event={event} />
        ))}
      </div>
    );
  }
  export default CalandarPage;