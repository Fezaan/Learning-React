import "./App.css";

const date = new Date();
const time = date.getHours();

const obj={
  color: "blue",
  fontSize: "40px",
  border: "1px dotted green"
}

export default function List() {
  if (time >= 5 && time < 11) {
    obj.color="orange";
    return (
      <>
        <h1 style={obj}>Good Morning</h1>
      </>
    );
  } else if (time >= 11 && time < 16) {
    obj.color="yellow";
    return (
      <>
        <h1 style={obj}>Good Afternoon</h1>
      </>
    );
  } else if (time >= 16 && time < 19) {
    obj.color= "red";
    return (
      <>
        <h1 style={obj}>Good Evening</h1>
      </>
    );
  } else {
    return (
      <>
        <h1 style={obj}>Good Night</h1>
      </>
    );
  }
}
