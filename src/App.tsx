import { Provider } from "jotai";
import React, { Suspense } from "react";

import Hello from "./Hello";
import { Pokemon } from "./Pokemon";

import "./style.css";

const App = () => {
  return (
    <div>
      <Provider>
        <Hello className="red" />
        <Hello className="red" />
      </Provider>
      <Hello className="blue" />

      <Provider>
        <Suspense fallback="Loading...">
          <Pokemon className="orange" name="charmander" />
          <Pokemon className="orange" name="bulbasaur" />
        </Suspense>
      </Provider>
      <Provider>
        <Suspense fallback="Loading...">
          <Pokemon className="green" name="pikachu" />
        </Suspense>
      </Provider>
    </div>
  );
};

export default App;
