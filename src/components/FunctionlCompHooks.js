import React, { useState } from 'react';

// "State" in a Functional Component
const Counter = () => {
                        // "InitialState"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        <b>Count: {count}</b>
      </p>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>
    </div>
  )
};

export default Counter;