 const initialState = {
  days: 10,
  hours: 5,
  minutes: 30,
  seconds: 45,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DECREMENT_TIME":
      let { days, hours, minutes, seconds } = state;

      if (seconds > 0) {
        seconds -= 1;
      } else {
        if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else {
          if (hours > 0) {
            hours -= 1;
            minutes = 59;
            seconds = 59;
          } else {
            if (days > 0) {
              days -= 1;
              hours = 23;
              minutes = 59;
              seconds = 59;
            }
          }
        }
      }

      return { days, hours, minutes, seconds };
    default:
      return state;
  }
};

export const decrementTime = () => ({ type: "DECREMENT_TIME" });

export default timerReducer;
