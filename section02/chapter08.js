// 5가지 요소 순회 및 탐색 메서드

/**
 * forEach
 * 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
 */

let arr1 = [1, 2, 3];

// item: 현재 요소의 값, idx: 현재 반복 Count, arr: 전체 배열 값
arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// console.log(doubledArr);

/**
 * includes
 * 배열에 특정 요소가 있는지 확인하는 메서드
 */
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

// console.log(isInclude);

/**
 * indexOf
 * 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
 */
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);

// 찾는 값이 여러개이면 가장 앞의 인덱스를 반환
// 찾는 값이 없다면 -1을 반환
// console.log(index);

/**
 * findIndex
 * 모든 요소를 순회하면서, 콜백함수를 만족하는
 * 특정 요소의 인덱스(위치)를 반환하는 메서드
 */

let arr4 = [1, 2, 3];
// const findIndex = arr4.findIndex((item) => {
//   if (item % 2 !== 0) return true; // 0
// });

const findIndex = arr4.findIndex((item) => item % 2 !== 0);
// console.log(findIndex);

// indexOf는 얕은 비교이므로 객체 값을 찾기 어려움 -> findIndex 사용
let objArr = [{ name: "이정환" }, { name: "홍길동" }];
// console.log(objArr.indexOf({ name: "이정환" })); // -1 반환
console.log(objArr.findIndex((item) => item.name === "이정환")); // 0 반환

/**
 * find
 * 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 반환
 */
let arr5 = [{ name: "이정환" }, { name: "홍길동" }];
const finded = arr5.find((item) => item.name === "이정환");

console.log(finded);
