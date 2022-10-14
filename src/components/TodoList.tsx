import type { FC } from "react";
import styled from "styled-components";
import TodoInput from "./TodoInput";
import type { Props as TodoTaskType } from "./TodoTask";
import TodoTask from "./TodoTask";

export interface Props {
  tasks: TodoTaskType[];
  onSubmit: (text: string) => void;
}

const TodoListWrapper = styled.div``;

const TodoActions = styled.div``;

const TodoTaskContainer = styled.div``;

const TodoList: FC<Props> = ({ tasks, onSubmit }) => (
  <TodoListWrapper>
    <TodoTaskContainer>
      {tasks.map((taskProps, index) => (
        <TodoTask {...taskProps} key={`task_${index}`} />
      ))}
    </TodoTaskContainer>

    <TodoActions>
      <TodoInput onSubmit={onSubmit} />
    </TodoActions>
  </TodoListWrapper>
);

export default TodoList;
