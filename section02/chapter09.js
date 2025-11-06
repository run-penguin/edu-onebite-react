// 5가지 배열 변형 메서드

/**
 * filter
 * 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
 */
let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

// const tennisPeople = arr1.filter((item) => {
//   if (item.hobby === "테니스") return true;
// });

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
// console.log(tennisPeople);

/**
 * map
 * 배열의 모든 요소를 순회하면서, 콜백함수를 실행하고 새로운 배열로 반환
 */

let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});
// console.log(mapResult1);

let names = arr1.map((item) => item.name);
// console.log(names);

/**
 * sort
 * 배열을 사전순으로 정렬하는 메서드
 */
// let arr3 = ["b", "a", "c"];
// arr3.sort();

// 사전순이므로 숫자는 제대로 정렬되지 않음. 이때는 콜백함수를 이용해야 함.
let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
  // 오름차순
  if (a > b) {
    // b를 a 앞으로
    return 1; // b,a
  } else if (a < b) {
    // a를 b 앞으로
    return -1; // a,b
  } else {
    // 변경 없음
    return 0;
  }
});

// console.log(arr3);

/**
 * toSorted (가장 최근에 추가된 최신 함수)
 * 정렬된 새로운 배열을 반환하는 메서드
 */

let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// console.log(arr5);
// console.log(sorted);

/**
 * join
 * 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
 */
let arr6 = ["hi", "im", "winterlood"];
// const joined = arr6.join();
const joined = arr6.join("-");

console.log(joined);
