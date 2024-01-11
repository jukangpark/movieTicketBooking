import React, { useRef } from "react";
import Tooltip from "./Tooltip";
import { useRecoilState } from "recoil";
import seatPositionAtom from "./atom/seatPositionAtom";

const Page2 = () => {
  const [seatPosition, setSeatPosition] = useRecoilState(seatPositionAtom);
  const containerRef = useRef(null);

  // 마우스 이동에 따라 좌석을 계산하는 함수
  const handleMouseMove = (event) => {
    if (containerRef.current) {
      const { left, top } = containerRef.current.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      const seatWidth = 40; // Seat 컴포넌트의 가로 크기
      const seatHeight = 40; // Seat 컴포넌트의 세로 크기
      const seatX = Math.floor(x / seatWidth);
      const seatY = Math.floor(y / seatHeight);

      // 만약 좌석이 달라졌다면 seatPosition 을 업데이트 합니다.
      if (seatPosition.seatX !== seatX || seatPosition.seatY !== seatY) {
        setSeatPosition({
          seatX,
          seatY,
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
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "200px",
          height: "200px",
          backgroundImage: `
            linear-gradient(0deg, black 1px, transparent 1px),
            linear-gradient(90deg, black 1px, transparent 1px)
          `,
          backgroundSize: `40px 40px`,
          boxSizing: "border-box",
          borderTop: "1px solid black",
          borderRight: "1px solid black",
          borderBottom: "1px solid black",
          cursor: "pointer",
        }}
      />
      <Tooltip seatPosition={seatPosition} />
    </div>
  );
};

export default Page2;
