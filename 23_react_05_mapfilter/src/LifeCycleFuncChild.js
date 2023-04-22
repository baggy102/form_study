import { useEffect, useState } from 'react';
// 자식 컴포넌트
const LifeCycleFuncCh = (props) => {
  console.log('props >>>', props); // {number : 5}
  const { number } = props; // 5
  const [text, setText] = useState('');

  //   useEffect(() => {
  //     // mount 시점에 실행
  //     console.log('mount');

  //     return () => {
  //       // unmount 시점에 실행
  //       console.log('unmount');
  //     };
  //   }, []);

  //   useEffect(() => {
  //     console.log('mount or update!!!!!!!!!!!!');
  //   });

  useEffect(() => {
    console.log('update');
  }, [text]);

  return (
    <>
      <p>LifeCycleFuncChild {number}</p>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
};

export default LifeCycleFuncCh;
