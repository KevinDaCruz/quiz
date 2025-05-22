import { Form } from "react-bootstrap";

const FilterQuiz = ({ category, setCategory }) => {
  return (
    <div className="mb-3">
      <p>Filtrer par catégorie</p>
      <Form.Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Toutes">Toutes</option>
        <option value="Math">Math</option>
        <option value="Science">Science</option>
        <option value="Histoire">Histoire</option>
      </Form.Select>
    </div>
  );
};

export default FilterQuiz;
