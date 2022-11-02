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
        <h1>{clock}</h1>
        <h1>{present}</h1>
      </div>
    </StyledTimer>
  );
}

export default Timer;
