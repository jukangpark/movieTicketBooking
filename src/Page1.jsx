import React, { useState } from "react";
import { useRecoilState } from "recoil";
import seatPositionAtom from "./atom/seatPositionAtom";
import Tooltip from "./Tooltip";
import seatDataArray from "./seatDataArray";
import Seat from "./Seat";

const Page1 = () => {
  // 각 좌석의 선택 상태를 관리합니다.
  const [selectedSeatId, setSelectedSeatId] = useState(undefined);
  const [seatPosition, setSeatPosition] = useRecoilState(seatPositionAtom);

  // 좌석 선택 토글 함수
  const toggleSeat = (seatId) => {
    setSelectedSeatId(seatId);
  };

  const handleMouseEnter = (seat) => {
    setSeatPosition({
      seatX: seat.x,
      seatY: seat.y,
      x: seat.x * 50,
      y: seat.y * 50,
      show: true,
    });
  };

  return (
    <div>
      <h2>영화 좌석 선택</h2>
      <div style={{ display: "flex", flexWrap: "wrap", width: "250px" }}>
        {seatDataArray.map((seat) => (
          <Seat
            key={seat.id}
            $isSelected={selectedSeatId === seat.id}
            onClick={() => toggleSeat(seat.id)}
            onMouseEnter={() => handleMouseEnter(seat)}
          />
        ))}
      </div>

      <Tooltip seatPosition={seatPosition} />
    </div>
  );
};

export default Page1;
