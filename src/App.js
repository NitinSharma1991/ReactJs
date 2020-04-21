import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Ngreet from "./components/Ngreet";
import State from "./components/State";
import Counter from "./components/Counter";
import Functionclick from "./components/FunctionClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import List from "./components/List";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComponents from "./components/PureComponents";
import ParentComp from "./components/ParentComp";
import RefDemo from "./components/RefDemo";
import FocusInput from "./FocusInput";
import PortalDemo from "./components/PortalDemo";

function App() {
  return (
    <div className="App">
      <PortalDemo />
      {/* <FocusInput /> */}
      {/* <RefDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
      {/* <Stylesheet primary={false} />
      <br />
      <Inline /> */}
      {/* <List />
      <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <Functionclick /> */}
      {/* <Counter />
      <State /> */}
      {/* <Greet name="Nitin" heroName="Avengers">
        <p>This is children props</p>
        <p>This is second children</p>
      </Greet>
      <Greet name="Diana" heroName="Messi Fan">
        {" "}
        <input type="submit" value="action" />
      </Greet>{" "}
      <Ngreet name="Nitin" heroName="Avengers" /> */}
    </div>
  );
}

export default App;
