import QuizLogo from "../assets/quiz-logo.png";

const Header: React.FC = () => {
  return (
    <header>
      <img src={QuizLogo} alt="Quiz Logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
};

export default Header;
