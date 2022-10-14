import { FC, useState } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import type { Props as TodoTaskType } from "./TodoTask";
import { TodoTaskStatus } from "./TodoTask";

const initialTasks: TodoTaskType[] = [
  {
    id: "1",
    name: "test",
    status: TodoTaskStatus.DONE,
  },
  {
    id: "2",
    name: "Eve",
    status: TodoTaskStatus.IN_PROGRESS,
  },
];

const TodoWrapper = styled.section`
  padding: 2rem;
`;

const Todo: FC = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onSubmit = (name: string) => {
    setTasks([
      ...tasks,
      {
        id: Number(tasks.at(-1)?.id ?? 0) + 1 + "",
        name,
        status: TodoTaskStatus.TODO,
      },
    ]);
  };

  return (
    <TodoWrapper>
      <TodoList tasks={tasks} onSubmit={onSubmit} />
    </TodoWrapper>
  );
};

export default Todo;
