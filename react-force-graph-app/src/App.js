import { useState, useEffect } from "react";
import "./App.css";
import { ForceGraph3D } from "react-force-graph";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    function genRandomTree(N = 300, reverse = false) {
      return {
        nodes: [...Array(N).keys()].map((i) => ({ id: i })),
        links: [...Array(N).keys()]
          .filter((id) => id)
          .map((id) => ({
            [reverse ? "target" : "source"]: id,
            [reverse ? "source" : "target"]: Math.round(
              Math.random() * (id - 1)
            ),
          })),
      };
    }
    setData(genRandomTree());
  },[]);

  return <ForceGraph3D graphData={data} />;
}

export default App;
