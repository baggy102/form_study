import PropTypes from 'prop-types';
import { useState } from 'react';

function FunctionComponent2() {
  const [counter, setCounter] = useState(0);
  const Increase = () => {
    setCounter(counter + 1);
  };

  const Decrease = () => {
    setCounter(counter - 2);
  };

  return (
    <div>
      <h5>{counter}</h5>
      <button onClick={Increase}>+1</button>
      <button onClick={Decrease}>-2</button>
    </div>
  );
}

export default FunctionComponent2;
