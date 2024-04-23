import { useEffect } from "react";
import PropTypes from 'prop-types';



function Timer({ time, setTime, anim , setAnim}) {
  useEffect(() => {
    if (time !== 0) {
      const interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }

    if(time <= 0){
        setAnim("not-animated")
    }

    return () => {};
  });

  return (
    <>
      {/* <h3 className="times-up">{time !== 0 ? time : "Times up !"}</h3> */}

      <div
        className={`round-time-bar ${anim}`}
        data-style="smooth"
        style={{ duration: 5 }}
      >
        <div />
      </div>
    </>
  );
}

Timer.propTypes = {
    time: PropTypes.number.isRequired,
    setTime: PropTypes.isRequired,
    anim: PropTypes.string.isRequired,
    setAnim: PropTypes.isRequired
}

export default Timer;
