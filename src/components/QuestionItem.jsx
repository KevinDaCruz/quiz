import { Accordion, Button, Row, Col, Badge } from "react-bootstrap";
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const QuestionItem = ({ question, eventKey }) => {
  const { dispatch } = useContext(QuizContext);

  const handleValidate = (result) => {
    dispatch({
      type: "VALIDATE_ANSWER",
      payload: { id: question.id, result },
    });
  };

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>
        <Row className="w-100">
          <Col>{question.question}</Col>
          <Col className="text-end">
            {question.validated !== null && (
              <Badge bg={question.validated ? "success" : "danger"}>
                {question.validated ? "Juste" : "Faux"}
              </Badge>
            )}
          </Col>
        </Row>
      </Accordion.Header>
      <Accordion.Body>
        <p>
          <strong>Réponse : </strong>
          {question.answer}
        </p>
        <div className="d-flex gap-2">
          <Button
            variant="success"
            onClick={() => handleValidate(true)}
            disabled={question.validated !== null} // désactive si validé
          >
            Juste
          </Button>
          <Button
            variant="danger"
            onClick={() => handleValidate(false)}
            disabled={question.validated !== null} // désactive si validé
          >
            Faux
          </Button>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default QuestionItem;
