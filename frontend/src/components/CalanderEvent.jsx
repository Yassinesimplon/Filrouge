import React, {useState} from 'react';



function CalanderEvent({ event }) {

    const [showDetails, setShowDetails] = useState(false);
  
    function handleClick() {
      setShowDetails(!showDetails);
    }
  
    return (
      <div>
        <div onClick={handleClick}>
          <p>{event.title}</p>
          <p>{event.date}</p>
        </div>
        {showDetails && (
          <div>
            <p><strong>Type :</strong> {event.type}</p>
          </div>
        )}
      </div>
    );
  }

  export default CalanderEvent;