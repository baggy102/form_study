const lists = ['apple', 'grape'];
console.log(lists[0]);
[item1, item2, item3 = 'peach'] = lists;
console.log('item1:', item1);
console.log('item2:', item2);
console.log('item3:', item3);

let x = 1,
  y = 2;
console.log('x:', x, 'y:', y);
[x, y] = [y, x];
console.log('x:', x, 'y:', y);

// [객체 구조 분해 할당]
const obj = {
  key1: 'one',
  key2: 'two',
};
console.log(obj.key1);

const { key1: newKey, key2 } = obj;
// console.log('key1:', key1);
console.log('key2:', key2);
console.log('newKey:', newKey); // 위의 key1 은 사용 할 수 없음

const { a, b } = { a: 10, b: 10 };
// 좌우 값 똑같아야 ({a,c} = {a:10, b:10})
// console.log 시 c undefined

// [spread 연산자]
const a1 = [1, 2, 3, 4, 5];
console.log(...a1);
// 함수 매개변수에 점(...)을 사용하는 경우 spread 연산자

// [rest 파라미터] : 남은 인수들을 묶어서 배열로 반환
// 함수 매개변수에 점 (...) 을 사용하는 경우 rest 매개변수
const data = { c: 30, d: 40, e: 50, f: 60 };
const { c, d, ...rest } = data; // c, d를 뺀 나머지 다 표시 됨 (rest말고 다른 변수 사용해도 됨, 일반적으로 rest라 씀)
console.log('c:', c);
console.log('d:', d);
console.log('rest:', rest); // rest: { e: 50, f: 60 }

// 배열분해 할당 (순서 잘 지켜야)
const newArr = ['one', 'two', 'three'];
const [one, two, three, four = 'four'] = newArr; // 분해할당시 배열 값과 비슷한 변수이름으로
console.log(one, two, three, four);

// [swap]   배열끼리 서로 변수를 바꿀 수 있다.
let newA = 10,
  newB = 20;
console.log(newA, newB);
// swap
[newA, newB] = [newB, newA];
console.log(newA, newB);

// [객체 분해 할당]
const newObj = {
  one: 'one',
  two: 'two',
  three: 'three',
};
console.log(newObj.one);
console.log(newObj.two);
console.log(newObj.three);

const { one: newOne, two: newTwo, three: newThree } = newObj; //{one, two, three}는 위에서 사용하고 있어서 재사용 x
console.log(newOne);
console.log(newTwo);
console.log(newThree);
// 기존 object 명.key -> 객체 분해 할당 시
// key 만 사용해도 됌, data가 많아질 경우 유용하게 사용할 수 있다.

// [spread 연산자]
// -> 객체의 값을 펼치는 연산자 (펼친다(?))

// 서로 다른 배열을 합쳐야 하는 경우
const t1 = [1, 2, 3];
const t2 = [5, 6];
const t3 = [...t1, ...t2];
console.log('t3:', t3);

const cookie = {
  base: 'cookie',
  madeIn: 'korea',
};

const chocochipCookie = {
  // cookie.~~
  ...cookie,
  toping: 'chocochip',
};
console.log('chocochhipCooke:', chocochipCookie);

const noTopingCookies = ['촉촉한쿠키', '안촉촉한 쿠키'];
const topingCookies = ['바나나쿠키', '블루베리쿠키', '딸기쿠키'];
const allCookies = [...noTopingCookies, '초코칩쿠키', ...topingCookies]; // 배열이 합쳐지고, 새로운 값 추가
console.log(allCookies);
