import { useState } from "react";

const useCounter = (initialValue = 1, max = 10, min = 1) => {
    const [count, setCount] = useState(initialValue);
    const [add, setAdd] = useState(initialValue);
    const increment = () => {
        if (count < max) {
            setCount(count + 1);
            onAdd(count + 1);
        }
    };
    const decrement = () => {
        if (count > min) {
            setCount(count - 1);
            onAdd(count - 1);
        }
    };

    const onAdd = (count) => {
        setAdd(count);
    };

    return {
        increment,
        decrement,
        count,
        add,
    };
};

export default useCounter;