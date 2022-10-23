import "./Questions.css";
import { useState } from "react";
import { buttonList } from "../data/data";
import "../App";

function Questions({ question }) {
  let [colorBg, setColor] = useState({ btnBg: " " });

  const BgColor = (e) => {
    if (e.target.id === "btn_1") {
      setColor({ btnBg: "#f51414" });
    }
    if (e.target.id === "btn_2") {
      setColor({ btnBg: "#07ba34" });
    }
    if (e.target.id === "btn_3") {
      setColor({ btnBg: "#1f07ba" });
    }
    return colorBg;
  };

  const btn = buttonList.map((item) => {
    return (
      <button>
        <input
          type="radio"
          className="input"
          id={item.id}
          name={item.name}
          value={item.value}
          onChange={BgColor}
        />
        {item.value}
      </button>
    );
  });

  const style = { backgroundColor: colorBg.btnBg };

  return (
    <div className="question_text">
      <span style={style}>{question}</span>
      <div>
        <span className="btn_status">{btn}</span>
      </div>
    </div>
  );
}

export default Questions;
