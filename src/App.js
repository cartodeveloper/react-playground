import React, { Component } from "react";
import "./App.css";
import Accordion from "./state-drills/Accordion";

/*
const firstTooltip = (
  <Tooltip color="hotpink" message="tooltip message">
    ipsum
  </Tooltip>
);
const secondTooltip = (
  <Tooltip color="#126BCC" message="another tooltip message">
    officiis
  </Tooltip>
); 

function App() {
  return (
    <main className="App">
      <Split className="left" flexBasis="2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex
        velit suscipit facere officia?
        <Tooltip message="one more tooltip message">Necessitatibus?</Tooltip>
      </Split>
      <Split className="right">
        Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis
        quam fuga. Aliquid quo possimus id soluta aspernatur.
        <Messages name="Messages" unread={0} />
        <Messages name="Notifications" unread={10} />
      </Split>
    </main>
  );
}

class App extends Component {
  render() {
    return (
      <TheDate>
        <div></div>
      </TheDate>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Counter>
        <div></div>
      </Counter>
    );
  }
}

const tabsProp = [
  {
    name: "First tab",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.",
  },
  {
    name: "Second tab",
    content:
      "Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Third tab",
    content:
      "Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.",
  },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Tabs tabs={tabsProp} />
      </div>
    );
  }
}
 */
const sections = [
  {
    title: "Section 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Section 2",
    content:
      "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!",
  },
  {
    title: "Section 3",
    content:
      "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?",
  },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Accordion sections={sections} />
      </div>
    );
  }
}

export default App;
