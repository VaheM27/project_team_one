import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementTime } from "../../Store/timerSlice";

import "./Timer.scss";

const Timer = () => {
  const dispatch = useDispatch();
  const { days, hours, minutes, seconds } = useSelector((state) => state.timer);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      dispatch(decrementTime());
      console.log({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [dispatch, days, hours, minutes, seconds]);

  return (
    <div className="timer">
      <div className="time-box">
        <span>{days}</span>
        <span>Days</span>
      </div>
      <div className="time-box">
        <span>{hours}</span>
        <span>Hours</span>
      </div>
      <div className="time-box">
        <span>{minutes}</span>
        <span>Minutes</span>
      </div>
      <div className="time-box">
        <span>{seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default Timer;
