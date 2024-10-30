import { toDoState } from "~/Recoil/atoms";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";

interface IForm{
  toDo: string;
}

export default function CreateToDo() {
  const setToDos= useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({toDo}:IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" }, ...oldToDos]
    );
    setValue("toDo", "");
  }
  return (
    <div>
      <form onSubmit={(handleSubmit(onValid))}>
        <input {...register("toDo")} placeholder="Write What TODO" />
        <button>Add</button>
      </form>
    </div>
  );
}