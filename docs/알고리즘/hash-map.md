---
sidebar_position: 7
---

# 해시맵 (Hash Map)

## 해시맵 (Hash Map)
해시맵(Hash Map)은 키-값(key-value) 쌍을 저장하는 자료구조로, 빠른 데이터 검색, 삽입, 삭제를 가능하게 합니다.
자바스크립트에서는 Map 객체나 일반적인 객체({})를 사용하여 해시맵을 구현됩니다

::tip 해시맵은 주로 다음과 같은 문제에서 사용됩니다
- 배열에서 중복 요소 찾기
- 문자열 내에서 각 문자의 빈도수 계산
- 빠른 데이터 조회
:::


```js
function twoSum(nums, target) {
  let hashMap = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    
    if (hashMap.has(complement)) {
      return [hashMap.get(complement), i];
    }
    
    hashMap.set(nums[i], i);
  }
  
  return [];
}
```

## 관련 문제

- [[프로그래머스] 완주하지 못한 선수](https://school.programmers.co.kr/learn/courses/30/lessons/42576)
- [[프로그래머스] 전화번호 목록](https://school.programmers.co.kr/learn/courses/30/lessons/42577)
- [[프로그래머스] 베스트앨범](https://school.programmers.co.kr/learn/courses/30/lessons/42579)
- [[백준] 나는야 포켓몬 마스터 이다솜](https://www.acmicpc.net/problem/1620)
- [[백준] 회사에 있는 사람](https://www.acmicpc.net/problem/7785)
- [[백준] 비밀번호 찾기](https://www.acmicpc.net/problem/17219)