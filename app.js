'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
  //既に計算済みの場合はマップに値があるので、その値を取ってくる(メモ化)
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value); //計算済みの値を保存
  return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}