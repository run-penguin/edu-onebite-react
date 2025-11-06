function returnFalse() {
  console.log("Flase 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

/**
 * && 연산자
 * => 좌측항이 True이면 우측항 실행
 * => 좌측항이 False이면 종료 (이미 결과값이 False이므로)
 */

/**
 * || 연산자
 * => 좌측항이 True이면 종료 (이미 결과값이 True이므로)
 * => 좌측항이 False이면 우측항 실행
 */

console.log(returnTure() || returnFalse());

// 단락  평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정화" });
