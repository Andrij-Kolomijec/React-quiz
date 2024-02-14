import { useRef } from "react";

const Answers: React.FC<{
  answers: string[];
  selectedAnswer: string | null;
  answerState: string;
  onSelect: (selectedAnswer: string | null) => void;
}> = (props) => {
  const { answers, selectedAnswer, answerState, onSelect } = props;

  const shuffledAnswers = useRef<string[]>();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;

        const cssClass =
          answerState === "correct" && isSelected
            ? "correct"
            : answerState === "wrong" && isSelected
            ? "wrong"
            : answerState === "answered" && isSelected
            ? "selected"
            : "";

        return (
          <li key={answer} className="answer">
            <button
              className={cssClass}
              onClick={() => onSelect(answer)}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
