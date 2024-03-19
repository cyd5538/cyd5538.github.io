---
sidebar_position: 7
---

# 합병정렬
![Merge-sort](https://github.com/cyd5538/cyd5538.github.io/assets/91642972/7cc49e2d-ae4b-4c99-b5be-8fa4e5db9fbb)  
[이미지 출처](https://ko.wikipedia.org/wiki/%ED%95%A9%EB%B3%91_%EC%A0%95%EB%A0%AC)

## 합병정렬
합병 정렬(Merge Sort)은 분할 정복 알고리즘을 사용합니다. 배열을 절반으로 분할하고, 각각의 부분 배열을 재귀적으로 정렬한 후에, 정렬된 부분 배열을 병합하여 전체 배열을 정렬합니다. 
합병 정렬은 안정적인 정렬 알고리즘이며, 시간 복잡도는 항상 O(n log n)입니다.

## 동작 방식
분할: 주어진 배열을 절반으로 분할합니다. 배열이 충분히 작을 때까지 이 과정을 반복하여 부분 배열을 생성합니다.
정복: 각 부분 배열을 재귀적으로 정렬합니다.
병합: 정렬된 부분 배열을 병합하여 전체 배열을 정렬합니다.

## 장점
- 안정적인 정렬 알고리즘입니다.
- 항상 시간 복잡도인 O(n log n)을 가집니다.

## 단점
- 제자리 정렬 알고리즘이 아닙니다.
- 퀵 정렬에 비해 비교 횟수가 많습니다.
## 코드
```c
#include <stdio.h>

void merge(int *arr, int start, int mid, int end) {
  int i, j, k;
  int n1 = mid - start + 1;
  int n2 = end - mid;

  int L[n1], M[n2];

  for (i = 0; i < n1; i++) {
    L[i] = arr[start + i];
  }
  for (j = 0; j < n2; j++) {
    M[j] = arr[mid + 1 + j];
  }

  i = 0;
  j = 0;
  k = start;

  while (i < n1 && j < n2) {
    if (L[i] <= M[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = M[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = M[j];
    j++;
    k++;
  }
}

void mergeSort(int *arr, int start, int end) {
  if (start < end) {
    int mid = (start + end) / 2;

    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);

    merge(arr, start, mid, end);
  }
}

void printArray(int *arr, int size) {
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}

int main() {
  int arr[] = {6, 5, 12, 10, 9, 1};
  int size = sizeof(arr) / sizeof(arr[0]);

  printf("정렬 전 배열 \n");
  printArray(arr, size);

  mergeSort(arr, 0, size - 1);

  printf("정렬 후 배열 \n");
  printArray(arr, size);

  return 0;
}
```
