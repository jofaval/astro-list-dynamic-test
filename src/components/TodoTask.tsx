import type { FC } from "react";
import styled from "styled-components";

export enum TodoTaskStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export interface Props {
  id: string;
  name: string;
  status: TodoTaskStatus;
}

const TodoTaskWrapper = styled.article`
  padding: 1rem;
`;

const TodoTaskName = styled.span`
  font-weight: bold;
`;

const TodoTask: FC<Props> = ({ id, name, status }) => {
  return (
    <TodoTaskWrapper id={id}>
      <TodoTaskName>{name}</TodoTaskName>
    </TodoTaskWrapper>
  );
};

export default TodoTask;
