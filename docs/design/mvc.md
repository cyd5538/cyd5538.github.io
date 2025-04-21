---
sidebar_position: 5
---

# MVC 패턴

MVC (Model-View-Controller) 패턴은 소프트웨어 디자인 패턴 중 하나로, 애플리케이션의 구성 요소를 <u>모델(Model), 뷰(View), 컨트롤러(Controller)</u>로 나누어 설계하는 방식입니다.

이 패턴을 적용하면 **코드의 분리도가 높아져 유지 보수와 확장성이 향상되며**, 개발자가 각각의 역할에만 집중할 수 있도록 돕습니다.

## MVC 패턴의 구조
MVC 패턴은 다음과 같이 세 가지 역할로 구성됩니다.

### 모델 (Modal)
- 애플리케이션의 데이터와 비즈니스 로직을 담당합니다.
- 데이터베이스와의 연동 및 데이터 처리 로직을 포함합니다.
- 뷰(View)에는 직접 접근하지 않으며, 컨트롤러(Controller)를 통해 데이터를 제공합니다.

### 뷰 (View)
- 사용자가 보는 화면(UI)을 담당합니다.
- 모델(Model)에서 데이터를 가져와 화면을 업데이트하지만, 직접 데이터를 변경하지 않습니다.
- 모델의 상태가 변경되면 컨트롤러(Controller)를 통해 갱신 요청을 받습니다.

### 컨트롤러 (Controller)
- 모델과 뷰를 연결하는 역할을 합니다.
- 사용자의 입력을 받아 모델을 업데이트하고, 변경된 데이터를 뷰에 전달하여 화면을 갱신합니다.
- 이벤트 처리를 담당하며, 모델의 변경을 감지하여 뷰를 업데이트하는 역할을 합니다.

## MVC 패턴과 React
React는 MVC 패턴과 유사한 구조를 따릅니다.  
**React에서의 예제**
```jsx
import React, { useState } from "react";

// Model: 상태 (State)
const useModel = () => {
  const [data, setData] = useState("Hello, World");
  return { data, setData };
};

// View: UI 컴포넌트
const View = ({ data, onChange }) => (
  <div>
    <h1>{data}</h1>
    <button onClick={() => onChange("안녕하세요.")}>
      데이터 변경
    </button>
  </div>
);

// Controller: 상태 변경 및 로직 관리
const Controller = () => {
  const { data, setData } = useModel();

  return <View data={data} onChange={setData} />;
};

export default Controller;
```

## 장단점
### 장점
- 데이터(Model), UI(View), 로직(Controller)을 분리하여 코드 유지보수와 가독성이 좋아짐
- 같은 모델(Model)을 여러 개의 뷰(View)에서 재사용할 수 있음.
- 새로운 기능 추가 시, 기존 코드의 변경을 최소화할 수 있음.
- 모델과 컨트롤러를 독립적으로 테스트할 수 있음

### 단점
- 간단한 애플리케이션에서는 불필요한 코드가 많아질 수 있음
- 애플리케이션이 커질수록 모델과 뷰 간의 상호작용이 많아지면 관리가 어려워질 수 있음.



## 정리
- MVC 패턴은 애플리케이션을 모델(Model), 뷰(View), 컨트롤러(Controller)로 분리하는 설계 방식.
- 데이터(Model), UI(View), 로직(Controller)을 명확히 구분하여 유지보수성과 확장성을 높임.
- React에서는 MVC 패턴을 직접적으로 사용하지 않지만, 상태 관리와 컴포넌트 기반 아키텍처로 비슷한 구조를 가짐.
- 애플리케이션의 규모가 커질수록 MVVM 패턴과 같은 대체 패턴도 고려 가능.