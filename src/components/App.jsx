import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emoj) {
  return (
    <Entry
      key={emoj.id}
      emoji={emoj.emoji}
      name={emoj.name}
      meaning={emoj.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
