---
sidebar_position: 8
---

# 누적 합 (Prefix Sum)

## 누적 합 (Prefix Sum)
누적 합(Prefix Sum) 알고리즘은 배열의 특정 구간의 합을 효율적으로 계산하는 알고리즘 기법입니다. 배열의 각 위치까지의 누적된 합을 미리 계산하여 저장하고, 이를 이용하여 구간 합을 O(1)의 시간 복잡도로 빠르게 구할 수 있습니다.

```js
function solution(numbers, S, F) {
  let answer = [];
  const sums = [0];
  
  // 1. 구간 합 미리 저장
  for (let i = 0; i < numbers.length; i++) {
    sums[i + 1] = sums[i] + numbers[i];
  }
  
  // 2. 구간 합 구하기
  for (let i = 0; i < S.length; i++) {
    answer.push(sums[F[i] + 1] - sums[S[i]]);
  }
  return answer;
}

solution([10, 20, 30, 40, 50, 60], [1, 2], [2, 4]); // [50, 120]
```

## 관련 문제
- [[백준] 구간 합 구하기 4](https://www.acmicpc.net/problem/11659)
- [[백준] 구간 합 구하기 5](https://www.acmicpc.net/problem/11660)