import { useState } from "react";
import TabButton from "./TabButton.jsx"
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data.js"

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState();

    function handleSelect(selectedButton) {
      // selectedButton => "components", "jsx", "props", "state"
      setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs buttons={
                <>
                    <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")} label="Components"/>
                    <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")} label="JSX"/>
                    <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")} label="Props"/>
                    <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")} label="State"/>
                </>
            }>{tabContent}

            </Tabs>
      </Section>
    )
}