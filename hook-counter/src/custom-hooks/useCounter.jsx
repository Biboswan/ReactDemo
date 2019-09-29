import React, {useState, useCallback} from "react";

const useCounter = (initialCounter) => {
    const [counter, setCounter] = useState(initialCounter);
    const incrementCount = useCallback(() => {
        setCounter(counter => counter +1);
    }, [setCounter]);
    return [counter, incrementCount];
}

export default useCounter;