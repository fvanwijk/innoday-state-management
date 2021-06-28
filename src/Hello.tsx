import { useAtom } from "jotai";
import React from "react";

import { countAtom, helloAtom } from "./atoms";

const Hello = (props: { className: string }) => {
  const [count, setCount] = useAtom(countAtom);
  const [hello, setHello] = useAtom(helloAtom);

  return (
    <div {...props} style={{ margin: "1rem" }}>
      <h1>Count: {count}!</h1>
      <button onClick={() => setCount((c) => c + 1)}>Add 1</button>

      <p>{hello}</p>
      <button onClick={() => setHello("new Name")}>Set</button>
    </div>
  );
};

export default Hello;
