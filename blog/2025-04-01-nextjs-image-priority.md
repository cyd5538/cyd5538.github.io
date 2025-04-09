---
slug: korean-input-tag-issue
title: 한글 입력 시 이벤트 중복 문제 해결
authors: [Yjin]
tags: [React, TypeScript, isComposing]
---

프로젝트 중에 태그 입력 기능을 구현하던 중 <b>한글 입력 시 태그가 두 번 추가되는 문제가 발생</b>했습니다. 영어나 숫자 등 다른 문자는 정상적으로 동작했지만, 한글만 입력하면 `keyDown` 이벤트가 두 번씩 실행되는 현상이 발생했습니다.

## 문제 상황
태그 입력창에서 엔터키를 누르면 태그가 추가되는 기능을 아래와 같은 코드로 구현했습니다.

```tsx
const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
        handleAddTag();
    }
};
```

이 코드는 영어나 숫자 입력 시에는 정상적으로 작동했지만, 한글 입력 시에는 엔터를 한 번 눌러도 태그가 두 번 추가되는 문제가 발생했습니다.

```tsx
import React from "react";
import CustomButton from "../ui/CustomButton";

interface Props {
  inputTag: string;
  setInputTag: React.Dispatch<React.SetStateAction<string>>;
  handleAddTag: () => void;
  handleKeyDown: (event: React.KeyboardEvent) => void
}

const TagInput: React.FC<Props> = ({ inputTag, setInputTag, handleAddTag, handleKeyDown }) => {
  return (
    <div className="flex gap-2 mt-2">
      <input
        type="text"
        value={inputTag}
        onChange={(e) => setInputTag(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="예: 한식, 중식, 디저트 (태그는 5가지 이하로 작성해주세요)"
        onKeyDown={handleKeyDown}
      />
      <CustomButton
        onClick={handleAddTag}
        className="max-w-[100px] w-full px-4 py-2 rounded"
        text="추가"
      />
    </div>
  );
};

export default TagInput;
```
<video controls src="/videos/keydown.mp4" width="100%" style={{ maxWidth: "900px" }}></video>

## 원인 파악
검색을 통해 알아본 결과, 이 문제가 한글과 같은 조합형 문자를 입력할 때 발생하는 IME(Input Method Editor) 관련 이슈였습니다. 한글 입력 시에는 자음과 모음을 조합하는 과정이 있어 `keydown` 이벤트가 두 번 발생하게 된 것이었습니다.

:::note IME(Input Method Editor)란?
IME는 조합형 문자를 입력하기 위한 소프트웨어입니다. 한글, 일본어, 중국어와 같은 언어는 영어와 달리 여러 자모를 조합하여 하나의 글자를 만들기 때문에 특별한 입력 방식이 필요합니다.
한글의 경우 'ㄱ', 'ㅏ', 'ㅇ'과 같은 자모를 조합하여 '강'이라는 하나의 글자를 만듭니다. 이 조합 과정에서 JavaScript의 키보드 이벤트는 다르게 동작합니다. 조합 중일 때 isComposing 속성이 true가 되어, 이를 통해 조합이 완료되었는지 여부를 확인할 수 있습니다.
:::

## 문제 해결
isComposing 속성을 확인하여 IME 조합 중인 경우 이벤트 처리를 건너뛰면 됩니다.


```tsx
const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.nativeEvent.isComposing) return; // 조합 중인 경우 무시
    if (event.key === "Enter") {
        handleAddTag();
    }
};
```
`event.nativeEvent.isComposing`은 현재 IME 조합 중인지를 나타내는 속성입니다. 이 코드를 추가함으로써 한글 입력 시 조합 과정에서 발생하는 이벤트는 무시하고, 조합이 완료된 후의 이벤트만 처리하도록 했습니다.