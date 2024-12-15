import { useEffect, useState } from "react";
import { LoadingRocket } from "./LoadingRocket";

const LOADER_DELAY = 2000;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), LOADER_DELAY);
    // clean-up: reset timeout
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Add a delay to ensure content is rendered before transition
      // requestAnimationFrame is a browser API function 
      // and is more efficient than setTimeout for animations.
      requestAnimationFrame(() => setIsMounted(true));
    }
  }, [isLoading]);

  return (
    <div className="app-container">
      {isLoading ? (
        <LoadingRocket />
      ) : (
        <div className={`content ${isMounted ? 'mounted' : ''}`}>
          {Array.from({ length: 9 }, (_, index) => (
            <div className="content-block" key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
