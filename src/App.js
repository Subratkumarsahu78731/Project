import {BrowserRouter as Router} from "react-router-dom"
import Home from "./components/Layout/Users/User/Home/Home";
import Login from "./components/Layout/Users/User/Login";

function App() {
  return (
    <div className="App">
       {/* <Login /> */}
        <Home />
    </div>
  );
}

export default App;
