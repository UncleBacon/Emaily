import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function ShowCount(){
    
    if (count > 0) {
    return <p>{count}</p>;
  }
}


  return (
    <>
      <div>
        <ShowCount/>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add one
        </button>
      </div>
      <div>
        <button onClick={() => setCount(0)}>Reset Counter</button>
      </div>
    </>
  );
}

export default Counter;
