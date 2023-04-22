import { useState } from 'react';

// [version 1]
// const Alphabet = () => {
//   const [alphabet, setAlphabet] = useState(['a', 'p', 'p', 'l', 'e']);

//   console.log(alphabet);

//   return (
//     <>
//       <ol>
//         {alphabet.map((value, idx) => (
//           <li key={idx}>{value}</li> //  {return} 생략, ()로 표현
//         ))}
//       </ol>
//     </>
//   );
// };

const Alphabet = () => {
  // alphabet state: 리스트에 대한 상태
  const [alphabet, setAlphabet] = useState([
    { id: 1, alpha: 'a' },
    { id: 2, alpha: 'p' },
    { id: 3, alpha: 'p' },
    { id: 4, alpha: 'l' },
    { id: 5, alpha: 'e' },
  ]);
  // inputAlpha state : input 에 넣는 값에 대한 상태
  const [inputAlpha, setInputAlpha] = useState('');
  console.log(alphabet);

  const addAlpha = () => {
    // 빈값 입력시 추가되지 않도록
    // 공백만 입력되도라도 추가되면 안됨
    if (inputAlpha.trim().length === 0) return; // 0인 경우 조기 리턴
    // concat(): 인자로 주어진 값을 기존 배열에 합쳐서 새로운 배열을 반환
    const newAlphabet = alphabet.concat({ id: alphabet.length + 1, alpha: inputAlpha });
    setAlphabet(newAlphabet);
    setInputAlpha('');
  };

  const deleteAlpha = (id) => {
    // filter()
    // 콜백함수의 테스트를 통과하는 모든 요소를 모아서 "새로운 배열" 반환
    // true 요소 유지, false 요소 버림
    // => alphabet state 에서 매개변수로 받아오는 id와
    // 배열 각 원소의 id 값이 같은 경우 빼고 나머지 모두 새로운 배열에 저장
    const newAlpha = alphabet.filter((obj) => obj.id !== id);
    setAlphabet(newAlpha);
  };

  const activeEnter = (e) => {
    if (e.key === 'enter') {
      addAlpha();
    }
  };

  return (
    <>
      <input type="text" value={inputAlpha} onChange={(e) => setInputAlpha(e.target.value)} onKeyDown={(e) => activeEnter(e)} />
      <button onClick={addAlpha}>추가</button>
      <ol>
        {alphabet.map((obj) => (
          <li key={obj.id} onDoubleClick={() => deleteAlpha(obj.id)}>
            {obj.alpha}
          </li> //  {return} 생략, ()로 표현
        ))}
      </ol>
    </>
  );
};

export default Alphabet; // 다른 컴포넌트에서 Alphabet 쓸 수 있도록 내보내기
