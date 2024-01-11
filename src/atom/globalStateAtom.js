import { atom } from "recoil";

export const globalStateAtom = atom({
  key: "globalState",
  value: {
    name: "주강",
    age: 28,
  },
});
