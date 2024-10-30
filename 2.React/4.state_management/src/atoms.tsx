import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});

/* 
export const minuteState = atom({
  key="mimutes",
  default:0,
});
export const hourSelector = selector({
  key:"hours",
  /* get함수는 atom의 값을 가져온다 
    get:({ get }) =>{
      const minutes = get(minuteState);
      return minutes/60;
    },
  });
*/

/* 
  function App(){
    const [minutes,setMinutes]=useRecoilState(minuteState);
    const hours = useRecoilValue(hourSelector);
    const onMinutesChange = (event:React.FormEvent<HTMLInputElement>)(
      setMinutes(+event.currentTarget.value);
    )

    return(
      <div>
        <input
          value={minutes}
          onChange={onMinutesChange}
          type="number" 
          placeholder="Minutes"
        />
        <input value={hours} type="number" placeholder="Hours"  />
      </div>
    );
  }
*/