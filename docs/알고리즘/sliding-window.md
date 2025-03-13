---
sidebar_position: 6
---

# 슬라이딩 윈도우 (Sliding Window)

## 슬라이딩 윈도우 (Sliding Window)
슬라이딩 윈도우는 투 포인터와 원리가 거의 동일하지만, 연속된 부분 배열을 다룰 때 사용되는 알고리즘 기법입니다. 배열이나 문자열과 같은 일련의 데이터셋에서 특정 조건을 만족하는 하위 집합을 찾을 때 유용합니다.

```js
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]; // 첫 번째 구간의 합을 계산
  }
  
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]; // 윈도우 이동
    maxSum = Math.max(maxSum, tempSum);
  }
  
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10 (5+5)
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17 (2+5+2+8)
```

## 관련 문제

- [[프로그래머스] 연속 부분 수열 합의 개수](https://school.programmers.co.kr/learn/courses/30/lessons/131701)
- [[백준] 회전 초밥](https://www.acmicpc.net/problem/15961)
- [[백준] DNA 비밀번호](https://www.acmicpc.net/problem/12891)