import { atom } from "recoil";

const seatPositionAtom = atom({
  key: "seatPositionAtom",
  default: {
    seatX: -1,
    seatY: -1,
    show: false,
  },
});

export default seatPositionAtom;
