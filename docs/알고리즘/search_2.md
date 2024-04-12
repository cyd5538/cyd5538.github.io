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
```C
Node* search(Node* root, int data) {
    // 값을 찾은 경우
    if (root == NULL || root->data == data) {
        return root;
    }
    // 값이 현재 노드보다 작은 경우
    if (data < root->data) {
        return search(root->left, data);
    // 값이 현재 노드보다 큰 경우
    } else {
        return search(root->right, data);
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
Node* deleteNode(Node* root, int key) {
    if (root == NULL) {
        return root;
    }

    if (key < root->data) {
        root->left = deleteNode(root->left, key);
    } else if (key > root->data) {
        root->right = deleteNode(root->right, key);
    } else { // 삭제할 노드를 찾은 경우
        // 단말 노드 
        if (root->left == NULL && root->right == NULL) {
            free(root);
            return NULL;
        } 
        // 자식이 하나인 노드 
        else if (root->left == NULL) {
            Node* temp = root->right;
            free(root);
            return temp;
        } else if (root->right == NULL) {
            Node* temp = root->left;
            free(root);
            return temp;
        }
        
        // 두 개의 자식을 가진 노드 
        // 오른쪽 서브트리에서 가장 작은 값을 가진 노드를 찾습니다.
        Node* temp = minValueNode(root->right);
        // 찾은 노드의 값을 현재 노드로 복사합니다.
        root->data = temp->data;
        // 오른쪽 서브트리에서 복사한 값을 삭제합니다.
        root->right = deleteNode(root->right, temp->data);
    }
    return root;
}
```

### 삽입 과정
1. 루트 노드 비교
2. 삽입하려는 값이 루트 노드의 값보다 작으면 왼쪽 서브 트리, 크다면 오른쪽 서브 트리
3. 선택된 서브 트리를 탐색하며 비어있는 노드 찾기.
4. 비어 있다면 값을 추가하고, 비어 있지않다면 재귀적으로 탐색
```C
Node* insert(Node* root, int data) {
    if (root == NULL) {
        return createNode(data);
    }

    // 삽입할 값이 현재 노드의 값보다 작은 경우 왼쪽 서브 트리로 이동
    if (data < root->data) {
        root->left = insert(root->left, data);
    } 
    // 삽입할 값이 현재 노드의 값보다 큰 경우 오른쪽 서브 트리로 이동
    else if (data > root->data) {
        root->right = insert(root->right, data);
    } 
    // 중복된 값인 경우 에러
    else {
        return root;
    }

    // 삽입된 트리를 반환
    return root;
}

```

### 시간 복잡도
탐색,삽입,삭제의 평균적인 경우 O(log N)  최악의 경우에는 편향 트리(skewed tree)가 되어 시간 복잡도가 O(N)이 될 수 있다.  
> 편향 트리: 모든 노드가 한쪽으로만 치우쳐 있는 상태를
