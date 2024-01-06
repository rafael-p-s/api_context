// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import { ChangeCounter } from "../components/ChangeCounter";

// 4 - refatorando context com hook
import { useCounterContext } from "../hook/useCounterContext";

// 5 - CONTEXT MAIS COMPLEXO
import { useTitleColorContext } from "../hook/useTitleColorContext";

export function Home() {
  // const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

  // 5 - CONTEXT MAIS COMPLEXO
  const { color, dispatch } = useTitleColorContext();

  // 6 - ALTERANDO CONTEXT COMPLEXO
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - ALTERANDO VALOR DO CONTEXT */}
      <ChangeCounter />
      {/* 6 - alterando context completo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </>
  );
}
