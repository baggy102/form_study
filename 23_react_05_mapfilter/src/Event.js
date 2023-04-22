import { useState } from 'react';

const Event = () => {
  const [user, setUser] = useState([
    { id: 1, name: '코디', email: 'codi@gmail.com' },
    { id: 2, name: '윤소희', email: 'yoonsohee@gmail.com' },
  ]);

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const addUser = () => {
    // 빈값 입력시 추가되지 않도록
    // 공백만 입력되도라도 추가되면 안됨
    // concat(): 인자로 주어진 값을 기존 배열에 합쳐서 새로운 배열을 반환
    const newUser = user.concat({ id: user.length + 1, name: inputName, email: inputEmail });
    setUser(newUser);
    setInputName('');
    setInputEmail('');
  };

  const activeEnter = (e) => {
    console.log('enter!!', e.key);
    if (e.key === 'Enter') {
      addUser();
    }
  };

  const deleteUser = (id) => {
    const newUserInfo = user.filter((obj) => obj.id !== id);
    setUser(newUserInfo);
  };

  return (
    <>
      <input type="text" placeholder="이름" value={inputName} onChange={(e) => setInputName(e.target.value)} />
      <input type="text" placeholder="이메일" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} onKeyDown={(e) => activeEnter(e)} />
      <button onClick={addUser}>등록</button>
      <ol>
        {user.map((obj) => (
          <li key={obj.id} onDoubleClick={() => deleteUser(obj.id)}>
            {obj.name} : {obj.email}
          </li> //  {return} 생략, ()로 표현
        ))}
      </ol>
    </>
  );
};

export default Event;
