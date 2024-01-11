import styled, { css } from "styled-components";

const Seat = styled.div`
  width: 40px;
  height: 40px;
  /* margin: 5px; */
  background-color: #ddd;
  /* border-radius: 5px; */
  border: 1px solid black;
  transition: transform 0.3s ease;

  // 선택된 좌석의 스타일
  ${(props) =>
    props.$isSelected &&
    css`
      background-color: #f00;
    `}

  cursor: pointer;
`;

export default Seat;
