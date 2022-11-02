import StyledTimer from './Timer.styled';
import { useEffect, useState } from 'react';

function Timer() {
  const [clock, setClock] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);

  const dayToday = new Date();
  const present = dayToday.toLocaleDateString();

  return (
    <StyledTimer>
      <div>
        <p>{present}</p>
        <p>{clock}</p>
      </div>
    </StyledTimer>
  );
}

export default Timer;
