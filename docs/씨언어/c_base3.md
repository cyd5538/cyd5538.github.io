---
sidebar_position: 4
---

# 제어문

## 순차적 제어
특별한 지정이 없는 한 위에서 아래로 수행되는 제어 구조

```c
#include <stdio.h>

int main() {
  printf("Hello, world!\n");
  return 0;
}
```

## 선택적 제어
선택적 제어 구조는 조건에 따라 특정 문장을 실행하거나 실행하지 않도록 하는 제어 구조
1. if 문
```c
#include <stdio.h>

int main() {
  int num = 10;
  // num이 0보다 크면 블럭 부분 실행
  if (num > 0) {
    printf("양수입니다.\n");
  }

  return 0;
}
```

2. if-else 문
```c
#include <stdio.h>

int main() {
  int num = 10;

  if (num > 0) {
    printf("양수입니다.\n");
  } else {
    printf("음수입니다.\n");
  }

  return 0;
}
```
3. switch 문
여러 조건 중 조건에 맞는 하나만 실행합니다.
```c
#include <stdio.h>

int main() {
  int num = 1;

  switch (num) {
    case 1:
      printf("1입니다.\n");
      break;
    case 2:
      printf("2입니다.\n");
      break;
    default:
      printf("1 또는 2가 아닙니다.\n");
  }

  return 0;
}
```
## 반복적 제어
특정 부분을 일정한 횟수만큼 반복 수행하는 제어구조
1. for 문
```
for (초기화식; 조건식; 증감식) {
    // 반복 실행될 코드
}
```
```c
#include <stdio.h>

int main() {
  int i;

  for (i = 0; i < 10; i++) {
    printf("%d\n", i);
  }

  return 0;
}
```
2. while 문
주어진 조건이 참일 동안 실행되는 반복문
```
while (조건식) {
    // 반복 실행될 코드
}
```
```c
#include <stdio.h>

int main() {
  int i = 0;

  while (i < 10) {
    printf("%d\n", i);
    i++;
  }

  return 0;
}
```
3. do-while 문
조건을 확인하고 나서 반복문을 실행 while문과는 다르게 무조건 한 번은 반복문을 실행
```
do {
    // 실행할 코드
} while (조건);
```
```c
#include <stdio.h>

int main() {
  int i = 0;

  do {
    printf("%d\n", i);
    i++;
  } while (i < 10);

  return 0;
}
```
## 기타 제어문
- break문
반복문을 즉시 종료합니다.
```c
#include <stdio.h>

int main() {
  int i;

  for (i = 0; i < 10; i++) {
    if (i == 5) {
      break;
    }
    printf("%d\n", i);
  }

  return 0;
}
```
0
1
2
3
4
```
- continue문
현재 반복 순환을 건너뛰고 다음 순환으로 갑니다.
```c
#include <stdio.h>

int main() {
  int i;

  for (i = 0; i < 10; i++) {
    if (i % 2 == 0) {
      continue;
    }
    printf("%d\n", i);
  }

  return 0;
}
```
```
1
3
5
7
9
```