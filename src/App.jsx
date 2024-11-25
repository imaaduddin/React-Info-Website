import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => "components", "jsx", "props", "state"
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
