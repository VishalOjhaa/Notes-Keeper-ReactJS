import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createDict(obj) {
  return (
    <Entry
      key={obj.id}
      emoji={obj.emoji}
      name={obj.name}
      meaning={obj.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createDict)}
    </div>
  );
}

export default App;
