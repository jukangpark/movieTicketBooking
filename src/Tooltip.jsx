import styled, { css } from "styled-components";
import React from "react";

const TooltipContainer = styled.div`
  position: absolute;
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  display: none;

  ${(props) =>
    props.$show &&
    css`
      display: block;
      left: ${props.x}px;
      top: ${props.y}px;
    `}
`;

const Tooltip = ({ seatPosition }) => {
  return (
    <TooltipContainer
      x={seatPosition.x}
      y={seatPosition.y}
      $show={seatPosition.show}
    >
      {`${seatPosition.seatX} X ${seatPosition.seatY}`}
    </TooltipContainer>
  );
};

export default Tooltip;
