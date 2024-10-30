import React from "react";
import { useSetRecoilState } from "recoil";
import { toDoState, IToDo ,compare} from "../Recoil/atoms";
import styled from "styled-components";
import { Link } from '@remix-run/react';

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const setCompare = useSetRecoilState(compare);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const name = event.currentTarget.name;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const onClicks = (event: React.MouseEventHandler<HTMLAnchorElement> ) => {
    const nowName = event.target.innerHTML;
    setCompare(nowName);
  }
  return (
    <List>
      <Wrapper>
        <Link onClick={onClicks} to={`/${text}`} >{text}</Link>
        <NoMean>
          {category !== "DOING" && (
            <button name={"DOING"} onClick={onClick}>
              Doing
            </button>
          )}
          {category !== "TO_DO" && (
            <button name={"TO_DO"} onClick={onClick}>
              To Do
            </button>
          )}
          {category !== "DONE" && (
            <button name={"DONE"} onClick={onClick}>
              Done
            </button>
          )}
        </NoMean>
      </Wrapper>
  </List>
  );
}

const NoMean = styled.div``;

const Wrapper = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

const List = styled.li`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color:#e4f2ff;
  width:250px;
`;

export default ToDo;