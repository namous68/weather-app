import React from 'react';
import '../App.css';

function Day({ weatherData, setSelectedDay, selectedDay  }) {
  const boldTextStyle = {
    fontWeight: 'bold',
  };

  const days =['thusday', 'friday', 'saturday'];
  
  const handleClickDay =(dayIndex)=>{
    setSelectedDay(dayIndex);

  }


  return (
    <>
    
        
      
    {days.map((day, index) => (
        <a
          key={index}
          href="#"
          style={boldTextStyle}
          className={selectedDay === index ? 'clickedDay' : ''}
          onClick={() => {
            handleClickDay(index);
          }}
        >
          {day}
          </a>
        ))}
    
    </>
  )

}

export default Day;
