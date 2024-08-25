---
sidebar_position: 4
---

# 이진 탐색 트리

## 이진 탐색 트리

이진 탐색 트리(Binary Search Tree, BST)는 각 노드가 최대 두 개의 자식 노드를 갖는 이진 트리입니다. 이진 트리의 특징을 활용하여 데이터를 계층적으로 구성하고, 탐색 과정을 빠르게 수행합니다. 이진 탐색 트리의 특징은 다음과 같습니다.

- 한 노드의 왼쪽 서브트리에 있는 모든 키 값은 그 노드의 키값보다 작다.
- 한 노드의 오른쪽 서브트리에 있는 모든 키 값은 그 노드의 키값보다 크다
- 중복된 키를 허용하지 않는다.
    
![image](https://github.com/cyd5538/cyd5538.github.io/assets/91642972/4838daa3-1609-446d-934c-36201524eb01)  
[이미지 출처](https://medium.com/swlh/binary-search-tree-in-javascript-31cb74d8263b)

### 탐색 연산
1. 루트 노드에서 시작.
2. 찾고자 하는 값을 현재 노드의 값과 비교.
3. 찾고자하는 같이 현재 노드라면 반환. 
4. 찾고자 하는 값이 현재 노드의 값보다 작다면 왼쪽에 대해 재귀.
5. 찾고자 하는 값이 현재 노드의 값보다 크다면 오른쪽에 대해 재귀.
6. 값이 없다면 null 반환
```js
function search(root, data) {
    if (root === null || root.data === data) {
        return root;
    }
    if (data < root.data) {
        return search(root.left, data);
    } else {
        return search(root.right, data);
    }
}
```

### 삭제 연산
삭제 연산은 복잡하다. 3가지의 분기로 나눌 수 있다.
1. **단말 노드(leaf node) 일 경우 (자식이 없는 경우)**  
   해당 노드를 가리키는 부모를 null로 만들고 해당 노드를 메모리 삭제해주면 된다.
   
2. **자식이 하나인 경우(왼쪽 혹은 오른쪽 서브 트리)**  
   해당 노드의 자식을 해당 노드의 부모로 연결하고 해당 노드를 삭제해주면 된다
   
3. **자식이 두개인 경우**
1) 왼쪽 서브 트리의 가장 큰 자손  
①  삭제할 노드의 왼쪽 서브 트리에서 가장 오른쪽 노드를 선택합니다.  
②  이 노드는 삭제할 노드보다 작지만, 삭제할 노드보다 큰 모든 값 중 가장 작은 값을 가집니다.  
③  이 노드를 삭제할 노드의 자리에 올리고, 이 노드의 원래 위치는 비워집니다.
     
3) 오른쪽 서브 트리의 가장 작은 자손  
① 삭제할 노드의 오른쪽 서브 트리에서 가장 왼쪽 노드를 선택합니다.  
② 이 노드는 삭제할 노드보다 크지만, 삭제할 노드보다 작은 모든 값 중 가장 큰 값을 가집니다.  
③ 이 노드를 삭제할 노드의 자리에 올리고, 이 노드의 원래 위치는 비워집니다.

```C
function minValueNode(node) {
    let current = node;
    while (current.left !== null) {
        current = current.left;
    }
    return current;
}

function deleteNode(root, key) {
    if (root === null) {
        return root;
    }

    if (key < root.data) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.data) {
        root.right = deleteNode(root.right, key);
    } else {
        if (root.left === null && root.right === null) {
            return null;
        } else if (root.left === null) {
            return root.right;
        } else if (root.right === null) {
            return root.left;
        }

        let temp = minValueNode(root.right);
        root.data = temp.data;
        root.right = deleteNode(root.right, temp.data);
    }
    return root;
}

```

### 삽입 과정
1. 루트 노드 비교
2. 삽입하려는 값이 루트 노드의 값보다 작으면 왼쪽 서브 트리, 크다면 오른쪽 서브 트리
3. 선택된 서브 트리를 탐색하며 비어있는 노드 찾기.
4. 비어 있다면 값을 추가하고, 비어 있지않다면 재귀적으로 탐색
```js
function createNode(data) {
    return {
        data: data,
        left: null,
        right: null
    };
}

function insert(root, data) {
    if (root === null) {
        return createNode(data);
    }

    if (data < root.data) {
        root.left = insert(root.left, data);
    } else if (data > root.data) {
        root.right = insert(root.right, data);
    } else {
        return root; 
    }

    return root;
}

```

### 시간 복잡도
탐색,삽입,삭제의 평균적인 경우 O(log N)  최악의 경우에는 편향 트리(skewed tree)가 되어 시간 복잡도가 O(N)이 될 수 있다.  
> 편향 트리: 모든 노드가 한쪽으로만 치우쳐 있는 상태를
