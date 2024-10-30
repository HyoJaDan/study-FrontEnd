import { atom ,selector } from "recoil";

export interface IToDo{
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
})
export const todoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return toDos.filter((toDo) => toDo.category === "TO_DO");
  }
});
export const doneSelector = selector({
  key: "doneSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return toDos.filter((toDo) => toDo.category === "DONE");
  }
});
export const doingSelector = selector({
  key: "doingSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return toDos.filter((toDo) => toDo.category === "DOING");
  }
});
export const compare = atom({
  key: "compare",
  default: "empty",
});

/* selector 타입 공부 */
