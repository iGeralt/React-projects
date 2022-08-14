import React from "react";
import "./App.css";
import { ForceGraph3D } from "react-force-graph";

export const App = () => {
  function genRandomTree(N = 300, reverse = false) {
    return {
      nodes: [...Array(N).keys()].map((i) => ({ id: i })),
      links: [...Array(N).keys()]
        .filter((id) => id)
        .map((id) => ({
          [reverse ? "target" : "source"]: id,
          [reverse ? "source" : "target"]: Math.round(Math.random() * (id - 1)),
        })),
    };
    
  }
  return (
    <div>
      <ForceGraph3D graphData={genRandomTree()} />
    </div>
  );
};

export default App;
