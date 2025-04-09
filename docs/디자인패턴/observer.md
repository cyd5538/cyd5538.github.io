---
sidebar_position: 4
---

# 옵저버 패턴

옵저버 패턴은 주체가 어떤 객체의 상태 변화를 관찰하다가 상태 변화가 있을 때마다 메서드 등을 통해 옵저버 목록에 있는 옵저버들에게 변화를 알려주는 디자인 패턴입니다.  
이 패턴은 주로 이벤트 핸들링 시스템이나 Pub/Sub 모델에서 사용됩니다.

## 특징
- 느슨한 결합: 주체(Subject)와 옵저버(Observer)는 서로 독립적으로 동작합니다.
- 실시간 업데이트: 상태 변화가 발생하면 즉시 모든 옵저버에게 알립니다.
- 확장성: 새로운 옵저버를 쉽게 추가할 수 있습니다.

## 구독 예시
```js
// 주체(Subject) 클래스
class NewsPublisher {
  constructor() {
    this.subscribers = []; // 구독자 목록
  }

  // 구독자 추가
  subscribe(observer) {
    this.subscribers.push(observer);
  }

  // 구독자 제거
  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter(sub => sub !== observer);
  }

  // 뉴스 발행 및 구독자에게 알림
  publishNews(news) {
    console.log(`뉴스 발행: ${news}`);
    this.subscribers.forEach(subscriber => subscriber.update(news));
  }
}

// 옵저버(Observer) 클래스
class NewsSubscriber {
  constructor(name) {
    this.name = name;
  }

  // 뉴스 업데이트 받기
  update(news) {
    console.log(`${this.name}이(가) 뉴스를 받았습니다: ${news}`);
  }
}

// 사용 예시
const publisher = new NewsPublisher();

const subscriber1 = new NewsSubscriber("구독자 1");
const subscriber2 = new NewsSubscriber("구독자 2");

publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);

publisher.publishNews("오늘의 날씨는 맑음!");
// 출력:
// 뉴스 발행: 오늘의 날씨는 맑음!
// 구독자 1이(가) 뉴스를 받았습니다: 오늘의 날씨는 맑음!
// 구독자 2이(가) 뉴스를 받았습니다: 오늘의 날씨는 맑음!

publisher.unsubscribe(subscriber2);

publisher.publishNews("주말에 비 소식!");
// 출력:
// 뉴스 발행: 주말에 비 소식!
// 구독자 1이(가) 뉴스를 받았습니다: 주말에 비 소식!
```

**동작 원리**
1. 주체(Subject): NewsPublisher는 구독자 목록을 관리하고, 뉴스를 발행할 때 모든 구독자에게 알립니다.
2. 옵저버(Observer): NewsSubscriber는 뉴스를 받아 처리하는 update() 메서드를 구현합니다.
3. 구독/구독 취소: subscribe()와 unsubscribe()를 통해 구독자를 추가하거나 제거합니다.

## 장단점
### 장점
- 실시간 동기화: 상태 변화가 발생하면 즉시 모든 옵저버에게 알립니다.
- 느슨한 결합: 주체와 옵저버는 서로 독립적으로 동작합니다.
- 확장성: 새로운 옵저버를 쉽게 추가할 수 있습니다.

### 단점
- 성능 저하: 옵저버가 많아지면 상태 변화 알림에 많은 시간이 소요될 수 있습니다.
- 메모리 누수: 구독 취소를 하지 않으면 메모리 누수가 발생할 수 있습니다.

## 정리
- 옵저버 패턴은 객체의 상태 변화를 관찰하는 옵저버들에게 실시간으로 알리는 디자인 패턴입니다.
- 장점: 실시간 동기화, 느슨한 결합, 확장성.
- 단점: 성능 저하, 메모리 누수 가능성.

