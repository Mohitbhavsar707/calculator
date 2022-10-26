import './App.css';



// Components 
import Title from "./components/Title";
import Calcuator from "./components/Calculator";


function App() {
  return (
  <div className="container">
          <Title/>

      <Calcuator />
    </div>
  );
}

export default App;