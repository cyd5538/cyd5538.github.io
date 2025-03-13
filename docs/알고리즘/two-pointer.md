---
sidebar_position: 4
---

# 투 포인터 (Two Pointers)

## 투 포인터 (Two Pointers)
투 포인터(Two Pointers)는 두 개의 포인터를 이용하여 배열 또는 리스트를 탐색하는 알고리즘 기법입니다. 보통 배열 또는 리스트의 왼쪽 끝과 오른쪽 끝을 가리키는 두 개의 포인터를 이용하여 구현됩니다.

가장 기본적인 예제는, 배열에서 합이 특정 값이 되는 두 요소의 인덱스를 찾는 문제입니다.

```js
function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    const sum = nums[left] + nums[right];
    
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  
  return [];
}
```

## 관련 문제

- [[프로그래머스] 보석 쇼핑](https://school.programmers.co.kr/learn/courses/30/lessons/67258)
- [[백준] 수들의 합 5](https://www.acmicpc.net/problem/2018)
- [[백준] 용액](https://www.acmicpc.net/problem/2467)
- [[백준] 두 수의 합](https://www.acmicpc.net/problem/3273)