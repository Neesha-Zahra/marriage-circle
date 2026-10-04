import { useState, useEffect, useRef } from "react";

function Counter({ target, duration = 4000 })   {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime = null;

    const animate = (timestamp) => {
  if (!startTime) startTime = timestamp;
  const progress = Math.min((timestamp - startTime) / duration, 1);
  const power = target <= 20 ? 2 : 4;
const eased = 1 - Math.pow(1 - progress, power);
  setCount(Math.floor(eased * target));

  if (progress < 1) {
    requestAnimationFrame(animate);
  } else {
    setCount(target);
  }
};
    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{count}+</span>;
}

export default Counter;