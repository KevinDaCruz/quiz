import { Form } from "react-bootstrap";

const FilterQuiz = ({ category, setCategory }) => {
  return (
    <Form.Select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="mb-3"
    >
      <option value="Toutes">Toutes</option>
      <option value="Math">Math</option>
      <option value="Science">Science</option>
      <option value="Histoire">Histoire</option>
    </Form.Select>
  );
};

export default FilterQuiz;
