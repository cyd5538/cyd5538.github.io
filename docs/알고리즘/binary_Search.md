---
sidebar_position: 6
---

# 이진 탐색

## 이진 탐색
이진 탐색은 정렬된 배열에서 특정 값의 위치를 효율적으로 찾는 알고리즘입니다. 탐색 범위를 절반씩 줄여나가기 때문에 **O(log n)**의 빠른 시간 복잡도를 가집니다.

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // 찾았을 경우 인덱스 반환
    } else if (arr[mid] < target) {
      left = mid + 1; // 오른쪽 절반 탐색
    } else {
      right = mid - 1; // 왼쪽 절반 탐색
    }
  }

  return -1; // 찾지 못한 경우 -1 반환
}

// 예시
const arr = [1, 3, 5, 7, 9, 11];
const target = 7;

console.log(binarySearch(arr, target)); // 출력: 3 (인덱스 3에 위치)
console.log(binarySearch(arr, 10)); // 출력: -1 (배열에 없음)
```

## 최장 증가 부분 수열(LIS) 
주어진 수열에서 증가하는 부분 수열 중 가장 긴 길이를 찾는 알고리즘

```js
function lisBinarySearch(nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  const tails = []; // LIS를 구성하는 원소들을 저장
  for (const num of nums) {
    // tails 배열이 비어있거나 tails 배열에 마지막 원소보다 크다면 push
    if (tails.length === 0 || num > tails[tails.length - 1]) {
      tails.push(num);
    } else {
      // 이분 탐색으로 적절한 위치 찾기
      let left = 0;
      let right = tails.length - 1;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (tails[mid] < num) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      tails[left] = num; // 적절한 위치의 원소 교체
    }
    console.log(tails)
  }

  return tails.length
}

// 예시
const nums2 = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(lisBinarySearch(nums2)); // 출력: 6
```