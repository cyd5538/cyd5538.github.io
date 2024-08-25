---
sidebar_position: 3
---

# 퀵, 합병, 힙 정렬

## 퀵 정렬
퀵 정렬은 특정 데이터를 기준으로 주어진 배열을 두 개의 부분 배열로 분할하고, 각 부분 배열에 대해 퀵 정렬을 순환적으로 적용하는 정렬 방식입니다. 
핵심은 피벗이라는 특정 데이터를 기준으로 분할하는 과정에 있으며, 이는 분할 함수 Partition()를 통해 이루어집니다.  
피벗 선택의 임의성만 보장되면 평균 수행 시간 O(n log n)을 보장하지만 최악의 경우에는 O(n^2)입니다.

```
피벗 : 주어진 배열을 두 부분 배열로 분할하는 기준이 되는 특정 데이터입니다. 보통 배열의 첫 번째 데이터로 지정됩니다.
```
![quick-sort](https://github.com/cyd5538/cyd5538.github.io/assets/91642972/4512577e-d6d7-4999-872f-86a190a81f51)  
[이미지 출처](https://gyoogle.dev/blog/algorithm/Quick%20Sort.html)


### 동작 방식
- 피벗 선택: 보통 배열의 첫번째 인덱스 요소를 피벗으로 선택합니다.
- 분할:  Partition() 함수를 사용해 피벗을 기준으로 배열을 두 개의 부분배열로 나눕니다. 피벗 앞에는 피벗보다 작은 수 들이 들어오고 피벗 뒤에는 피벗 보다 큰 수를 배열로 넣는다.
- 재귀: 나눈 부분배열을 다시 피벗과 분할을 재귀적으로 반복합니다.

### 장점
- 평균적인 속도 O(n log n)
- 다른 메모리 공간을 추가로 필요로 하지 않습니다.

### 단점
- 최악의 경우 O(n^2)  pivot을 어떻게 선택하느냐에 따라 성능이 다릅니다.
- 불안정 정렬입니다.

### 코드
```js
function swap(array, front, back) {
  const tmp = array[front];
  array[front] = array[back];
  array[back] = tmp;
}

function lomutoPartition(array, start, end) {
  const pivotValue = array[end];
  let wall = start;

  for (let index = start; index < end; index++) {
    if (array[index] < pivotValue) {
      swap(array, index, wall);
      wall += 1;
    }
  }
  swap(array, wall, end);
  return wall;
}

function quickSortWithLomuto(array, start = 0, end = array.length - 1) {
  if (start >= end) {
    return;
  }

  let wall = lomutoPartition(array, start, end);
  quickSortWithLomuto(array, start, wall - 1);
  quickSortWithLomuto(array, wall + 1, end);

  return array;
}

console.log(quickSortWithLomuto([2, 5, 6, 1, 3, 4]));
```

### 시간 복잡도

| 경우          | 분할 비율          | 피벗 위치           | 피벗 값          | 시간 복잡도     | 재귀 관계식        |
|---------------|-------------------|---------------------|-----------------|------------------|-------------------|
| 최악의 경우    | 극심하게 불균형적  | 항상 제자리        | 최솟값 또는 최댓값 | O(n^2)           | T(n)=T(n-1)+Θ(n)  |
| 최선의 경우    | 가장 균형적       | 항상 배열 중앙      | 배열의 중간값    | O(n log n)       | T(n) = 2T(n/2) + Θ(n) |
| 평균적인 경우  | 균형적            | 배열 중앙          | 중간값          | O(n log n)       |                   |


## 합병정렬
합병 정렬(Merge Sort)은 분할 정복 알고리즘을 사용합니다. 배열을 절반으로 분할하고, 각각의 부분 배열을 재귀적으로 정렬한 후에, 정렬된 부분 배열을 병합하여 전체 배열을 정렬합니다. 
합병 정렬은 안정적인 정렬 알고리즘이며, 시간 복잡도는 항상 O(n log n)입니다.

![Merge-sort](https://github.com/cyd5538/cyd5538.github.io/assets/91642972/7cc49e2d-ae4b-4c99-b5be-8fa4e5db9fbb)  
[이미지 출처](https://ko.wikipedia.org/wiki/%ED%95%A9%EB%B3%91_%EC%A0%95%EB%A0%AC)


### 동작 방식
분할: 주어진 배열을 절반으로 분할합니다. 배열이 충분히 작을 때까지 이 과정을 반복하여 부분 배열을 생성합니다.
정복: 각 부분 배열을 재귀적으로 정렬합니다.
병합: 정렬된 부분 배열을 병합하여 전체 배열을 정렬합니다.

### 장점
- 안정적인 정렬 알고리즘입니다.
- 항상 시간 복잡도인 O(n log n)을 가집니다.

### 단점
- 제자리 정렬 알고리즘이 아닙니다.
- 퀵 정렬에 비해 비교 횟수가 많습니다.
- 
### 코드
```js
function merge(arr, start, mid, end) {
  const leftArray = arr.slice(start, mid + 1);
  const rightArray = arr.slice(mid + 1, end + 1);

  let i = 0, j = 0, k = start;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] <= rightArray[j]) {
      arr[k] = leftArray[i];
      i++;
    } else {
      arr[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < leftArray.length) {
    arr[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < rightArray.length) {
    arr[k] = rightArray[j];
    j++;
    k++;
  }
}

function mergeSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }
  return arr;
}

console.log(mergeSort([6, 5, 12, 10, 9, 1]));

```


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

![max_heap_animation](https://github.com/cyd5538/cyd5538.github.io/assets/91642972/b8fd45f5-bdf8-470f-ba26-43f50b1039ad)  
[이미지 출처](https://www.tutorialspoint.com/data_structures_algorithms/heap_data_structure.htm)

### 동작 방식
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

### 장점
- 최선, 최악, 평균 수행시간 O(nlong)로 대부분의 정렬 알고리즘보다 빠릅니다
- O(1)의 공간 복잡도를 가집니다.

### 단점
- 안정적이지 않은 정렬 알고리즘으로 같은 값을 가진 원소들의 순서가 정렬 전후에 바뀔 수 있습니다.
- 다른 정렬 알고리즘에 비해 구현하기 어렵습니다.

### 코드
```js
function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, n, largest);
  }
}

function heapSort(arr) {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, i, 0);
  }

  return arr;
}

console.log(heapSort([6, 5, 12, 10, 9, 1]));
```
