import { atom } from "recoil";

const seatPositionAtom = atom({
  key: "seatPositionAtom",
  default: {
    seatX: -1,
    seatY: -1,
    x: -1,
    y: -1,
    show: false,
  },
});

export default seatPositionAtom;
