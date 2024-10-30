import CreateToDo from "./CreateToDo";
import { doneSelector,todoSelector, doingSelector,toDoState} from "~/Recoil/atoms";
import { useRecoilValue ,useRecoilState} from 'recoil';
import ToDo from "./ToDo";
import  styled from 'styled-components';
import { NavLink } from "@remix-run/react";
export default function ToDoList() {
  const [toDo, setToDo] = useRecoilState(toDoState);
  const todo = useRecoilValue(todoSelector);
  const doing = useRecoilValue(doingSelector);
  const done = useRecoilValue(doneSelector);
  const activeClassName = "displayNone";
  return (
    <div>
      <Header>
        <NoMean>
          <h1>ToDos</h1>
          <CreateToDo />
        </NoMean>
        <Back>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            
          >
            &#11013;
          </NavLink>
        </Back>
      </Header>
      <hr />
      <OutPut>
        <Wrapper>
          <h1>TO DO</h1>
          <Ul>
            {todo?.map((toDo) => (
              <ToDo text={toDo.text} id={toDo.id} category={toDo.category} key={toDo.id} />
            ))}
          </Ul>  
        </Wrapper>
        <Wrapper>
          <h1>DOING</h1>
          <Ul>
            {doing?.map((doing) => (
              <ToDo text={ doing.text} id={doing.id} category={doing.category} key={doing.id} />
            ))}
          </Ul>
        </Wrapper>
        <Wrapper>
          <h1>DONE</h1>
          <Ul>
            {done?.map((done) => (
              <ToDo text={ done.text} id={done.id} category={done.category} key={done.id} />
            ))}
          </Ul>
        </Wrapper>
      </OutPut>
    </div>
  );
} 
const Header=styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  gap: 10px;
  margin-left: 20px;
  margin-top: 10px;
`
const OutPut = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;
const Wrapper = styled.div`
  min-width:260px;
  min-height:400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Ul = styled.ul`
  max-height:300px;
  overflow-y: auto;
`;
const NoMean = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  gap:10px;
`;
const Back=styled.div`
  font-size:50px;
  margin-right:20px;
  color:white;
  margin-top:10px;
`;