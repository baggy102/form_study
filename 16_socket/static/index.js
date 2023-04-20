// frontend js

// socket 사용을 위해서 객체 생성
let socket = io.connect();

// 나의 닉네임
let myNick;

socket.on('connect', () => {
  console.log('⭕️ Client Socket Connected >> ', socket.id);
});

// [실습1]
// function sayHello() {
//   // clinet -> server 정보 보내기
//   // socket.emit(event, data): 데이터 "전송"
//   // => event 라는 이름으로 data 를 전송
//   socket.emit('hello', { who: 'client', msg: 'hello' });

//   // socket.on(event, callbak): 데이터 "받음"
//   // event에 대해서 정보를 받아 callback 함수 실행
//   socket.on('helloKr', (data) => {
//     const p = document.querySelector('#form-server');
//     p.textContent = `${data.who} : ${data.msg}`;
//   });
// }

// [실습3] 채팅창 입장 안내 문구
socket.on('notice', (msg) => {
  document.querySelector('#chat-list').insertAdjacentHTML('beforeend', `<div class="notice">${msg}</div>`);
});

// [실습3-2]
function entry() {
  console.log(document.querySelector('#nickname').value);
  socket.emit('setNick', document.querySelector('#nickname').value);
}

socket.on('entrySuccess', (nick) => {
  // 1. 내 닉네임 설정
  myNick = nick;

  // 2. 닉네임 입력창 & 버튼 비활성화
  document.querySelector('#nickname').disabled = true; // 입력창 비활성화 (클릭 막기)
  document.querySelector('.entry-box > button').disabled = true; // 버튼 비활성화 (클릭 막기)

  // 3. div.chat-box 요소 보이기
  document.querySelector('.chat-box').classList.remove('d-none');
});

// [실습3-2]
// 닉네임 중복 -> alert 띄우기
socket.on('error', (msg) => {
  alert(msg);
});

// [실습 3-2]
// 닉네임 리스트 객체 업데이트하는 이벤트
socket.on('updateNicks', (obj) => {
  let options = `<option value="all">전체</option>`;

  // select#nick-list 요소의 option 추가
  for (let key in obj) {
    // obj[key] : 유저가 인풋에 입력한 닉네임
    // key : 소켓 아이디
    options += `<option value="${key}">${obj[key]}</option>`;
  }

  console.log(options);

  document.querySelector('#nick-list').innerHTML = options;
});

// [실습4] 채팅창 메세지 전송 step1
// "send" 이벤트 전송 { 닉네임, 입력메세지 }
function send() {
  const data = {
    myNick: myNick,
    dm: document.querySelector('#nick-list').value,
    // => select 태그에서 선택한 option 태그의 value 값
    msg: document.querySelector('#message').value,
  };
  socket.emit('send', data);

  document.querySelector('#message').value = ''; // 인풋 초기화
}

socket.on('newMessage', (data) => {
  console.log('socket on newMessage >>', data);

  // 생성해야할 채팅 구조

  // #chat-list 요소 선택 (파란색 박스 = 메세지 상자)
  let chatList = document.querySelector('#chat-list');

  // .my-chat .orther-chat 요소 생성
  let div = document.createElement('div');

  // 가장 안쪽 div 요소 생성
  let divChat = document.createElement('div');

  // 새 메세지가 도착했는는데, myNick에 저장된 현재 내 닉네임과
  // data의 닉네임이 같다면, 내 채팅으로 보이게 (오른쪽 배치 == .my-chat)
  if (data.nick === myNick) {
    div.classList.add('my-chat');
  } else {
    div.classList.add('other-chat');
  }

  // [실습5] DM 기능
  if (data.dm) {
    // data.dm -> '(속닥속닥)'
    div.classList.add('secret-chat');
    divChat.textContent = data.dm;
  }

  // divChat.textContent = `${data.nick} : ${data.msg}`; // [실습4]
  divChat.textContent = divChat.textContent + `${data.nick} : ${data.msg}`; // [실습5]
  divChat.classList.add(`${data.id}`);
  // dm; divChat.textContent = '(속닥속닥)' + 누가 : 메세지
  // not dm; divChat.textContent = '' + 누가 : 메세지

  // data의 닉네임이 다르다면, 상대방 채팅으로 보이게 (오른쪽 배치 == .oyher-chat)

  // divChat의 textContent/innerText 값을 적절히 변경
  // ex. nick : msg 형태로 보이게
  chatList.appendChild(div);
  div.appendChild(divChat);

  // divChat 을 div 요소에 추가
  // div를 chatList 에 추가

  // 메세지가 많아져서 스크롤이 생기더라도 하단 고정
  chatList.scrollTOp = chatList.scrollHeight;
});

function cancle() {
  const chatList = document.querySelector('#chat-list');
  const lastMsg = chatList.lastElementChild;
  console.log(lastMsg);
  if (lastMsg.classList.contains('my-chat')) {
    const messageDiv = document.querySelector(`.${lastMsg.classList}`);
    messageDiv.remove();
  }
}
