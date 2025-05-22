import { useState } from "react";
import { Container } from "react-bootstrap";
import { QuizProvider } from "./context/QuizContext";
import FilterQuiz from "./components/FilterQuiz";
import QuizAccordion from "./components/QuizAccordion";

function App() {
  const [category, setCategory] = useState("Toutes");

  return (
    <QuizProvider>
      <Container className="my-4">
        <h1>Quiz Interactif</h1>
        <FilterQuiz category={category} setCategory={setCategory} />
        <QuizAccordion category={category} />
      </Container>
    </QuizProvider>
  );
}

export default App;
