import react from "react";
import Styling from "./PRACTICE/STYLE SHEET/Styling";
import InlineStyling from "./PRACTICE/STYLE SHEET/Inlinestyle";
// import One from "./PRACTICE/FUNCTIONAL COMPONENT/0ne"
// import Setstate from "./PRACTICE/FUNCTIONAL COMPONENT/SETSTATE/Setstate";
// import One from "./PRACTICE/CLASS COMPONENT/One";
// import Parent from "./PRACTICE/FUNCTIONAL COMPONENT/PROPS/Parent";
// import Operator from "./PRACTICE/CONDITIONAL RENDERING/Operator";
// import Lists from "./PRACTICE/LISTS AND KEYS/Props";



function App() {
  return (
    <div className="App">
      <Styling primary={true}/>
      <InlineStyling/>
      {/* <Operator/> */}
      {/* <h1>App.js Component</h1> */}
      {/* <Parent/> */}
       {/* <Lists/> */}
      {/* <One name="Object" used=" is Stateless component"/> */}
      {/* <Setstate/> */}
      {/* <One name="Statefull" used="Component"/> */}
      
    </div>
  );
}

export default App;
