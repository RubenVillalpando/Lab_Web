import React, { useCallback, useState } from "react";
import { MuestraIncremento } from "./MuestraIncremento";
export const HookCallback = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <>
      <h1>Hook useCallBack</h1>
      <hr />
      <p>Counter = {counter}</p>
      {/*
 Mandamos llamar al componente hijo
 */}
      <MuestraIncremento incrementFn={increment} />
    </>
  );
};
