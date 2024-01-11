import React, { useRef, useState } from "react";
import seatDataArray from "./seatDataArray";
import Seat from "./Seat";
import Tooltip from "./Tooltip";
import { useRecoilState } from "recoil";
import seatPositionAtom from "./atom/seatPositionAtom";

const Page2 = () => {
  const [selectedSeatId, setSelectedSeatId] = useState(undefined);
  const [seatPosition, setSeatPosition] = useRecoilState(seatPositionAtom);

  const containerRef = useRef(null);

  // 좌석 선택 토글 함수
  const toggleSeat = (seatId) => {
    setSelectedSeatId(seatId);
  };

  // 마우스 이동에 따라 좌석을 계산하는 함수
  const handleMouseMove = (event) => {
    if (containerRef.current) {
      const { left, top } = containerRef.current.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      const seatWidth = 50; // Seat 컴포넌트의 가로 크기
      const seatHeight = 50; // Seat 컴포넌트의 세로 크기
      const seatX = Math.floor(x / seatWidth);
      const seatY = Math.floor(y / seatHeight);

      // 만약 좌석이 달라졌다면 seatPosition 을 업데이트 합니다.
      if (seatPosition.seatX !== seatX || seatPosition.seatY !== seatY) {
        setSeatPosition({
          seatX,
          seatY,
          x,
          y,
          show: true,
        });
      }
    }
  };

  return (
    <div>
      <h2>영화 좌석 선택</h2>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        style={{ display: "flex", flexWrap: "wrap", width: "250px" }}
      >
        {seatDataArray.map((seat) => (
          <Seat
            key={seat.id}
            $isSelected={selectedSeatId === seat.id}
            onClick={() => toggleSeat(seat.id)}
          />
        ))}
      </div>

      <Tooltip seatPosition={seatPosition} />
    </div>
  );
};

export default Page2;
