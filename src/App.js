import "./styles.css";

export default function App() {
  let row1 = getRow("Anton", "Schuster");
  let row2 = favColor("orange", "orange");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {row1}
      <div className="colorArea">
        <h1>asdfasdf</h1>
        {row2}
      </div>
    </div>
  );
}

function getRow(first, last) {
  return (
    <div>
      <b>{first}</b>
      <i>{last}</i>
    </div>
  );
}
function favColor(color, favorite) {
  if (color === favorite) {
    return (
      <div className="colorArea">
        <b>Colors ARE equal.</b>
      </div>
    );
  } else {
    return (
      <div className="colorArea">
        <b>They ARE NOT equal.</b>
      </div>
    );
  }
}
