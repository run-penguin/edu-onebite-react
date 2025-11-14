import { useReducer } from "react";

/**
 * 3.
 * reducer : 변환기
 * 상태를 실제로 변화시키는 역할
 */
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      state;
  }
}

const Exam = () => {
  /**
   * 1.
   * dispatch : 발송하다, 급송하다
   * 상태 변화가 있어야 한다는 사실을 알리는(발송하는) 함수
   */
  const [state, dispatch] = useReducer(reducer, 0);
  /**
   * 2.
   * 컴포넌트 내부에서 dispatch를 호출하면 상태변화가 요청
   * -> useReducer가 상태변화를 실제로 처리할 함수(상단 reducer 함수)를 호출
   *
   * => useReducer(함수, state의 초기값)
   */

  const onClickPlus = () => {
    /**
     * 4.
     * dispatch를 호출하여 상태변화를 요청
     * 인수에는 상태가 어떻게 변화되길 원하는지 포함 => 액션 객체
     */
    dispatch({
      type: "INCREASE", // 상태가 어떻게 변하길 바라는지
      data: 1, // 얼마나 변경할건지
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
