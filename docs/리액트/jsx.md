---
sidebar_position: 2
---

# JSX

## JSX란 무엇인가요?
JSX는 JavaScript XML의 약자로, React에서 자바스크립트 코드를 HTML과 유사한 형태로 작성할 수 있도록 도와주는 문법 확장입니다.
JSX는 브라우저에서 바로 실행되지 않으며, Babel과 같은 도구를 통해 일반 자바스크립트 코드로 변환된 뒤 실행됩니다.

## JSX의 장점
**더 쉬운 읽기 및 쓰기**  
HTML에 익숙한 개발자라면 JSX 문법을 더 쉽게 읽고 씁니다.

```jsx
const hello = <h1>Hello, world!</h1>;
```
위 코드는 HTML처럼 보이지만 실제로는 React.createElement로 변환됩니다.

**향상된 보안**  
새로운 엘리먼트를 생성할 수 있는 `<` 및 `>` 같은 위험한 문자가 HTML 문자열에 포함되었다면, JSX 코드를 컴파일할 때 다른 문자로 바꿔 더 안전한 자바스크립트 코드를 생성합니다. 앞서 말한 문자는 각각 HTML 문자의 부등호(`&lt;`와 `&gt;`)로 변환됩니다. 이 과정을 데이터 소독이라 합니다.
```jsx
const userInput = "<script>alert('XSS!');</script>";
const safeElement = <div>{userInput}</div>;
```
위 코드에서 JSX는 `<script>` 태그를 단순 텍스트로 렌더링하여 보안을 강화합니다.

**강력한 타이핑**  
JSX는 컴파일 단계에서 오류를 잡아내는 강력한 타입 검사를 지원합니다.
이를 통해 런타임 오류를 줄이고, 개발 초기 단계에서 문제를 해결할 수 있습니다.

**컴포넌트 기반 아키텍쳐**  
JSX는 컴포넌트 기반 아키텍쳐를 권장하는데, 이는 코드를 보다 모듈화하고 유지 보수를 쉽게 하는데 도움을 줍니다.
```jsx
const Button = ({ label }) => <button>{label}</button>;
const App = () => <Button label="Click Me" />;
```

**광범위한 사용**  
JSX는 React에 국한되지 않고 Vue, Solid, Qwik 등 다른 라이브러리와 프레임워크에서도 사용됩니다.

## JSX의 약점
**학습 곡선 가중**    
JSX에 익숙하지 않은 개발자는 배우고 이해하기 어려울 수 있습니다.

**전용 도구 필요**    
JSX는 브라우저에서 바로 실행되지 않으므로, Babel 또는 TypeScript 같은 트랜스파일러를 통해 변환해야 합니다.

**관심사 혼합**  
JSX는 HTML과 자바스크립트 코드를 같은 파일에 작성하도록 권장합니다.
직관적이지만, `관심사의 분리`를 선호하는 전통적인 개발자에게는 거부감을 줄 수 있습니다.

**자바스크립트 호환 부족**  
JSX는 자바스크립트 문법과 유사하지만 완전히 동일하지는 않습니다.
예를 들어, JSX에서는 class 대신 className, for 대신 htmlFor를 사용해야 합니다.

```jsx
const element = <div className="my-class"></div>; 
```

## JSX의 활용 사례

1. **동적 콘텐츠 렌더링**  
JSX는 자바스크립트의 강력한 기능을 활용하여 동적인 콘텐츠를 쉽게 렌더링할 수 있습니다.
```jsx
const user = { name: "YJ", age: 30 };
const element = <p>{`Name: ${user.name}, Age: ${user.age}`}</p>;
```
2. **조건부 렌더링**  
JSX는 삼항 연산자 또는 논리 연산자를 활용하여 조건에 따라 컴포넌트를 렌더링할 수 있습니다.
```jsx
const isLoggedIn = true;
const element = <div>{isLoggedIn ? "Welcome!" : "Please log in."}</div>;
```
3. **반복 렌더링**  
map()을 사용하여 데이터 배열을 반복적으로 렌더링할 수 있습니다.
```jsx
const items = ["a", "b", "c", "d"];
const list = <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>;
```

## JSX의 목적
JSX는 UI 개발을 더 간결하고 직관적으로 만드는 것을 목표로 합니다.

- 코드의 간결성: HTML에 가까운 문법으로 UI 코드를 간결하게 작성.
- 가독성 향상: 개발자와 디자이너 모두가 쉽게 이해할 수 있는 코드 제공.
- 유지보수 용이성: 컴포넌트 기반 아키텍처와 결합하여 확장성과 재사용성을 높임.
- 생산성 향상: 동적 UI를 빠르고 쉽게 작성할 수 있도록 지원.
