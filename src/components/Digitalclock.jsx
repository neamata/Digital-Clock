import { useState, useEffect } from "react";


const Digitalclock = () => {
  const [ time, setTime ] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);
  return (
    <>
      <div className='clock-container'>
        <div className='cover'></div>
        <p className='date'>{time.toDateString()}</p>
        <div className='time'>
          <span className='clock'>{time.getHours()}:</span>
          <span className='clock'>{time.getMinutes()}:</span>
          <span className='secs'>{time.getSeconds()}</span>
        </div>
        <p className='date'>{time.toLocaleTimeString()}</p>
      </div>
    </>
  );
}

export default Digitalclock;