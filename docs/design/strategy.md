---
sidebar_position: 3
---

# 전략 패턴

전략 패턴(Strategy Pattern)은 행위를 바꾸고 싶은 경우, 직접 수정하지 않고 전략(캡슐화된 알고리즘)을 교체하여 유연하게 동작을 변경할 수 있도록 하는 디자인 패턴입니다.
이 패턴은 **정책 패턴**(Policy Pattern)이라고도 불리며, 객체의 행위를 런타임에 동적으로 변경할 수 있게 해줍니다.

## 특징 
- 캡슐화: 알고리즘을 전략으로 분리하여 캡슐화합니다.
- 유연성: 런타임에 전략을 교체할 수 있어 유연성이 높습니다.
- 확장성: 새로운 전략을 추가하기 쉽습니다.

## 결제 전략 예시
결제 시스템에서 다양한 결제 방법(카드, 현금, 쿠폰 등)을 전략 패턴으로 구현해보겠습니다

```js
// 전략 인터페이스 (또는 추상 클래스)
class PaymentStrategy {
  pay(amount) {
    throw new Error("pay() method must be implemented");
  }
}

// 카드 결제 전략
class CardPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`카드로 ${amount}원 결제 완료!`);
  }
}

// 현금 결제 전략
class CashPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`현금으로 ${amount}원 결제 완료!`);
  }
}

// 쿠폰 결제 전략
class CouponPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`쿠폰으로 ${amount}원 결제 완료!`);
  }
}

// 결제 컨텍스트
class PaymentContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executePayment(amount) {
    this.strategy.pay(amount);
  }
}

// 사용 예시
const paymentContext = new PaymentContext(new CardPayment());
paymentContext.executePayment(10000); // 카드로 10000원 결제 완료!

paymentContext.setStrategy(new CashPayment());
paymentContext.executePayment(5000); // 현금으로 5000원 결제 완료!

paymentContext.setStrategy(new CouponPayment());
paymentContext.executePayment(2000); // 쿠폰으로 2000원 결제 완료!
```

**동작 원리**

1. 전략 인터페이스: PaymentStrategy는 모든 전략이 구현해야 할 pay() 메서드를 정의합니다.
2. 구체적인 전략: CardPayment, CashPayment, CouponPayment는 각각의 결제 방식을 구현합니다.
3. 컨텍스트: PaymentContext는 현재 전략을 저장하고, executePayment()를 호출하여 전략을 실행합니다.
4. 전략 교체: setStrategy()를 통해 런타임에 전략을 교체할 수 있습니다.\

## Passport의 전략 패턴 
**Passport란?**  
Passport는 Node.js에서 사용되는 인증 미들웨어로, 다양한 인증 전략(예: 로컬, OAuth, JWT 등)을 지원합니다.
Passport는 전략 패턴을 활용하여 인증 로직을 캡슐화하고, 필요에 따라 전략을 교체할 수 있도록 설계되었습니다.

```js
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// 로컬 전략 설정
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false, { message: "Incorrect username." });
      if (!user.validPassword(password))
        return done(null, false, { message: "Incorrect password." });
      return done(null, user);
    });
  })
);
```

**동작 원리**  

1. 전략 등록: passport.use()를 통해 로컬 전략을 등록합니다.
2. 인증 로직: 전략 내부에서 사용자 이름과 비밀번호를 검증합니다.
3. 결과 반환: 인증 성공 시 done(null, user), 실패 시 done(null, false)를 호출합니다.

## 전략 패턴의 장단점 
### 장점 
- 유연성: 런타임에 전략을 교체할 수 있어 유연성이 높습니다.
- 캡슐화: 알고리즘이 전략으로 분리되어 있어 코드의 재사용성이 높아집니다.
- 확장성: 새로운 전략을 추가하기 쉽습니다.

### 단점
- 복잡성 증가: 전략이 많아지면 클래스의 수가 증가하여 복잡성이 높아질 수 있습니다.
- 과도한 설계: 간단한 로직에 전략 패턴을 적용하면 오버헤드가 발생할 수 있습니다.

## 전략 패턴 vs 상태 패턴
### 전략 패턴
- 목적: 알고리즘(행위)을 교체합니다.
- 사용 시기: 객체의 행위를 동적으로 변경해야 할 때 사용합니다.

### 상태 패턴
- 목적: 객체의 상태에 따라 행위를 변경합니다.
- 사용 시기: 객체의 상태가 변함에 따라 행위가 달라져야 할 때 사용합니다.

## 정리
- 전략 패턴은 알고리즘을 캡슐화하여 런타임에 동적으로 교체할 수 있도록 하는 디자인 패턴입니다.
- 장점: 유연성, 캡슐화, 확장성
- 단점: 복잡성 증가, 과도한 설계


