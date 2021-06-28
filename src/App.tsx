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
          <Pokemon name="charmander" />
          <Pokemon name="bulbasaur" />
        </Suspense>
      </Provider>
      <Provider>
        <Suspense fallback="Loading...">
          <Pokemon name="pikachu" />
        </Suspense>
      </Provider>
    </div>
  );
};

export default App;
