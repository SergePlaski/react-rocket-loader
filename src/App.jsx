import { useEffect, useState } from "react";
import { LoadingRocket } from "./LoadingRocket";

const LOADER_DELAY = 3000;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), LOADER_DELAY);

    // clean-up: reset timeout
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="app-container">
      {isLoading ? (
        <LoadingRocket />
      ) : (
        <div className="content-container">
          {Array.from({ length: 9 }, (_, index) => (
            <div className="content-block" key={index}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam praesentium non fugiat odio aliquid, nisi quia veniam?
              Maiores exercitationem nesciunt veniam reiciendis nisi a suscipit
              aliquam illo, optio similique dicta ut? Provident ad,
              reprehenderit quibusdam unde repudiandae enim.
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
