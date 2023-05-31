import logo from "./logo.svg";
import "./App.css";

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

export default function List() {
  return (
    <>
      <h1 className="heading" contentEditable="true" spellCheck="false">
        My faviourate anime:
      </h1>
      <ul>
        <li>
          One piece<br></br>
          <img
            src="https://staticg.sportskeeda.com/editor/2022/11/a402f-16694231050443-1920.jpg"
            alt="One Piece image"
          />
        </li>
        <li>
          Classroom of the elite<br></br>
          <img
            src="https://i0.wp.com/animeindia.in/wp-content/uploads/2022/05/Classroom-of-the-Elite-Season-2.jpg?resize=1024%2C768&ssl=1"
            alt="COTE image"
          />
        </li>
        <li>
          Demon Slayer<br></br>
          <img
            src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-81192,resizemode-75,msid-100223563/news/new-updates/demon-slayer-season-3-episode-6-release-timings-and-where-to-watch.jpg"
            alt="Demon slayer image"
          />
        </li>
      </ul>
    </>
  );
}
