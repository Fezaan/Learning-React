import logo from "./logo.svg";
import "./App.css";

const img = "https://picsum.photos/200/300";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const obj = {
  color: "purple",
  fontSize: "40px",
};

obj.color = "red";
export default function List() {
  return (
    <>
      <h1 style={obj}>Even i don't know what is happening anymore</h1>
    </>
  );
}
