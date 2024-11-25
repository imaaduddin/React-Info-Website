import TabButton from "./TabButton.jsx"
import { EXAMPLES } from "../data.js"

export default function Examples() {
    return (
        <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")} label="Components"/>
          <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")} label="JSX"/>
          <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")} label="Props"/>
          <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")} label="State"/>
        </menu>
        {!selectedTopic ? ( <p>Please select a topic.</p> 
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div> 
        )}
      </section>
    )
}