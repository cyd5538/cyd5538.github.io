---
sidebar_position: 9
---

# DFS와 BFS

## DFS
DFS는 루트 노드 또는 임의의 노드에서 시작하여 다음 분기로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방식입니다. 즉, 한 경로를 따라 최대한 깊숙이 탐색하고, 더 이상 탐색할 수 없는 경우 가장 가까운 갈림길로 돌아와 다른 경로를 탐색합니다.
DFS의 특징
- 스택 또는 재귀 함수 사용: 스택 또는 재귀 함수를 사용하여 구현합니다.
- 모든 노드 방문: 모든 노드를 방문하고자 할 때 유용합니다.
- 경로 탐색: 특정 경로를 탐색하거나, 모든 경로를 탐색하는 데 사용됩니다.
- vs BFS: BFS에 비해 탐색 속도가 느릴 수 있지만 구현하기는 더 쉽습니다.

![dfs](/img/dfs.webp)


## DFS 구현 방법
DFS는 재귀 함수 또는 스택을 사용하여 구현할 수 있습니다. 두 가지 방법 모두 그래프를 깊이 우선으로 탐색하지만, 구현 방식에 차이가 있습니다.

### 재귀 함수를 이용한 DFS 구현
재귀 함수를 이용한 DFS는 코드가 간결하고 이해하기 쉽다는 장점이 있습니다.

```js
const dfs = (graph, v, visited) => {
  visited[v] = true;
  console.log(v);

  for (let node of graph[v]) {
    if (!visited[node]) {
      dfs(graph, node, visited);
    }
  }
```

### 스택을 이용한 DFS 구현
스택을 이용한 DFS는 재귀 호출 없이 반복문을 사용하여 구현할 수 있습니다. 재귀 호출로 인한 스택 오버플로우를 방지할 수 있다는 장점이 있습니다.

```js
function dfsStack(graph, start) {
  const visited = {};
  const stack = [start];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited[node]) {
      visited[node] = true;
      console.log(node);

      for (let neighbor of graph[node]) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      }
    }
  }
}
```

## BFS
BFS는 루트 노드 또는 임의의 노드에서 시작하여 인접한 노드를 먼저 탐색하는 방식입니다. 즉, 너비를 우선으로 탐색하며, 시작 노드에서 가까운 노드부터 차례대로 방문합니다.
BFS의 특징
- 큐 사용: 큐를 사용하여 구현합니다.
- 최단 경로 탐색: 최단 경로를 찾는 데 유용합니다.
- 너비 우선 탐색: 시작 노드에서 가까운 노드부터 탐색합니다.
- vs DFS: DFS에 비해 구현이 복잡할 수 있지만 최단 경로를 찾는 데 효율적입니다.

## BFS 구현 방법
BFS는 큐를 사용하여 구현합니다. 큐에 시작 노드를 넣고, 큐가 빌 때까지 다음 과정을 반복합니다.
- 큐에서 노드를 꺼내 방문합니다.
- 방문한 노드의 인접 노드를 큐에 넣습니다.
- 방문한 노드는 다시 방문하지 않도록 표시합니다.

![bfs](/img/bfs.png)

```js
function bfs(graph, start) {
  const visited = {};
  const queue = [start];
  visited[start] = true;

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node);

    for (let neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
}
````


## 관련 문제
- [[백준] DFS와 BFS](https://www.acmicpc.net/problem/1260)
- [[백준] 바이러스](https://www.acmicpc.net/problem/2606)
- [[프로그래머스 고득점 킷]](https://school.programmers.co.kr/learn/courses/30/parts/12421)