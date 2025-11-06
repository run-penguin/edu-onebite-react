/**
 * Promise : 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 JavaScript 내장 객체
 * 비동기 작업 실행, 상태 관리, 결과 저장, 병렬 실행, 다시 실행, 기타 등등 ...
 *
 * Promise의 상태
 * 대기(Pending) -> 해결(resolve) -> 성공(Fulfilled)
 * 대기(Pending) -> 거부(reject) -> 실패(Rejected)
 */
// const promise = new Promise((resolve, reject) => {
//   // 비동기 작업을 실행 하는 함수 : executor
//   setTimeout(() => {
//     console.log("안녕");
//     // resolve("안녕");
//     reject("왜 실패했는지 이유..");
//   }, 2000);
// });

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

/**
 * Promise 객체 활용법) then, catch 사용
 */
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const num = 10;

//     if (typeof num === "number") {
//       resolve(num + 10);
//     } else {
//       reject("num이 숫자가 아닙니다.");
//     }
//   }, 2000);
// });

// // then : 성공 시 실행, catch : 실패 시 실행
// // 프로미스 체이닝
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/**
 * Promise 객체 활용법) 함수 안에서 Promise 객체를 생성하면서 동적으로 매개변수를 받아서 사용할 수 있도록 개선해보기
 */
// function add10(num) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof num === "number") {
//         resolve(num + 10);
//       } else {
//         reject("num이 숫자가 아닙니다.");
//       }
//     }, 2000);
//   });

//   return promise;
// }

// const p = add10(0);
// p.then((result) => {
//   console.log(result);

//   const newP = add10(result);
//   newP.then((result) => {
//     console.log(result);
//   });
// });

// 콜백 지옥을 방지하기 위한 방법
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
