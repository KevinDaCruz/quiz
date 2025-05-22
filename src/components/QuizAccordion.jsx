import { Accordion } from "react-bootstrap";
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import QuestionItem from "./QuestionItem";

const QuizAccordion = ({ category }) => {
  const { questions } = useContext(QuizContext);

  const filteredQuestions =
    category === "Toutes"
      ? questions
      : questions.filter((q) => q.category === category);

  return (
    <Accordion alwaysOpen={false}>
      {filteredQuestions.map((question, index) => (
        <QuestionItem
          key={question.id}
          question={question}
          eventKey={index.toString()}
        />
      ))}
    </Accordion>
  );
};

export default QuizAccordion;
