import { useState, useEffect, useRef } from "react";

function Typewriter({ text, speed = 60 }) {
  const [displayed, setDisplayed] = useState("");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    let index = 0;
    const interval = setInterval(() => {
      index++;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);
  }, [text, speed]);

  return <span>{displayed}</span>;
}

export default Typewriter;