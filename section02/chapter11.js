/**
 * 쓰레드 : 작업을 실행하고 처리하는 역할
 */

/**
 * 동기 : 여러개의 작업을 순서대로 하나씩 처리하는 방식
 * 오래 걸리는 작업이 있는 경우 해당 작업이 끝날 때까지 기다리기 때문에 전체 속도가 느려짐
 * JAVA나 C# 같은 언어는 여러개의 쓰레드(멀티 쓰레드)를 이용해 어느 정도 해소할 수 있음
 * 그러나 자바스크립트에는 쓰레드가 1개임 -> 비동기로 해결
 */

/**
 * 비동기 : 작업을 순서대로 처리하지 않는 방식
 * 비동기 작업들은 자바스크립트 엔진이 아닌 Web APIs에서 실행
 * Web APIs : 브라우저가 직접 관리하는 별도의 공간
 *
 * JavaScript Engine이 동기적으로 작업 실행 -> 비동기 작업을 만나면 (작업+callback함수)를 Web APIs에게 전달 -> 이후 작업 계속 처리
 * Web APIs가 작업 처리 -> JavaScript Engine에게 callback 함수 전달 -> JavaScript Engine이 callback 함수를 실행
 */

console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);
