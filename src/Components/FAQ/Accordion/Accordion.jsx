import PropTypes from "prop-types";

import { Card, QuestionBlock, Answer } from "./Accordion.styled";
import Plus from "../../../Pictures/icons/plus.svg?react";
import Minus from "../../../Pictures/icons/minus.svg?react";
const Accordion = ({ question, handleToggle, opened }) => {
  return (
    <Card>
      <QuestionBlock onClick={() => handleToggle(question.id)}>
        <div>{opened ? <Minus /> : <Plus />}</div>
        <div>{question.question}</div>
      </QuestionBlock>
      {opened && <Answer>{question.answer}</Answer>}
    </Card>
  );
};

export default Accordion;

Accordion.propTypes = {
  question: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired,
};
