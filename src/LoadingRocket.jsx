import { useEffect, useState } from "react";

// Displays an animated rocket (CSS) 
// and "Loading..." text (with animated dots):  
// Some (or all) dots are styles invisible to maintain 
// the total string length constant and prevent it's repositioning.
export function LoadingRocket() {
  const [dots, setDots] = useState(3);

  useEffect(() => {
    const interval = setInterval(
      () => setDots(prevDots => setDots(prevDots < 3 ? prevDots + 1 : 0)),
      300
    );

    // cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader_container">
      <span className="rocket" />
      <p className="loader_message">
        <span>Loading Data</span>
        {Array.from("...").map((dot, index) => (
          <span
            key={`dot${index}`}
            className={`dot ${index >= dots ? "invisible" : ""}`}
          >
            {dot}
          </span>
        ))}
      </p>
    </div>
  );
}
