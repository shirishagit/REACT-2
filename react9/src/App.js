import react from "react";
import One from "./PRACTICE/FUNCTIONAL COMPONENT/0ne";
import Setstate from "./PRACTICE/SETSTATE/Setstate";
// import One from "./PRACTICE/CLASS COMPONENT/One";

function App() {
  return (
    <div className="App">
      <h1>App.js Component</h1>
      <One name="Object" used=" is Stateless component"/>
      <Setstate/>
      {/* <One name="Statefull" used="Component"/> */}
    </div>
  );
}

export default App;
