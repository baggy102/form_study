// TODO: useState 불러오기
import { useState, useRef } from 'react';

const Prob2 = () => {
  const [inputWriter, setInputWriter] = useState(''); // 작성자 input state
  const [inputTitle, setInputTitle] = useState(''); // 제목 input state
  const [comment, setComment] = useState([
    {
      id: 1,
      writer: '민수',
      title: '안뇽',
    },
    {
      id: 2,
      writer: '지민',
      title: '하이하이',
    },
    {
      id: 3,
      writer: '희수',
      title: '멋쟁이',
    },
  ]); // 댓글 목록 배열 state
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  // input 빈값 검사 여부
  const checkInputValue = () => {
    if (inputWriter.trim().length === 0) {
      inputRef1.current.focus();
      return false;
    }
    if (inputTitle.trim().length === 0) {
      inputRef2.current.focus();
      return false;
    }

    return true;
  };

  const addComment = () => {
    if (!checkInputValue()) return; // false
    console.log(inputWriter);
    const newComment = comment.concat({ id: comment.length + 1, writer: inputWriter, title: inputTitle });
    setComment(newComment);
    setInputWriter('');
    setInputTitle('');
  };

  return (
    <div>
      <form>
        <label htmlFor="writer">작성자:</label>
        <input id="writer" type="text" name="writer" value={inputWriter} onChange={(e) => setInputWriter(e.target.value)} ref={inputRef1} />
        <label htmlFor="title">제목:</label>
        <input id="title" type="text" name="title" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} ref={inputRef2} />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <table border={1} style={{ margin: '30px auto', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((obj) => (
            <tr key={obj.id}>
              <th>{obj.id}</th>
              <th>{obj.title}</th>
              <th>{obj.writer}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Prob2;
