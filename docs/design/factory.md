---
sidebar_position: 2
---

# 팩토리 패턴

팩토리 패턴은 객체를 사용하는 코드에서 객체 생성 부분을 추상화하여 분리하는 디자인 패턴입니다.  
상위 클래스에서 객체 생성의 기본 구조를 정의하고, 하위 클래스에서 구체적인 객체 생성 방식(인스턴스화)을 결정하는 방식으로 동작합니다.

## 특징
✅ 느슨한 결합 (Low Coupling)
  - 상위 클래스와 하위 클래스가 분리되어 있어, 상위 클래스는 구체적인 인스턴스 생성 방법을 알 필요가 없습니다.
✅ 유연성 (Flexibility)
  - 객체 생성 로직을 분리함으로써 코드 수정이 필요할 때 한 곳만 변경하면 됩니다.
✅ 유지 보수성 (Maintainability)
  = 객체 생성 로직을 한 곳에서 관리할 수 있어, 유지 보수가 쉬워집니다.
✅ 확장성 (Extensibility)
  - 새로운 객체 유형이 추가될 때 기존 코드를 변경할 필요 없이 새로운 하위 클래스를 추가하면 됩니다.

## 자바스크립트의 팩토리 패턴
자바스크립트에서는 new Object()를 사용하여 팩토리 패턴을 간단하게 구현할 수 있습니다.
```js
const num = new Object(42);
const str = new Object("str");

console.log(num.constructor.name); // "Number"
console.log(str.constructor.name); // "String"
```

<u>팩토리 패턴을 이해하기 위해 커피 공장을 예로 들어보겠습니다.</u>  
- 상위 클래스: CoffeeFactory (커피를 생산하는 공장)
- 하위 클래스: LatteFactory, EspressoFactory (각각 라떼와 에스프레소를 생산하는 공장)

```js
class Latte {
  constructor () {
    this.name = "latte"
  }
}

class Espresso {
  constructor () {
    this.name = "Espresso"
  }
}

class LatteFactory {
  static createCoffe() {
    return new Latte()
  }
}

class EspressoFactory {
  static createCoffe() {
    return new Espresso()
  }
}

const fatoryList = { LatteFactory, EspressoFactory};

class CoffeeFactory {
  static createCoffee(type) {
    const factory = factoryList[type]
    return factory.createCoffe();
  }
}

const main = () => {
  // 커피 주문
  const coffee = CoffeeFactory.createCoffe("LatteFactory");
  // 커피 이름
  console.log(coffee.name) // "latte"
}

main();
```

- CoffeeFactory.createCoffee()를 호출하면, 전달된 타입(LatteFactory 또는 EspressoFactory)에 따라 해당 공장에서 커피를 생성합니다.
- 각 공장은 자신이 담당하는 커피를 생성하고 반환합니다.
- 결과적으로 CoffeeFactory는 어떤 커피가 생성되는지 알 필요 없이, 단순히 커피를 생성하는 역할만 수행합니다.

## 장단점
### 장점 ✅ 
1. 느슨한 결합 
   - 객체 생성 로직이 분리되어 있어, 상위 클래스는 하위 클래스의 구현에 대해 알 필요가 없습니다.
   - 이로 인해 코드의 유연성이 증가하고, 유지 보수가 쉬워집니다.

2. 유지 보수성 
   - 객체 생성 로직이 한 곳에 집중되어 있기 때문에, 로직을 수정할 때 한 곳만 변경하면 됩니다.

3. 확장성 
   - 새로운 제품(객체)을 추가할 때 기존 코드를 수정하지 않고, 새로운 하위 클래스만 추가하면 됩니다.

### 단점 ❌ 
1. 복잡성 증가
   - 클래스가 많아지면 코드의 복잡성이 증가할 수 있습니다.
   - 특히, 간단한 객체 생성의 경우 팩토리 패턴을 사용하는 것이 오버헤드가 될 수 있습니다.
2. 의존성 문제 
   - 팩토리 패턴을 사용하면 객체 생성 로직이 팩토리에 집중되기 때문에, 팩토리가 변경되면 모든 클라이언트 코드에 영향을 미칠 수 있습니다.

## 팩토리 패턴 vs 의존성 주입
- 팩토리 패턴: 객체 생성 로직을 캡슐화하여 클라이언트 코드가 직접 객체를 생성하지 않도록 합니다.
- 의존성 주입: 객체 생성과 사용을 완전히 분리합니다. 객체 생성은 외부 컨테이너가 담당하고, 클라이언트 코드는 필요한 객체를 주입받아 사용합니다.

## 정리
- 팩토리 패턴은 객체 생성 로직을 추상화하여 유연성과 유지 보수성을 높이는 디자인 패턴입니다.
- 장점: 느슨한 결합, 유지 보수성 증가, 확장성
- 단점: 복잡성 증가, 의존성 문제