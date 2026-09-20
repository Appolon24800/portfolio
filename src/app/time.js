import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("fr-FR", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Europe/Paris",
});

const Time = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return <h4>France, Marseille - {time}</h4>;
};

export default Time;
