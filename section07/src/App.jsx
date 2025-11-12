import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  /**
   * 라이프사이클
   * 1. 마운트 : 탄생
   * 2. 업데이트 : 변화, 리렌더링
   * 3. 언마운트 : 죽음
   */

  useEffect(() => {
    console.log("mount");
  }, []);

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  const onClickButton = (value) => {
    // setCount는 비동기로 실행됨
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>

      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>

      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
