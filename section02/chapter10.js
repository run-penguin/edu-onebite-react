/**
 * Date 객체 생성
 */
let date1 = new Date(); // 생성자 함수
// console.log(date1);

// let date2 = new Date("1997-01-07");
// let date2 = new Date("1997. 01. 07");
// let date2 = new Date("1997/01/07/10:10:10");
let date2 = new Date(1997, 1, 7, 23, 59, 59);
// console.log(date2);

/**
 * 타임 스탬프
 * 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
 * "1970.01.01 00시 00분 00초" => 협정시, UTC
 */
let ts1 = date1.getTime();
let date4 = new Date(ts1);
// console.log(date1, date4);

/**
 * 시간 요소 추출
 */
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 월은 0부터 시작
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// console.log(year, month, date, hour, minute, seconds);

/**
 * 시간 수정
 */
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// console.log(date1);

/**
 * 여러 포맷으로 출력
 */
console.log(date1.toDateString());
console.log(date1.toLocaleString());
