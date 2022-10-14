import { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";

interface TodoInputProps {
  onSubmit?: (text: string) => void;
}

const TodoInputGroup = styled.div``;

const TodoInputLabel = styled.label``;

const TodoInputInput = styled.input``;

const TodoInputButton = styled.button`
  border: none;
  padding: 0.5rem 0.75rem;
  background: none;
`;

const initialTaskName = "";

const TodoInput: FC<TodoInputProps> = ({ onSubmit }) => {
  const [taskName, setTaskName] = useState(initialTaskName);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const handleOnSubmit = () => {
    if (!taskName) {
      return;
    }

    if (onSubmit) {
      onSubmit(taskName);
    }

    setTaskName(initialTaskName);
  };

  return (
    <TodoInputGroup>
      <TodoInputLabel htmlFor="todoInputGroup">Task Name:</TodoInputLabel>
      <TodoInputInput
        type="text"
        value={taskName}
        onChange={onChange}
        id="todoInputGroup"
      />

      <TodoInputButton onClick={handleOnSubmit}>Submit</TodoInputButton>
    </TodoInputGroup>
  );
};

export default TodoInput;
