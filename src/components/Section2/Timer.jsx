import React, { useReducer, useEffect } from 'react';
import styles from './Timer.module.scss';

const initialState = {
  days: 10,
  hours: 6,
  minutes: 23,  // Start with 1 minute for testing
  seconds: 56,
};


const reducer = (state) => {
  if (state.seconds > 0) {
    return { ...state, seconds: state.seconds - 1 };
  }
  if (state.minutes > 0) {
    return { ...state, seconds: 59, minutes: state.minutes - 1 };
  }
  if (state.hours > 0) {
    return { ...state, seconds: 59, minutes: 59, hours: state.hours - 1 };
  }
  if (state.days > 0) {
    return { ...state, seconds: 59, minutes: 59, hours: 23, days: state.days - 1 };
  }
  return state;
};

const Timer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const timerItems = [
    state.days,
    state.hours,
    state.minutes,
    state.seconds,
  ];

  return (
    <div className={styles.timerContainer}>
      {timerItems.map((item, index) => (
        <div key={index} className={styles.timerBox}>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default Timer;
