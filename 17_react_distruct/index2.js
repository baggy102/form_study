// 클래스
// -> 객체를 생성하기 위한 템플릿 => 객체를 만들기 위해 사용

class Cat {
  //생성자 (클래스를 선언 시 필수적으로 생성(어떠한 값을 넣을것인지?))
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //메소드
  mew() {
    console.log('야옹~');
  }
  //메소드2
  eat() {
    console.log('밥먹자');
  }
}

// 클래스의 사용
let navi = new Cat('나비', 1);
navi.mew();
navi.eat();

// class가 없던 시절 객체를 하나하나 설정해 주어야 했었다

let tv1 = {
  name: 'aaa tv',
  price: 2000,
  size: '56inch',
};

let tv2 = {
  name: 'bbb tv',
  price: 3000,
  size: '27inch',
};

let tv3 = {
  name: 'ccc tv',
  size: '55inch',
}; // price 누락
console.log(tv1.price, tv2.price, tv3.price); // undefined , 오류가 많았음

// 클래스 등장 = 일종의 작업지시서
class TV {
  name = '';
  price = 0;
  size = '';

  constructor(name, price, size) {
    //this: 이 클래스 안에 있는 속성을 의미
    //this.name : 이 클래스 안에 있는 name
    this.name = name;
    this.price = price;
    this.size = size;
  }

  getPrice() {
    return this.price + '만원';
  }
  // 변수의 값 변화

  setPrice(price) {
    this.price = price;
  }
}

const newTv1 = new TV('aaa tv', 2000, '56inch');
console.log(newTv1.getPrice());
newTv1.setPrice(4000); // 클래스의 캡슐화 : 직접 값을 변경하지 않고 class 안에서 매서드를 통해 변경
console.log(newTv1.getPrice());

// [하위클래스]
class Product {
  name = '';
  price = 0;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price + '만원';
  }
}

// 다른 클래스의 정보들을 그대로 사용하고 싶은 경우? -> 하위 클래스(extends 클래스명) : ~~의 클래스를 상속 받는다.
// 상속 : 부모클래스(Product)로부터 변수, 매서드를 (Laptop에)가져와서 사용하는 개념
class Laptop extends Product {
  weight = '';

  constructor(name, price, weight) {
    // this 사용 x
    // super : 상속받은 부모 클래스 값을 사용하겠다
    super(name, price);
    this.weight = weight;
  }
}

let laptop = new Laptop('삼성tv', 5000, '55');
console.log(laptop.price);
console.log(laptop.getPrice()); // 상속받은 class의 매서드도 이용할 수 있다.
//부모클래스는 자식클래스의 값을 사용하지 못합니다.
let parent = new Product('tv', 1000);
console.log(parent.weight); // -> undefined
