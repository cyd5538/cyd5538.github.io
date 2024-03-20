---
sidebar_position: 8
---

# 힙정렬
![max_heap_animation](https://github.com/cyd5538/cyd5538.github.io/assets/91642972/b8fd45f5-bdf8-470f-ba26-43f50b1039ad)  
[이미지 출처](https://www.tutorialspoint.com/data_structures_algorithms/heap_data_structure.htm)

힙 정렬을 소개하기전에 먼저 힙 자료구조에 대해서 간단하게 알아보겠습니다.

## 힙 자료구조
힙은 완전 이진 트리 구조를 기반으로 하는 자료구조입니다.
완전 이진 트리는 모든 레벨이 완전히 채워져 있고 마지막 레벨의 노드들이 왼쪽부터 오른쪽으로 가능한 한 왼쪽에 몰려 있는 트리입니다. 

**힙의 특징**
- 부모 노드는 항상 자식 노드보다 크거나 같습니다. (최대 힙)
- 또는 부모 노드는 항상 자식 노드보다 작거나 같습니다. (최소 힙)
- 힙은 완전 이진 트리 구조를 가지고 있습니다.

최소 힙(Min-Heap) - 루트 노드의 값이 하위 노드 중 하나보다 작거나 같은 경우.
![image](https://github.com/cyd5538/cyd5538.github.io/assets/91642972/fdce3f23-e073-41bf-80e7-b0fcd01630e9)  
[이미지 출처](https://www.tutorialspoint.com/data_structures_algorithms/heap_data_structure.htm)
최대 힙(Max-Heap) - 루트 노드의 값이 하위 노드보다 크거나 같은 경우.
![image](https://github.com/cyd5538/cyd5538.github.io/assets/91642972/91ba9b93-ce71-4d9c-b146-042e86e71fbb)  
[이미지 출처](https://www.tutorialspoint.com/data_structures_algorithms/heap_data_structure.htm)

## 힙 정렬
힙 정렬은 힙 자료구조의 장점을 활용하여 배열을 정렬하는 알고리즘입니다. 그렇기 때문에 임의의 값 삽입과 최댓값 삭제가 쉽다는 장점이 있습니다.

## 동작 방식
1. 힙 생성
   - 주어진 배열을 힙 구조로 변환합니다. 방법에는 2가지가 있습니다.
     1. 각 원소를 힙에 삽입하는 과정을 반복하는 방법
     2. 완전 이진 트리를 힙으로 만드는 방법
2. 최대값 추출
   - 힙의 루트 노드 최대값을 추출합니다.
   - 추출된 최댓값을 배열의 마지막 요소와 교환합니다.
3. 힙 재구성
   - 배열의 마지막 요소를 제거합니다.
   - 다시 힙 구조를 만듭니다.
4. 반복
   - 위의 최대값 추출, 힙 재구성 단계를 원소가 남을 때까지 반복합니다.

## 장점
- 최선, 최악, 평균 수행시간 O(nlong)로 대부분의 정렬 알고리즘보다 빠릅니다
- O(1)의 공간 복잡도를 가집니다.

## 단점
- 안정적이지 않은 정렬 알고리즘으로 같은 값을 가진 원소들의 순서가 정렬 전후에 바뀔 수 있습니다.
- 다른 정렬 알고리즘에 비해 구현하기 어렵습니다.

## 코드
```c
#include <stdio.h>

void swap(int *a, int *b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

void heapify(int *arr, int n, int i) {
  int largest = i;
  int left = 2 * i + 1;
  int right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    swap(&arr[i], &arr[largest]);
    heapify(arr, n, largest);
  }
}

void heap_sort(int *arr, int n) {
  for (int i = n / 2 - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (int i = n - 1; i >= 0; i--) {
    swap(&arr[0], &arr[i]);
    heapify(arr, i, 0);
  }
}

int main() {
  int arr[] = {6, 5, 12, 10, 9, 1};
  int n = sizeof(arr) / sizeof(arr[0]);

  heap_sort(arr, n);

  for (int i = 0; i < n; i++) {
    printf("%d ", arr[i]);
  }

  return 0;
}
```
