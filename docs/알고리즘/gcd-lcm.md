---
sidebar_position: 10
---

# 최대공약수(GCD) 최소공배수(LCM)

## 최대공약수(GCD)
유클리드 호제법은 두 수의 최대공약수를 효율적으로 구하는 알고리즘입니다.
- 두 수 a, b (a > b)에 대해, a를 b로 나눈 나머지를 r이라고 하면, a와 b의 최대공약수는 b와 r의 최대공약수와 같습니다.
- r이 0이 될 때까지 이 과정을 반복하면, 마지막으로 나누는 수가 최대공약수가 됩니다.

```js
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
```

## 최소공배수(LCM)
최소공배수는 최대공약수를 이용하여 구할 수 있습니다.
- 두 수 a, b의 최소공배수 = a * b / 최대공약수(a, b)

```js
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
```