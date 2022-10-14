import { ChangeEvent, FC, useState } from "react";

interface TodoInputProps {
  onSubmit?: (text: string) => void;
}

const TodoInput: FC<TodoInputProps> = ({ onSubmit }) => {
  const [taskName, setTaskName] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const handleOnSubmit = () => {
    if (onSubmit) {
      onSubmit(taskName);
    }
  };

  return (
    <div className="todo__input__group">
      <label htmlFor="todoInputGroup">Task Name:</label>
      <input
        type="text"
        value={taskName}
        onChange={onChange}
        id="todoInputGroup"
      />
      <button className="todo__input__btn" onClick={handleOnSubmit}>
        Submit
      </button>
    </div>
  );
};

export default TodoInput;
