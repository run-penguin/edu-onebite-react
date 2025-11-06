// 6가지의 요소 조작 메서드

/**
 * 1. push
 * 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
 */

let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

// console.log(arr1);
// console.log(newLength); // push 메서드는 배열의 길이를 반환한다.

/**
 * 2. pop
 * 배열의 맨 뒤에 있는 요소를 제거하고 반환
 */

let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// console.log(poppedItem);
// console.log(arr2);

/**
 * 3. shift
 * 배열의 맨 앞에 있는 요소를 제거하고 반환
 */
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// console.log(shiftedItem);
// console.log(arr3);

/**
 * 4. unshift
 * 배열의 맨 앞에 새로운 요소를 추가
 */
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

// console.log(newLength2, arr4);

// shfit, unshift는 push, pop보다 느리게 동작함 (전체 index가 변경되어야 하기 때문)

/**
 * 5. slice
 * 배열의 특정 범위를 잘라내서 새로운 배열로 반환
 */
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
let sliced2 = arr5.slice(2); // 시작 index부터 이후 전체를 잘라낼거면 두번째 인수는 생략해도 된다.
let sliced3 = arr5.slice(-1); // 배열의 뒤에서부터 자르고 싶을 때는 음수로
// console.log(sliced);
// console.log(arr5); // 원본 배열의 값은 변경되지 않는다.
// console.log(sliced2);
// console.log(sliced3);

/**
 * 6. concat
 * 두개의 다른 배열을 붙여서 새로운 배열로 반환
 */
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
