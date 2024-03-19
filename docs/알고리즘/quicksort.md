---
sidebar_position: 6
---

# 퀵 정렬
![quick-sort](https://github.com/cyd5538/cyd5538.github.io/assets/91642972/4512577e-d6d7-4999-872f-86a190a81f51)  
[이미지 출처](https://gyoogle.dev/blog/algorithm/Quick%20Sort.html)

## 퀵 정렬
퀵 정렬은 특정 데이터를 기준으로 주어진 배열을 두 개의 부분 배열로 분할하고, 각 부분 배열에 대해 퀵 정렬을 순환적으로 적용하는 정렬 방식입니다. 
핵심은 피벗이라는 특정 데이터를 기준으로 분할하는 과정에 있으며, 이는 분할 함수 Partition()를 통해 이루어집니다.  
피벗 선택의 임의성만 보장되면 평균 수행 시간 O(n log n)을 보장하지만 최악의 경우에는 O(n^2)입니다.

```
피벗 : 주어진 배열을 두 부분 배열로 분할하는 기준이 되는 특정 데이터입니다. 보통 배열의 첫 번째 데이터로 지정됩니다.
```

## 동작 방식
- 피벗 선택: 보통 배열의 첫번째 인덱스 요소를 피벗으로 선택합니다.
- 분할:  Partition() 함수를 사용해 피벗을 기준으로 배열을 두 개의 부분배열로 나눕니다. 피벗 앞에는 피벗보다 작은 수 들이 들어오고 피벗 뒤에는 피벗 보다 큰 수를 배열로 넣는다.
- 재귀: 나눈 부분배열을 다시 피벗과 분할을 재귀적으로 반복합니다.

## 장점
- 평균적인 속도 O(n log n)
- 다른 메모리 공간을 추가로 필요로 하지 않습니다.

## 단점
- 최악의 경우 O(n^2)  pivot을 어떻게 선택하느냐에 따라 성능이 다릅니다.
- 불안정 정렬입니다.

## 코드
```c
#include <stdio.h>

// 두 변수의 값을 교환하는 함수
void swap(int *a, int *b) {
  int t = *a;
  *a = *b;
  *b = t;
}

// 퀵 정렬에서 사용되는 파티션 함수
int partition(int array[], int low, int high) {
  int pivot = array[high]; // 피벗은 배열의 마지막 요소
  int i = (low - 1); // 작은 요소들의 마지막 인덱스

  for (int j = low; j < high; j++) {
    // 현재 요소가 피벗보다 작거나 같으면 i를 증가시키고 요소를 교환
    if (array[j] <= pivot) {
      i++;
      swap(&array[i], &array[j]);
    }
  }

  // 피벗을 올바른 위치에 놓기 위해 교환
  swap(&array[i + 1], &array[high]);

  return (i + 1); // 피벗의 인덱스 반환
}

// 퀵 정렬을 수행하는 함수
void quickSort(int array[], int low, int high) {
  if (low < high) {
    // 파티션 함수를 사용하여 배열을 분할하고 피벗의 인덱스를 가져옴
    int pi = partition(array, low, high);

    // 피벗을 기준으로 왼쪽 부분 배열을 정렬
    quickSort(array, low, pi - 1);
    // 피벗을 기준으로 오른쪽 부분 배열을 정렬
    quickSort(array, pi + 1, high);
  }
}

// 배열을 출력하는 함수
void printArray(int array[], int size) {
  for (int i = 0; i < size; ++i) {
    printf("%d ", array[i]);
  }
  printf("\n");
}

// 메인 함수
int main() {
  int data[] = {23, 11, 25, 2, 3};
  int n = sizeof(data) / sizeof(data[0]);

  printf("정렬되지 않은 배열\n");
  printArray(data, n);

  // 퀵 정렬을 호출하여 배열을 정렬
  quickSort(data, 0, n - 1);

  printf("오름차순으로 정렬된 배열: \n");
  printArray(data, n);

  return 0;
}

```

위의 코드에서는 피벗을 배열의 마지막 요소로 정의되어있다. 배열이 이미 오름차순이나 내림차순으로 정렬이 되어있을 수도 있는데 이럴경우 O(n^2)에 대한 시간 복잡도를 가집니다.  
따라서 피벗을 랜덤하게 주는 방향이 시간복잡도를 개선할 가능성이 높습니다. 랜덤으로 피벗을 만드는 함수를 만들어 넣어주면됩니다.
```c
int randomPivot(int low, int high) {
  return rand() % (high - low + 1) + low;
}

// ...

// 퀵 정렬 함수
void quickSort(int array[], int low, int high) {
  if (low < high) {
    // 랜덤 피벗 선택
    int pi = randomPivot(low, high);

    // ...

  }
}
```
## 시간 복잡도

| 경우          | 분할 비율          | 피벗 위치           | 피벗 값          | 시간 복잡도     | 재귀 관계식        |
|---------------|-------------------|---------------------|-----------------|------------------|-------------------|
| 최악의 경우    | 극심하게 불균형적  | 항상 제자리        | 최솟값 또는 최댓값 | O(n^2)           | T(n)=T(n-1)+Θ(n)  |
| 최선의 경우    | 가장 균형적       | 항상 배열 중앙      | 배열의 중간값    | O(n log n)       | T(n) = 2T(n/2) + Θ(n) |
| 평균적인 경우  | 균형적            | 배열 중앙          | 중간값          | O(n log n)       |                   |
