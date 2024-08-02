// import logo from './logo.svg';
import './App.css';
import useMousePointer from './utils/useMousePointer';

function App() {
  const location = useMousePointer()
  return (
    <>
    <body id = "b1">
    <div className="App">
      <h1>HELLO</h1>
      <p className = "p1">x: {location.x} y: {location.y}</p>
    </div>
    </body>
    </>
  );
}

export default App;
