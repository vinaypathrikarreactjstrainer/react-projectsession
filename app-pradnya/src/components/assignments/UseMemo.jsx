import React, { useMemo, useState } from "react";

const UseMemo = () => {
    // States
    const [count, setCount] = useState(1);
    const [item, setItem] = useState(5);

    // functions
    const handleCount = () => {
        console.log('inside the handleCount func.');
        setCount(count + 1);
    }

    // const pradnya = () => {
    //     console.log('inside the pradnya function');
    //     return count * 2;
    // }

    const useMemoPradyna = useMemo(() => {
        console.log('inside the pradnya function');
        return count * 2;
    }, [count]);

    console.log('UseMemo Component');
    return (
        <>
            <h1>Use Memo Component</h1>
            <h2>Count : {count}</h2>
            <h2>Item : {item}</h2>
            {/* <h2>{pradnya()}</h2> */}
            <h2>{useMemoPradyna}</h2>
            <button type="button"
                onClick={() => handleCount()}
            >Count++</button>
            <button type="button"
                onClick={() => setItem(item * 2)}
            >Update Item</button>
        </>
    )
}

export default UseMemo