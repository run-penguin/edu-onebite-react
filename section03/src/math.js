export function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

/**
 * Common JS (CJS)
 */
// module.exports = {
//   add,
//   sub,
// };

/**
 * ES Module System을 사용하려면 package.json에서 "type": "module"을 추가해야 함.
 */
export { sub };

export default function multiply(a, b) {
  return a * b;
}
