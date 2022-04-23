import { useEffect, useState } from "react";

const useCounter = (forwards: boolean = true) => {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
      const interval = setInterval(() => 
        setCounter((prevCounter) => forwards ? prevCounter + 1 : prevCounter - 1)
      , 1000);
  
      return () => clearInterval(interval);
    }, [forwards]);

    return counter;
};

export default useCounter;