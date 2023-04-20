import { useState } from 'react';

function Text() {
  let [show, setShow] = useState(true);
  const remove = () => {
    setShow(!show);
  };
  return (
    <>
      {show && <div>안녕하세요</div>}
      {!show && <button onClick={remove}>보여라</button>}
      {show && <button onClick={remove}>없어져라</button>}
    </>
  );
}

export default Text;
