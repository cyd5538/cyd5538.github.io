---
sidebar_position: 5
---

# 조인
조인(JOIN)이란 두 개 이상의 테이블을 결합하여 하나의 결과 집합을 만드는 연산입니다.  
관계형 데이터베이스(RDBMS)에서는 `JOIN` 구문을 사용하며, NoSQL인 MongoDB에서는 `$lookup` 연산자를 사용하여 조인 기능을 제공합니다.

## 조인의 종류
| 조인 유형      | 설명 |
|--------------|--------------------------------------------------|
| **INNER JOIN** | 두 테이블에서 일치하는 데이터만 반환 |
| **LEFT JOIN**  | 왼쪽 테이블의 모든 행을 반환하고, 일치하는 경우 오른쪽 데이터 포함 (없으면 NULL) |
| **RIGHT JOIN** | 오른쪽 테이블의 모든 행을 반환하고, 일치하는 경우 왼쪽 데이터 포함 (없으면 NULL) |
| **FULL OUTER JOIN** | 두 테이블의 모든 데이터를 반환 (일치하지 않는 경우 NULL 포함) |

### 내부 조인 (INNER JOIN)
내부 조인은 **두 테이블 간 공통된 데이터(교집합)**만 조회합니다.

```sql
SELECT * FROM TableA A
INNER JOIN TableB B ON A.key = B.key;
```

### 왼쪽 조인 (LEFT JOIN)
왼쪽 테이블의 모든 행을 반환하며, 오른쪽 테이블과 일치하는 값이 있으면 함께 반환합니다.
일치하는 값이 없으면 NULL이 들어갑니다.
```sql
SELECT * FROM TableA A
LEFT JOIN TableB B ON
A.key = B.key
```

## 오른쪽 조인 (RIGHT JOIN)
오른쪽 테이블의 모든 행을 반환하며, 왼쪽 테이블과 일치하는 값이 있으면 함께 반환합니다.
일치하는 값이 없으면 NULL이 들어갑니다.
```sql
SELECT * FROM TableA A
RIGHT JOIN TableB B ON
A.key = B.key
```

## 합집합 조인 (FULL OUTER JOIN)
FULL OUTER JOIN은 두 테이블의 모든 데이터를 반환하며, 일치하지 않는 데이터는 NULL로 표시됩니다.
MySQL에서는 기본적으로 FULL OUTER JOIN을 지원하지 않으므로 UNION을 사용하여 구현해야 합니다.
```sql
SELECT * FROM TableA A
LEFT JOIN TableB B ON A.key = B.key
UNION
SELECT * FROM TableA A
RIGHT JOIN TableB B ON A.key = B.key;
```

## 조인의 원리 (조인 알고리즘)
조인은 조인의 원리를 기반으로 조인 작업이 이루어집니다.

### 1. 중첩 루프 조인 (Nested Loop Join)
- 두 개의 테이블을 중첩 반복문으로 비교하여 조인
- 작은 데이터셋에는 효과적이지만, 큰 테이블에서는 속도가 느림

### 2. 정렬 병합 조인 (Sort-Merge Join)
- 두 테이블을 조인 키 기준으로 정렬한 후, 병합하여 조인 수행
- 범위 비교 `(>, <)`가 필요한 경우 유용함
- 인덱스가 없을 때 대량의 데이터를 조인하는 데 적합

### 3. 해시 조인 (Hash Join)
- 하나의 테이블을 해시 테이블로 변환한 후, 다른 테이블과 비교하여 조인
- =(동등 비교) 조인에서 가장 성능이 좋음
- MySQL 8.0부터 지원됨

:::note 해시 조인 단계
- 빌드 단계: 작은 테이블을 해시 테이블로 변환
- 프로브 단계: 큰 테이블을 스캔하며 해시 테이블과 비교
::: 