import "./App.css";
import Questions from "./components/Questions";
import { data } from "./data/data";

function App() {
  const listQuestions = data.map((item, i) => {
    return (
      <li key={i}>
        <Questions question={item.question} />
      </li>
    );
  });

  return (
    <div className="wrapper">
      <ol>{listQuestions}</ol>
    </div>
  );
}

export default App;
