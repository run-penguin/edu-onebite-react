/**
 * async
 * 비동기 함수로 만들어주는 키워드 (함수가 프로미스를 반환하도록 변환)
 */

// async function getData() {
//   return {
//     name: "이정환",
//     id: "winterlood",
//   };
// }

// 반환값이 Promise라면 async는 별다른 역할없이 해당 Promise를 반환함
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 1500);
  });
}

// console.log(getData());

/**
 * await
 * async 함수 내부에서만 사용이 가능한 키워드
 * 비동기 함수가 다 처리되기를 기다리는 역할
 */

async function printData() {
  const data = await getData();
  console.log(data);
}
printData();
