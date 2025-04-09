---
sidebar_position: 3
---

# 이분탐색(Binary Search)

## 이분탐색(Binary Search)
이분탐색(Binary Search)은 정렬된 배열에서 특정 값의 위치를 찾는 알고리즘입니다. 이진 탐색은 탐색 대상이 되는 배열의 중간 값과 비교하여, 탐색 대상이 되는 배열의 범위를 반으로 줄여가면서 값을 찾습니다. 이진 탐색의 시간 복잡도는 O(log n)입니다.

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1; // 찾지 못한 경우
}

// 예시
const arr = [1, 3, 5, 7, 9, 11];
const target = 7;

console.log(binarySearch(arr, target)); // 3
```

## 관련 문제

- [[프로그래머스] 입국심사](https://school.programmers.co.kr/learn/courses/30/lessons/43238)
- [[백준] 수 찾기](https://www.acmicpc.net/problem/1920)
- [[백준] 랜선 자르기](https://www.acmicpc.net/problem/1654)
- [[백준] 나무 자르기](https://www.acmicpc.net/problem/2805)