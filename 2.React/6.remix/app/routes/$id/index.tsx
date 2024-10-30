import styled from 'styled-components';
import { useParams } from "@remix-run/react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { toDoState ,compare} from '~/Recoil/atoms';

interface IForm {
	changedValue: string;
}

export default function Id() {
	const params = useParams();
	const { register, handleSubmit ,setValue} = useForm();
	const [toDos, setToDos] = useRecoilState(toDoState);
	const [compareValue, setCompareValue] = useRecoilState(compare);
	let nowId = "TO_DO";
	if (compareValue === "empty") {
		setCompareValue(params.id);
	}
	const onValid = ({ changedValue }: IForm) => {
		const targetIndex = toDos.findIndex((toDo) => toDo.text === compareValue);
		setCompareValue(changedValue);
		const newToDo = {
			"text": changedValue,
			"id": toDos[targetIndex].id,
			"category": nowId,
		};
		setToDos((oldToDos) => {
			return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
			];
		}) 
		setValue("changedValue", "");
	}
	const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
		nowId = event.currentTarget.name;
	}
	console.log(toDos);
	return (
		<Wrapper>
			<Title>
				<h1>Fix {compareValue}</h1>
			</Title>
			<Content>
				<Form onSubmit={handleSubmit(onValid)}>
					<Input {...register("changedValue")} placeholder="new TODO" />
					<Buttons>
						<button name={"TO_DO"} onClick={onClick}>
								TO_DO
						</button>
						<button name={"DOING"} onClick={onClick}>
								Doing
						</button>
						<button name={"DONE"} onClick={onClick}>
								DONE
						</button>
					</Buttons>
				</Form>
			</Content>
		</Wrapper>
	);
}
const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: inherit
`;
const Buttons = styled.div`
	display:flex;
	flex-direction:column;
	gap:5px;
`;
const Input = styled.input`
	color:black;
	width:300px;
	height:30px;
`;
const Wrapper = styled.div`
	display:flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap:20px;
`;
const Title= styled.div`
	font-size:25px;
`
const Content = styled.div`
	display:flex;
	align-items:center;
	border-radius: 10px;
  margin-bottom: 5px;
  padding: 10px;
  background-color:#e4f2ff;
	color:black;
  width:450px;
	height:100px;
	font-size:20px;
`;


/* d 이상입니다 !!  */