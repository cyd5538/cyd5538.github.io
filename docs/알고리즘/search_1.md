---
sidebar_position: 4
---

# 탐색 알고리즘, 순차,이진 탐색

## 탐색?
탐색 알고리즘은 여러 개의 원소로 구성된 데이터에서 원하는 값을 찾아내는 알고리즘입니다.
데이터의 형태, 내/외부 탐색 구분에 따라 다양한 알고리즘이 존재합니다.

**탐색 방법**
- 리스트: 순차 탐색, 이진 탐색
- 트리: 이진 탐색 트리, 2-3-4 트리, 레드-블랙 트리, B-트리
- 해시 테이블: 해시 함수, 충돌 해결 방식

## 순차 탐색
![image](https://velog.velcdn.com/images/zz1996zz/post/cc310c83-5702-4b66-a962-35ef547986d5/image.gif)  
[이미지 출처](https://velog.io/@zz1996zz/%EC%88%9C%EC%B0%A8-%ED%83%90%EC%83%89Sequential-Search)

리스트로 구성된 데이터에서 처음부터 하나씩 차례로 비교하면서 원하는 값을 찾는 방법입니다.

### 시간 복잡도
- 최악의 경우 시간 복잡도: O(n)
- 최선의 경우 시간 복잡도: O(1) (탐색하려는 값이 리스트의 첫 번째에 위치해 있는 경우)

### 장점, 단점
**장점**  
- 간단하고 쉽다.
- 정렬되지 않은 배열에서 사용 가능.
- 배열의 길이가 짧을 때 사용하면 좋음
  
**단점**
- 데이터의 개수가 많아질수록 속도가 느려짐.
- 최악의 경우 비효율적(데이터가 배열 마지막의 있을 경우)

### 코드
```C
int sequentialSearch(int array[], int n, int m, int value) {
    int i;
    for (i = n; i <= m; i++)
        if (array[i] == value)
            return i;
    return -1;
}
```

## 이진 탐색
![image](https://velog.velcdn.com/images/blueshj610/post/a82f22b3-616c-43ea-8412-ad02824f58b5/image.gif)  
[이미지 출처](https://velog.io/@blueshj610/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%9D%B4%EC%A7%84-%ED%83%90%EC%83%89Binary-Search)

이진탐색은 오름차순으로 정렬된 배열(리스트)에서 특정 값을 찾는 효율적인 알고리즘입니다. 주어진 배열을 절반씩 나눠 범위를 좁혀가면서 값을 찾습니다.

**탐색 방법**
1. 리스트의 중간 원소를 선택합니다.
2. 선택한 원소와 탐색하려는 값을 비교합니다.
3. 값이 같으면 탐색 성공입니다.
4. 값이 다르면 탐색하려는 값이 선택한 원소보다 작으면 왼쪽 절반, 크면 오른쪽 절반으로 탐색 범위를 줄입니다.
5. 탐색 범위가 비어질 때까지 2~4 단계를 반복합니다.

### 시간 복잡도
- 최선, 최악, 평균 : O(log n)
  
### 장점, 단점
**장점**
- 순차 탐색에 비해 데이터 개수가 많을수록 속도가 훨씬 빠릅니다
- 탐색하려는 값이 리스트의 어디에 있든 빠르게 찾을 수 있습니다.

**단점**
- 데이터가 정렬이 되어있어야 합니다.
- 순차 탐색에 비해 구현이 다소 복잡합니다.

### 코드
```C

#include <stdio.h>

int binary_search(int array[], int n, int value) {
  int low = 0;
  int high = n - 1;

  while (low <= high) {
    int mid = (low + high) / 2;
    if (array[mid] == value) {
      return mid;
    } else if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

int main() {
  int array[] = {1, 3, 5, 7, 9};
  int n = sizeof(array) / sizeof(array[0]);
  int value = 7;

  int index = binary_search(array, n, value);

  if (index == -1) {
    printf("값을 찾을 수 없습니다.\n");
  } else {
    printf("값 %d는 인덱스 %d에 있습니다.\n", value, index);
  }

  return 0;
}
```