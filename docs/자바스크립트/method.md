---
sidebar_position: 1
---

# JS method

## String
### length
문자열 길이
```js
let desc = "안녕";

desc.length; // 2
```

### toUpperCase(), toLowerCase()
대문자 소문자 변환
```js
let desc = "Hi Jin!"
desc.toUppserCase() // "HI JIN!";
desc.toLowerCase() // "hi jin!";
```

### indexOf(text)
문자를 인수로 받아 몇번째 위치하는지 알려줌
```js
let desc = "Hi Jin!";

console.log(desc.indexOf("Jin")); // 3
console.log(desc.indexOf("Choi")) // -1

if(desc.indexOf("Hi") > -1){
  console.log("Hi가 포함된 문장입니다")
}
```

### str.slice(n,m)
n부터 m까지 문자열을 반환
- m이 없으면 문자열 끝까지
- 양수면 그 숫자까지(포함하지 않음)
- 음수면 끝에서부터 셈
```js
let desc = "abcdefg";

console.log(desc.slice(2)); // cdefg
console.log(desc.slice(0,5)); // abcde
console.log(desc.slice(2,-2)); // cde
```

### str.substring(n,m)
n과 m사이 문자열 반환
- n과 m을 바꿔도 동작함
- 음수는 0으로 인식
```js
let desc = "abcdefg";

console.log(desc.substring(2,4)); // cd
console.log(desc.substring(4,2)); // cd
```
### str.trim()
앞 뒤 공백 제거
```js
let desc = "  abcdefg   ";

console.log(desc.trim()); // abcdefg
```

### str.repeat(n)
n번 반복
```js
let hello = "hello!";
hello.repeat(3); // "hello!hello!hello!"
```

## Array

### arr.splice(n,m,x)
특정 요소 지움
- n : 시작
- m : 개수
- x : 추가
- 원본 배열 바뀜
- arr.splice 는 삭제된 요소 반환.
```js
let arr = [1,2,3,4,5];
// 2번 인덱스부터 2개 지워
arr.splice(2,2);
console.log(arr) // [ 1, 2, 5 ]
```

```js
let arr = [1,2,3,4,5];
// 2번 인덱스부터 2개 지우고 3,4는 추가해
arr.splice(2,2,3,4);

console.log(arr) // [ 1, 2, 3, 4, 5 ]
```

```js
let arr = [1,2,3,4,5];
// 개수를 0으로 하면 추가만 가능
arr.splice(1,0,3,4);

console.log(arr) // [1, 3, 4, 2, 3, 4, 5 ]
```

```js

let arr = [1,2,3,4,5];

const result = arr.splice(1,3,3,4)
console.log(result) // [ 2, 3, 4 ] 삭제된 배열 반환
console.log(arr) // [ 1, 3, 4, 5 ] 삭제된 요소가 사라지고, 추가된 요소가 들어감

```

### arr.slice(n,m)
n부터 m까지 반환
```js
let arr = [1,2,3,4,5];
arr.slice(1,4); // [2,3,4];
```

### arr.concat(arr2,arr3 ..)
합쳐서 새배열반환
```js
let arr = [1,2];

arr.concat([3,4]); // [1,2,3,4]
arr.concat([5,6]); // [1,2,3,4,5,6]
```

### arr.forEach()
배열 반복
```js
let users = ["mike",  "Tom", "Jane"];

users.forEach((item, index, arr) => {
  // item 은 "mike", "Tom", "Jane"
	// index 는 0, 1, 2,
	// arr은 배열
})
```

### indexOf()
배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환
```js
let arr = [1,2,3,4,1,2,3];

console.log(arr.indexOf(3)) ; // 2
// 두번째 인수는 탐색시작할 위치
console.log(arr.indexOf(3,4)) ; // 2
```

### lastIndexOf 
배열에서 주어진 요소 뒤에서부터 탐색하고싶을 때
```js

let arr = [1,2,3,4,1,2,3];

console.log(arr.lastIndexOf(3)) ; // 6
```
### arr.includes() 
배열에 포함하는지 확인
```js
let arr = [1,2,3,4,1,2,3];

console.log(arr.includes(3)) ; // true
```

### arr.find(fn)
첫번째 true 값만 반환하고 끝 없으면 undfeind
```js
let arr = [1,2,3,4,1,2,3];

const result = arr.find((item) => {
  return item % 2 === 0;
})

console.log(result)
```
```js
let userList = [
  {name: "Mike", age: 30},
  {name: "Jane", age: 28},
  {name: "Tom", age: 10},
  {name: "Tommy", age: 15},
]

const result = userList.find((user) => {
  if(user.age < 19){
    return true
  }
  return false
})

console.log(result)
```

### arr.findIndex(fn)
조건에 맞는 index를 반환
```js

let userList = [
  {name: "Mike", age: 30},
  {name: "Jane", age: 28},
  {name: "Tom", age: 10},
  {name: "Tommy", age: 15},
]

const result = userList.findIndex((user) => {
  if(user.age < 19){
    return true
  }
  return false
})

console.log(result)
```

### arr.filter(fn)
만족하는 모든 요소를 배열로 변환
```js

let userList = [
  {name: "Mike", age: 30},
  {name: "Jane", age: 28},
  {name: "Tom", age: 10},
  {name: "Tommy", age: 15},
]

const result = userList.filter((user) => {
  if(user.age < 19){
    return true
  }
  return false
})

console.log(result)
// [ { name: 'Tom', age: 10 }, { name: 'Tommy', age: 15 } ]
```

### arr.reverse() 
역순으로 재정렬
```js
let arr = [1,2,3];

arr.reverse()
console.log(arr) // [ 3, 2, 1 ]
```

### arr.map(fn)
함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
```js
let arr = [1,2,3];

let result = arr.map((a) => {
  return a * 2 ;
})

console.log(result) // [ 2, 4, 6 ]
```

### arr.join
```js
let arr = ["안녕","나는", "더워"];

let result = arr.join("");
console.log(result) // 안녕나는더워
```

### split
```js
let arr = "안녕 나는 더워"

let result = arr.split(" ");
console.log(result) // [ '안녕', '나는', '더워' ]
```

### Array.isArray()
배열인지 아닌지 확인
```js

let user = {
  name: "Mike",
  age: 30,
}

let userList = ["a","b","c"];

console.log(typeof user) // object;
console.log(typeof userList) // object;

console.log(Array.isArray(user)) // false;
console.log(Array.isArray(userList)) // true;
```

### arr.sort()
정렬

✅ -1 (음수) → a가 b보다 앞에 와야 함
✅ 1 (양수) → b가 a보다 앞에 와야 함
✅ 0 → 순서 유지

- 작은 값이 앞에 오게 하려면 a - b
- 큰 값이 앞에 오게 하려면 b - a

```js
let numbers = [10, 2, 30, 4, 50];

numbers.sort((a, b) => {
  if (a < b) return -1; // a가 더 작으면 앞에 배치
  if (a > b) return 1;  // a가 더 크면 뒤에 배치
  return 0;             // 같으면 순서 유지
});

console.log(numbers); // [2, 4, 10, 30, 50]
```

```js
let words = ["banana", "apple", "cherry"];

words.sort((a, b) => {
  if (a < b) return -1; // a가 알파벳 순으로 앞이면 유지
  if (a > b) return 1;  // b가 앞이면 변경
  return 0;             // 같으면 그대로
});

console.log(words); // ['apple', 'banana', 'cherry']
```

### arr.reduce()
```js
let arr = [1,2,3,4,5];

const result = arr.reduce((a,b) => {
  return a+b
},0)

console.log(result)
```

## Math,Nxumber

### toString()
10진수 를 2진수/16진수로
```js
let num = 10;

num.toString(); // "10"
num.toString(2) // "1010"

let num2 = 255;

num2.toString(16); // "ff"
```

### Math.ceil()
올림
```js

let num1 = 5.1;
let num2 = 5.7;

Math.ceil(num1); // 6
Math.ceil(num2); // 6
```

### Math.floor()
내림
```js
let num1 = 5.1;
let num2 = 5.7;

Math.floor(num1); // 5
Math.floor(num2); // 5
```

### Math.round()
반올림
```js
let num1 = 5.1;
let num2 = 5.7;

Math.round(num1); // 5
Math.round(num2); // 6
```

### toFixed()
소수점 자릿수

```js
let userRate = 30.1234;
// 소수점 둘째자리까지표현

userRate.toFixed(2);
"30.12"

// !문자열로 반환된다
```

### isNaN
NaN인지 판단
```js
let x = Number("X"); // NaN

x == NaN // false
x === NaN // false
NaN === NaN // false

isNaN(x) // true
isNaN(3) // false
```

### parseInt()
문자열을 숫자로 바꿔줌

```js
let margin = "10px";

parseInt(margin); // 10
Number(margin); // NaN

// Number와 다른점은 읽을 수 있는 부분은 숫자로 반환

let redColor = "f3";
parseInt(redColor); // NaN
parseInt(reColor, 16); // 243

parseInt("11", 2) // 3
```

### parseFloat()
parseInt + 소수점까지

```js

let padding = "18.5%";

parseInt(padding); // 18
parseFloat(padding); // 18.5
```

### Math.random()
0~1 사이 무작위 숫자 생성
```js
// 1 ~ 100 사이의 임의의 숫자를 뽑고 싶다면?
Math.random(Math.random()*100) + 1
```

### Math.max(), Math.min()
최소값, 최대값
```js
Math.max(1,2,3,4) // 4;
Math.min(1,2,3,4) // 1;
```

### Math.abs()
절대값
```js
Math.abs(-1) ; // 1;
```

### Math.pow(n,m)
거듭제곱
```js
Math.pow(2,10); // 1024
```
### Math.sqrt()
제곱근

```js
Math.sqrt(16); 4
```